
import { useEffect, useState } from "react";
import Calendar from "../components/calendar/Calendar";
import Stepper from "../components/Stepper";
import MastersPage, { Direction } from "./masters/Master";
import BookingDetails from "./summary/BookingDetails";
import { useNavigate, useParams } from "react-router-dom";
import Container from "./Container";
import iconService from "../assets/star.png";
import iconBooking from "../assets/brifecase-timer.png"
import iconTask  from '../assets/task-square.png';
import SuccessPage from "./success/Success";
import { useGetSalonBySlugQuery } from "../api/SalonApi";
import { useGetMastersQuery } from "../api/MastersApi";
import { useConfirmCodeMutation, useSendCodeMutation } from "../api/Auth";
import { useBookingMutation } from "../api/BookingApi";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import backIcon from '../assets/IconBack.png';
import {  format } from "date-fns";
// import { useGetFreeTimesQuery } from "../api/TimeSlots";
// import { format } from "date-fns";

type Master = {
  id: number;
  name: string;
  phone: string;
  avatar: { url: string }[]; // Массив объектов с полем url
  position: string;
  surname: string;
  facebook: string | null;
  instagram: string | null;
  show_calendar: string; // Возможно, лучше сделать типом "1" | "0" если это поле всегда принимает два значения
  website: string | null;
  directions: Direction[];
};

 const steps = [
   { icon: iconService, label: "Услуга" ,id: 1},
   { icon: iconBooking, label: "Бронь" ,id: 2},
   { icon: iconTask, label: "Итог" ,id: 3},
   { icon: 0, label: "" ,id: 4},
 ];     
const Layout: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedMaster, setSelectedMaster] = useState<Master | null>(null);
  const [selectedServices, setSelectedServices] = useState<
    Set<{
      id: number;
      price: number;
      duration: number;
      name: string;
    }>
  >(new Set());
    // const [registeredUser, setRegisteredUser] = useState<any>(null);
  const [bookingComment, setBookingComment] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const { register, handleSubmit,getValues } = useForm({
    defaultValues: {
      name: "",
      surname: "",
      phone: "",
      code: "",
    },
  });
  // const [formData, setFormData] = useState<any>({
  //   name: "",
  //   surname: "",
  //   phone: "",
  // });
  
  const slug = "ulybkaaa";
  const {
    data: salonData,
  
    
  } = useGetSalonBySlugQuery(slug);
  const [booking] = useBookingMutation();

  /// register
  
  const [sendCode, { isLoading: isSendingCode }] = useSendCodeMutation();

  const [confirmCode] =
    useConfirmCodeMutation();

  const handleSendCode = async (data: any) => {
    try {
      await sendCode({ phone: data.phone }).unwrap();
      alert("Код отправлен успешно!");
    } catch (err) {
      console.error("Ошибка при отправке кода:", err);
    }
  };

  const handleConfirmCode = async (data: any) => {
    try {
      await confirmCode({ phone: data.phone, code: data.code }).unwrap();
      alert("Код подтвержден!");
    } catch (err) {
      console.error("Ошибка подтверждения кода:", err);
    }
  };

  


  const { data: mastersData } = useGetMastersQuery(id);
  const masters = mastersData?.data;

  const specialists = salonData?.data.masters;

  const master = specialists?.find(
    (specialist: Master) => specialist.id === parseInt(id || "0", 10)
  );

  useEffect(() => {
    if (masters && id) {
      const master = specialists?.find(
        (specialist: Master) => specialist.id === parseInt(id, 10)
      );
      if (master) {
        setSelectedMaster(master);
      }
    }
  }, [id, masters, specialists]);

 

  if (!master) {
    console.log(`Мастер с ID ${id} не найден`);
    return (
      <Container>
        <p>Мастер с ID {id} не найден</p>
      </Container>
    );
  }





  ///booking
console.log(selectedTime, "selectedTime");

