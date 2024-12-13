import { useState } from "react";
import Calendar from "../components/calendar/Calendar";
import Stepper from "../components/Stepper";
import MastersPage from "./masters/Master";
import BookingDetails from "./summary/BookingDetails";
import { useParams } from "react-router-dom";
import Container from "./Container";
import { specialists } from "../components/Home";
import iconService from "../assets/star.png";
import iconBooking from "../assets/brifecase-timer.png"
import iconTask  from '../assets/task-square.png';
 const steps = [
   { icon: iconService, label: "Услуга" },
   { icon: iconBooking, label: "Бронь" },
   { icon: iconTask, label: "Итог" },
 ];     
const Layout: React.FC = () => {
       const { id } = useParams<{ id: string }>();
       const [currentStep, setCurrentStep] = useState(1);

       console.log("Полученный ID:", id);

       const master = specialists.find(
         (specialist) => specialist.id === parseInt(id || "0", 10)
       );

       if (!master) {
         console.log(`Мастер с ID ${id} не найден`);
         return (
           <Container>
             <p>Мастер с ID {id} не найден</p>
           </Container>
         );
       }


     const handleNext = () => {
       if (currentStep < steps.length) {
         setCurrentStep(currentStep + 1);
       }
     };
      const getCurrentStepContent = () => {
        switch (currentStep) {
          case 1:
            return <MastersPage master={master} />;
          case 2:
            return <Calendar />;
          case 3:
            return <BookingDetails />;
          default:
            return null;
        }
      };

       const getButtonText = () => {
         if (currentStep === 1) return "Далее";
         if (currentStep === 2) return "Далее";
         if (currentStep === 3) return "Зарегистрироваться";
         return "";
       };
  return (
    <div className="px-6 flex flex-col justify-between gap-2">
      {/* Stepper Component */}

      {/* Render Content Based on Current Step */}
      <div className="">{getCurrentStepContent()}</div>
      <Stepper steps={steps} currentStep={currentStep} />

      {currentStep <= steps.length && (
        <button
          className={`py-2 w-full max-w-[600px] mx-auto bg-[#E87248] text-white rounded-xl hover:bg-orange-600 ${
            currentStep === steps.length ? "mb-2" : ""
          }`}
          onClick={handleNext}
        >
          {getButtonText()}
        </button>
      )}
    </div>
  );
}

  export default Layout;