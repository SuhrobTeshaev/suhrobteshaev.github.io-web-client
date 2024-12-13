import React from "react";
import { Link } from "react-router-dom";
import rightIcon from '../../assets/right.png'

type SpecialistCardProps = {
  id: number;
  name: string;
  title: string;
  phone: string;
  image: string;
};

type MastersCardProps = {
  specialists: SpecialistCardProps[];
};


const MastersCard: React.FC<MastersCardProps> = ({ specialists }) => {
  const path = window.location.pathname;
  return (
    <section className=" ">
      <div
        className={`space-y-4  overflow-y-auto ${
          path === "/" ? "min-h-[calc(4*5.7rem)] max-h-[calc(4*5.7rem)]" : ""
        } `}
      >
        {specialists?.map((specialist) => (
          <Link to={`/masters/${specialist.id}`} key={specialist.id}>
            <div
              className={`flex items-center ${
                path === "/" && "px-6 py-4"
              }  py-4 rounded-lg cursor-pointer hover:shadow-sm`}
              onClick={() => console.log(`Выбран: ${specialist.name}`)}
            >
              <img
                src={specialist.image}
                alt={specialist.name}
                className="w-[60px] h-[60px] bigMobile:w-[4.5rem] bigMobile:h-[4.5rem] rounded mr-4"
              />
              <div className="flex-1">
                <p className="bigMobile:text-base text-gray-500 text-xs">
                  {specialist.title}
                </p>
                <p className="bigMobile:text-xl text-base font-medium">
                  {specialist.name}
                </p>
                <p className="bigMobile:text-base text-xs text-gray-500">
                  {specialist.phone}
                </p>
              </div>
              {path === "/" && (
                <img src={rightIcon} alt="icon right" className="w-4 h-4" />
              )}
            </div>
            <div className="h-[1px] bg-gray-200"></div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default MastersCard;