function calculateEndTime(
  startTime: string,
  services: { duration: string | number }[]
): string {
  // Преобразуем время начала в общее количество минут
  let totalEndMinutes =
    startTime
      ?.split(":")
      ?.reduce((total, part) => total * 60 + parseInt(part, 10), 0) || 0;

  // Добавляем время для каждой выбранной услуги
  for (const service of services) {
    let durationInMinutes = 0;

    if (typeof service.duration === "string") {
      // Если продолжительность в строковом формате "hh:mm"
      const [durationHour, durationMinute] = service.duration
        .split(":")
        .map(Number);
      durationInMinutes = durationHour * 60 + durationMinute;
    } else if (typeof service.duration === "number") {
      // Если продолжительность в числовом формате (в минутах)
      durationInMinutes = service.duration;
    }

    totalEndMinutes += durationInMinutes;
  }

  // Вычисляем итоговое время окончания в часах и минутах
  const endHour = Math.floor(totalEndMinutes / 60);
  const endMinute = totalEndMinutes % 60;

  // Возвращаем форматированное время окончания
  return `${endHour?.toString()?.padStart(2, "0")}:${endMinute
    ?.toString()
    ?.padStart(2, "0")}`;
}
const handleBooking = async () => {

  const formData = getValues(); // Получаем значения из формы
  if (!formData.name || !formData.surname || !formData.phone) {
    alert("Пожалуйста, заполните все поля!");
    return;
  }

  if (
    !master ||
    !selectedDate ||
    !selectedTime ||
    selectedServices.size === 0
  ) {
    alert("Пожалуйста, заполните все поля перед бронированием!");
    return;
  }

  if (!selectedDate || !selectedTime) {
    alert("Неверно выбранная дата или время.");
    return;
  }

  // Формируем строку для start времени
  const startDateTime = `${format(selectedDate, "yyyy-MM-dd")} ${selectedTime}`;

  // Проверяем, что startDateTime имеет правильный формат
  const startDate = new Date(startDateTime);
  if (isNaN(startDate.getTime())) {
    alert("Неверное время начала бронирования.");
    console.error("Invalid start date/time:", startDateTime);
    return;
  }

  console.log("Start date:", startDate); // Логируем startDate для отладки

  // Выбираем услугу, чтобы получить её продолжительность
  const selectedService = [...selectedServices][0]; // Допустим, выбрана только одна услуга
  const durationInMinutes = selectedService?.duration || "00:00"; // Получаем продолжительность услуги в формате "hh:mm"

  // Логируем продолжительность услуги
  console.log("Service duration (hh:mm):", durationInMinutes);

  if (!durationInMinutes) {
    alert("Продолжительность услуги должна быть указана.");
    return;
  }

  // Рассчитываем время окончания с использованием функции calculateEndTime
  const end = calculateEndTime(selectedTime, [...selectedServices]);
const endDateTime = `${format(selectedDate, "yyyy-MM-dd")} ${end}`;

  try {
    await booking({
      phone: formData.phone,
      name: formData.name,
      surname: formData.surname,
      salonDeepLink: salonData?.data?.deep_link || "default-salon",
      masterId: master.id,
      serviceIds: Array.from(selectedServices).map((service) => service.id),
      comment: bookingComment || "No comment",
      start: startDateTime,
      end: endDateTime,
    }).unwrap();

    toast.success("Бронирование успешно выполнено!");
    setCurrentStep(4);
   
  } catch (err: any) {
    toast.error(err.data.message);
    
  }
};



const handleNext = async () => {
  if (currentStep === 3) {
    // Шаг 3: сначала регистрация, потом бронирование
    try {
     
      await handleBooking(); // Потом бронирование
    } catch (error) {
      console.error("Ошибка при регистрации или бронировании:", error);
      
    }
  } else if (currentStep < steps.length) {
    setCurrentStep((prev) => prev + 1); // Переход к следующему шагу
  }
};


const handleBack = () => {
 if (currentStep > 1) {
   setCurrentStep((prev) => prev - 1);
 } else {
   // Если на первом шаге, перенаправляем на главную страницу
   navigate("/");
 }
};
 
  const isNextDisabled = () => {
    if (currentStep === 1) return selectedServices.size === 0;
    if (currentStep === 2) return !selectedDate || !selectedTime;
    if (currentStep === 3) return false;
    return false;
  };

  const getCurrentStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <MastersPage
            master={master}
            masters={masters}
            setSelectedMaster={setSelectedMaster}
            setSelectedServices={setSelectedServices}
            selectedServices={selectedServices}
          />
        );
      case 2:
        return (
          <Calendar
            setSelectedDate={setSelectedDate}
            setSelectedTime={setSelectedTime}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            // timeSlots={timeSlots}
            selectedServices={selectedServices}
            masterId={master?.id || 0}
            currentDate={currentDate}
            setCurrentDate={setCurrentDate}
          />
        );
      case 3:
        return (
          <BookingDetails
            selectedMaster={selectedMaster}
            selectedServices={[...selectedServices]}
            setSelectedServices={setSelectedServices}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            handleSendCode={handleSendCode}
            handleConfirmCode={handleConfirmCode}
            register={register}
            handleSubmit={handleSubmit}
            isSendingCode={isSendingCode}
            comment={bookingComment}
            setComment={setBookingComment}
          />
        );
      case 4:
        return <SuccessPage />;
      default:
        return null;
    }
  };

  const getButtonText = () => {
    if (currentStep === 1) return "Далее";
    if (currentStep === 2) return "Далее";
    if (currentStep === 3) return "Забронировать";
    if (currentStep === 4) return "На главную";
    return "";
  };
  return (
    <div className="px-6 w-full max-w-[600px] mx-auto flex flex-col justify-between gap-2">
      {currentStep >= 1 && (
        <img src={backIcon} alt="backIcon" className="w-6 h-6 cursor-pointer" onClick={handleBack} />
      )}
      <div className="">{getCurrentStepContent()}</div>
      <Stepper steps={steps} currentStep={currentStep} />

      {currentStep <= steps.length && (
        <button
          className={`py-2 w-full max-w-[600px] mx-auto bg-[#E87248] text-white rounded-xl hover:bg-orange-600 ${
            currentStep === steps.length ? "mb-2" : ""
          }`}
          onClick={handleNext}
          type="submit"
          disabled={isNextDisabled()}
          style={{
            opacity: isNextDisabled() ? 0.5 : 1,
            cursor: isNextDisabled() ? "not-allowed" : "pointer",
          }}
        >
          {getButtonText()}
        </button>
      )}
    </div>
  );
}

  export default Layout;