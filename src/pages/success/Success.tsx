import React from "react";
import Container from "../Container";


const SuccessPage: React.FC = () => {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center p-4">
        {/* Статус и текст */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <div className="flex justify-center items-center mb-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <svg
                className="w-10 h-10 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Забронировано!
          </h2>
          <p className="text-gray-500">
            Спасибо, что воспользовались сервисом Navbat
          </p>
        </div>

        {/* Баннер */}
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <p className="text-gray-700 text-center font-medium mb-4">
            Скачайте приложение и начните бронировать с лёгкостью!
          </p>
          <p className="text-gray-500 text-sm mb-6 text-center">
            Удобное приложение для управления ваших записей
          </p>

          <div className="flex space-x-4">
            {/* Google Play */}
            <a href="#" className="block" aria-label="Google Play">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="w-36"
              />
            </a>
            {/* App Store */}
            <a href="#" className="block" aria-label="App Store">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="w-36"
              />
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SuccessPage;
