import React from "react";
import { Link } from "react-router-dom";
import rightIcon from '@/assets/right.png'
import img from "@/assets/logo.png";
type Service = {
  id: number;
  name: string;
  price: number;
  duration: number;
};
export type Direction = {
  id: number;
  image: string | null;
  name: string;
  services: Service[]; // Вы можете уточнить тип для массива услуг
};

interface SpecialistCardProps {
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
}

interface MastersCardProps {
  specialists: SpecialistCardProps[];
  
  setSelectedMaster: (master: SpecialistCardProps) => void;
}




const MastersCard: React.FC<MastersCardProps> = ({
  specialists,
  setSelectedMaster,
  
}) => {
  const path = window.location.pathname;

  return (
    <section>
      <div
        className={`space-y-4 overflow-y-auto max-w-xl  w-full mx-auto ${
          path === "/" ? "min-h-[calc(4*5.7rem)] max-h-[calc(4*5.7rem)]" : ""
        }`}
      >
        {specialists?.map((specialist) =>
          // Conditionally render the Link component based on the path
          path === "/" ? (
            <Link to={`/masters/${specialist.id}`} key={specialist.id}>
              <div
                className={`flex items-center ${
                  path === "/" && "px-6 py-4"
                } py-4 rounded-lg cursor-pointer hover:shadow-sm`}
                onClick={() => {
                  setSelectedMaster(specialist); // Set selected master
                }}
              >
                <img
                  src={specialist.avatar?.[0]?.url || img}
                  alt={specialist.name}
                  className="w-[60px] h-[60px] bigMobile:w-[4.5rem] bigMobile:h-[4.5rem] rounded mr-4"
                />
                <div className="flex-1">
                  <p className="bigMobile:text-base text-gray-500 text-xs">
                    {specialist.position}
                  </p>
                  <p className="bigMobile:text-xl text-base font-medium">
                    {specialist.name} {specialist.surname}
                  </p>
                  <p className="bigMobile:text-base text-xs text-gray-500">
                    {specialist.phone}
                  </p>
                </div>
                <img src={rightIcon} alt="icon right" className="w-4 h-4" />
              </div>
              <div className="h-[1px] bg-gray-200"></div>
            </Link>
          ) : (
            // When not on the '/' page, render the card without a link (static card)
            <div
              key={specialist.id}
              className={`flex items-center px-6 py-4 rounded-lg`}
            >
              <img
                src={specialist.avatar?.[0]?.url || img}
                alt={specialist.name}
                className="w-[60px] h-[60px] bigMobile:w-[4.5rem] bigMobile:h-[4.5rem] rounded mr-4"
              />
              <div className="flex-1">
                <p className="bigMobile:text-base text-gray-500 text-xs">
                  {specialist.position}
                </p>
                <p className="bigMobile:text-xl text-base font-medium">
                  {specialist.name} {specialist.surname}
                </p>
                <p className="bigMobile:text-base text-xs text-gray-500">
                  {specialist.phone}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default MastersCard;
