  import React, {  useEffect } from "react";
  import {
    format,
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    addDays,
    addMonths,
    subMonths,
    isSameMonth,
    isSameDay,
  } from "date-fns";
  import { ru } from "date-fns/locale/ru";
  import left from "../../assets/left.png";
  import right from "../../assets/right.png";
  import { useGetFreeTimesQuery } from "../../api/TimeSlots";

  const Calendar: React.FC<{
    setSelectedDate: React.Dispatch<React.SetStateAction<Date | null>>;
    setSelectedTime: React.Dispatch<React.SetStateAction<string | null>>;
    selectedDate: Date | null;
    selectedTime: string | null;
    selectedServices: Set<{
      id: number;
      price: number;
      duration?: string | number;
      name: string;
    }>;
    masterId: number;
    currentDate: Date;
    setCurrentDate: React.Dispatch<React.SetStateAction<Date>>;
  }> = ({
    setSelectedDate,
    setSelectedTime,
    selectedDate,
    selectedTime,
    selectedServices,
    masterId,
    currentDate,
    setCurrentDate,
  }) => {
    // Calculate total duration in minutes
   const totalMinutes = Array.from(selectedServices).reduce((acc, service) => {
     if (typeof service.duration === "string") {
       const [hours, minutes] = service.duration.split(":").map(Number);
       if (isNaN(hours) || isNaN(minutes)) {
         console.error(
           `Invalid duration format for service: ${service.duration}`
         );
         return acc;
       }
       return acc + hours * 60 + minutes;
     }
     return acc;
   }, 0);

    // Format the current month for the query
    const formattedCurrentMonth = format(currentDate, "yyyy-MM");

    // Fetch free times from the API based on the formatted current month
    const { data: freeTimes } = useGetFreeTimesQuery({
      masterId,
      date: formattedCurrentMonth,
      duration: totalMinutes,
    });

    // Handle previous month navigation
    const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));

    // Handle next month navigation
    const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));

    // Generate days of the current month
    const generateDates = () => {
      const monthStart = startOfMonth(currentDate);
      const monthEnd = endOfMonth(monthStart);
      const weekStart = startOfWeek(monthStart, { locale: ru });
      const weekEnd = endOfWeek(monthEnd, { locale: ru });

      let days = [];
      let day = weekStart;

      while (day <= weekEnd) {
        days.push(day);
        day = addDays(day, 1);
      }

      return days;
    };

    const days = generateDates();

    // Handle time selection
    const handleTimeClick = (time: string) => setSelectedTime(time);

    // Handle date selection
    const handleDateClick = (day: Date) => {
      setSelectedDate(day);
    };

    // Check if slots are available for the selected date
    const getAvailableSlotsForDate = (date: Date) => {
      const dateString = format(date, "yyyy-MM-dd");
      const slotData = freeTimes?.availableSlots.find(
        (slot: { date: string; }) => slot.date === dateString
      );
      return slotData?.slots || [];
    };

    

    // When the currentDate changes, the request will automatically be triggered
    useEffect(() => {
      // Trigger the data fetch when the current month changes
      // const formattedCurrentMonth = format(currentDate, "yyyy-MM");
      // Ensure that the query is re-triggered with the updated month
    }, [currentDate]);

    return (
      <div className="max-w-[600px] mx-auto">
        <h2 className="text-lg font-semibold">Дата записи</h2>
        <div className="mb-4 border rounded-xl p-2">
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={prevMonth}
              className="text-[#BFBFBF] hover:text-gray-800"
            >
              <img src={left} alt="left" className="w-3 h-3 ml-3" />
            </button>
            <h2 className="text-base font-medium">
              {format(currentDate, "LLLL yyyy", { locale: ru })}
            </h2>
            <button
              onClick={nextMonth}
              className="text-gray-600 hover:text-gray-800"
            >
              <img src={right} alt="right" className="w-3 h-3 mr-3" />
            </button>
          </div>
          <div className="grid grid-cols-7 text-center text-gray-500 mb-2">
            {["пн", "вт", "ср", "чт", "пт", "сб", "вс"].map((day) => (
              <div key={day} className="uppercase text-xs">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 text-center">
            {days.map((day, index) => {
              const isToday = isSameDay(day, new Date());
              const isSelected = selectedDate && isSameDay(day, selectedDate);
              const isInactive = !isSameMonth(day, currentDate);
              // const isSunday =
              //   format(day, "eee", { locale: ru }).toLowerCase() === "вс";

              const availableSlots = getAvailableSlotsForDate(day);
              const isDayAvailable = availableSlots.length > 0;

              return (
                <button
                  key={index}
                  onClick={() => isDayAvailable && handleDateClick(day)}
                  className={`p-[12px] rounded-full text-sm ${
                    isInactive
                      ? "text-gray-400 cursor-not-allowed"
                      : isDayAvailable
                      ? "text-orange-500 hover:bg-orange-100"
                      : "text-gray-500"
                  } ${isToday ? "" : ""} ${
                    isSelected
                      ? "bg-orange-400 text-white"
                      : "hover:bg-gray-200"
                  }`}
                >
                  {format(day, "dd")}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Время записи</h2>
          <div className="grid grid-cols-4 gap-2 mt-2">
            {selectedDate &&
              getAvailableSlotsForDate(selectedDate).map((time: string) => (
                <button
                  key={time}
                  onClick={() => handleTimeClick(time)}
                  className={`p-2 text-sm rounded-lg ${
                    selectedTime === time
                      ? "bg-[#E87248] text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  {time}
                </button>
              ))}
          </div>
        </div>
      </div>
    );
  };

  export default Calendar;
