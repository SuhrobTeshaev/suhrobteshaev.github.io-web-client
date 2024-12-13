import React from "react";
import Container from "../Container";
import logo from "../../assets/logo.png";



const SalonPage: React.FC = () => {
  return (
    <Container>
      <section className="mb-6 flex px-6 ">
        <img
          src={logo}
          alt="Salon"
          className="bigMobile:w-[100px] w-[72px] h-[72px] bigMobile:h-[100px] rounded-lg mr-4"
        />
        <div className="flex items-center mb-2">
          <div>
            <div className="flex space-x-4">
              <span className="text-sm font-normal text-gray-500  rounded border bigMobile:py-[2px] bigMobile:px-1 border-gray-600 ">
                Салон красоты
              </span>
              <span className="text-sm font-normal border-orange-600  rounded border  bigMobile:py-[2px] bigMobile:px-1 text-orange-600">
                Онлайн запись
              </span>
            </div>
            <h1 className="text-base bigMobile:text-2xl font-semibold">
              Студия красоты "Насиба"
            </h1>
            <p className="text-base text-gray-500">
              проспект Рудаки 84 (Чайхана Рохат)
            </p>
          </div>
        </div>
      </section>
      <p className="text-base font-medium mb-4 border-b border-[#F0F0F0] w-full px-6">
        Специалисты
      </p>
    </Container>
  );
};

export default SalonPage;
