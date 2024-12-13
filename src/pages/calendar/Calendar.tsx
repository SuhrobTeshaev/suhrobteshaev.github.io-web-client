import React from "react";
import Container from "../Container";
import Calendar from "../../components/calendar/Calendar";


const CalendarPage: React.FC = () => {
  return (
    <Container>
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Выберите дату и время
      </h1>
      <Calendar />
      <div className="mt-4 flex flex-wrap gap-2">
        {["10:00", "11:00", "12:00", "13:00"].map((time) => (
          <span
            key={time}
            className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-200"
          >
            {time}
          </span>
        ))}
      </div>
    </Container>
  );
};

export default CalendarPage;
