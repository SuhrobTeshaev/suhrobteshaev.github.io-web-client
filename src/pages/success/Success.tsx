import React from "react";
import Container from "../Container";


const SuccessPage: React.FC = () => {
  return (
    <Container>
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Успешно забронировано!
      </h1>
      <p className="text-gray-600">
        Спасибо за ваше бронирование. Мы ждем вас!
      </p>
      <button
        className="w-full mt-4 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600"
        onClick={() => console.log("Вернуться на главную")}
      >
        На главную
      </button>
    </Container>
  );
};

export default SuccessPage;
