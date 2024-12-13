import React, { useState } from "react";
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
import {ru} from "date-fns/locale/ru";
import left from '../../assets/left.png'
import right from '../../assets/right.png'


const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const timeSlots = [
    "09:00",
    "09:20",
    "10:00",
    "10:40",
    "13:00",
    "13:20",
    "14:00",
    "14:40",
    "15:00",
    "15:30",
    "16:20",
    "16:40",
  ];

  // Переход на предыдущий месяц
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));

  // Переход на следующий месяц
  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));

  // Генерация массива дней
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

  // Обработчик выбора времени
  const handleTimeClick = (time: string) => setSelectedTime(time);

  return (
    <div className=" max-w-[600px] mx-auto ">
      <h2 className="text-lg font-semibold">Дата записи</h2>
      <div className="mb-4 border rounded-xl p-2">
        <div className="flex justify-between items-center mb-4 ">
          <button
            onClick={prevMonth}
            className="text-[#BFBFBF] hover:text-gray-800 "
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
            const isSunday =
              format(day, "eee", { locale: ru }).toLowerCase() === "вс";

            return (
              <button
                key={index}
                onClick={() => setSelectedDate(day)}
                className={`p-[12px] rounded-full text-sm ${
                  isInactive
                    ? "text-gray-300"
                    : isSunday
                    ? "text-red-500"
                    : "text-gray-900"
                } ${isToday ? "bg-[#E87248]" : ""} ${
                  isSelected ? "bg-orange-400 text-white" : "hover:bg-gray-200"
                }`}
              >
                {format(day, "dd")}
              </button>
            );
          })}
        </div>
      </div>

      {/* Выбор времени */}
      <div>
        <h2 className="text-lg font-semibold">Время записи</h2>
        <div className="grid grid-cols-4 gap-2 mt-2">
          {timeSlots.map((time) => (
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
