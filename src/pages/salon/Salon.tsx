import React from "react";
import Container from "../Container";


const SalonPage: React.FC<{
  salon: {
    id: number;
    avatar: string;
    name: string;
    canAcceptBooking: number;
    category: string;
    street: string;
  };
}> = ({ salon }) => {
  return (
    <Container>
      {/* Верхняя часть для экранов до 600px */}
      <section className="mb-6 flex flex-col px-6 sm:hidden">
        <img
          src={salon.avatar}
          alt="Salon"
          className="w-[72px] h-[72px] rounded-lg mb-4"
        />
        <div>
          <div className="flex space-x-4 mb-2">
            <span className="text-sm font-normal text-gray-500 rounded border py-[2px] px-1 border-gray-600">
              {salon.category}
            </span>
            {salon?.canAcceptBooking === 1 && (
              <span className="text-sm font-normal border-orange-600 rounded border py-[2px] px-1 text-orange-600">
                Онлайн запись
              </span>
            )}
          </div>
          <h1 className="text-base font-semibold mb-1">{salon.name}</h1>
          <p className="text-base text-gray-500">{salon.street}</p>
        </div>
      </section>

      {/* Верхняя часть для экранов больше 600px */}
      <section className="hidden sm:flex mb-6 px-6">
        {/* <img
          src={salon.avatar}
          alt="Salon"
          className="bigMobile:w-[100px] w-[72px] h-[72px] bigMobile:h-[100px] rounded-lg mr-4"
        /> */}
        <div className="flex items-center mb-2">
          <div>
            <div className="flex space-x-4">
              <span className="text-sm font-normal text-gray-500 rounded border bigMobile:py-[2px] bigMobile:px-1 border-gray-600">
                {salon.category}
              </span>
              {salon?.canAcceptBooking === 1 && (
                <span className="text-sm font-normal border-orange-600 rounded border bigMobile:py-[2px] bigMobile:px-1 text-orange-600">
                  Онлайн запись
                </span>
              )}
            </div>
            <h1 className="text-base bigMobile:text-2xl font-semibold">
              {salon.name}
            </h1>
            <p className="text-base text-gray-500">{salon.street}</p>
          </div>
        </div>
      </section>

      <p className="text-base font-medium mb-4 border-b border-[#F0F0F0] w-full px-6">
        Специалисты
      </p>

      {/* Карточка для экранов больше 600px */}
      <div className="hidden sm:block bg-white shadow-lg max-h-[372px] h-full rounded-[20px] max-w-[291px] w-full overflow-hidden border border-gray-200 relative">
        <div className="absolute top-4 left-4 flex space-x-2">
          {salon.canAcceptBooking === 1 && (
            <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
              Онлайн запись
            </span>
          )}
          <span className="bg-gray-200 text-gray-700 text-xs font-bold px-2 py-1 rounded">
            {salon.category}
          </span>
        </div>
        <img
          src={salon.avatar}
          alt={salon.name}
          className="w-full h-52 object-cover"
        />
        <div className="px-4 py-2">
          <h3 className="text-lg font-semibold mb-1">{salon.name}</h3>
          <p className="text-sm text-gray-500">{salon.street}</p>
        </div>
      </div>
    </Container>
  );
};

export default SalonPage;
