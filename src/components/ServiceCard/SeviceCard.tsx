import React, { useEffect, useState } from "react";
import { Collapse } from "@mui/material"; 
import icontop from '../../assets/Vector2.png'
import iconbottom from "../../assets/Vector.png";


interface ServiceCardProps {
  masters: any;
  selectedServices: Set<{
    id: number;
    price: number;
    duration: number;
    name: string;
  }>;
  setSelectedServices: React.Dispatch<
    React.SetStateAction<
      Set<{
        id: number;
        price: number;
        duration: number;
        name: string;
      }>
    >
  >;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  masters,
  setSelectedServices,
  selectedServices,
}) => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  // const [selectedServices, setSelectedServices] = useState<Set<number>>(
  //   new Set()
  // );
  useEffect(() => {
    const savedServices = localStorage.getItem("selectedServices");
    if (savedServices) {
      setSelectedServices(new Set(JSON.parse(savedServices)));
    }
  }, [setSelectedServices]);

  // Сохранение состояния selectedServices в localStorage при изменении
  useEffect(() => {
    if (selectedServices.size > 0) {
      localStorage.setItem(
        "selectedServices",
        JSON.stringify([...selectedServices])
      );
    }
  }, [selectedServices]);

  const toggleCategory = (categoryName: string) => {
    setExpandedCategory((prev) =>
      prev === categoryName ? null : categoryName
    );
  };

  const toggleService = (service: {
    id: number;
    price: number;
    duration: number;
    name: string;
  }) => {
    setSelectedServices((prev) => {
      const updated = new Set(prev);
      const existing = [...updated].find((item) => item.id === service.id);
      if (existing) {
        updated.delete(existing); // Убираем услугу, если она уже выбрана
      } else {
        updated.add(service); // Добавляем услугу, если она не выбрана
      }
      return updated;
    });
  };



  return (
    <div className="min-h-[calc(4*7rem)] overflow-y-auto max-h-[calc(4*7rem)]">
      {masters?.directions?.map((direction: any) => (
        <div key={direction.id} className="my-6 ">
          <div
            className="flex justify-between items-center cursor-pointer border-b pb-4"
            onClick={() => toggleCategory(direction.name)}
          >
            <h2 className="bigMobile:text-base flex gap-2 font-medium text-[#262626]">
              {direction.name}
              <span className="text-[#E87248]">
                ({direction.services.length})
              </span>
            </h2>
            <span className="mr-3">
              {expandedCategory === direction.name ? (
                <img src={iconbottom} alt="top" />
              ) : (
                <img src={icontop} alt="top" />
              )}
            </span>
          </div>
          <Collapse in={expandedCategory === direction.name}>
            <div className="mt-3 space-y-3">
              {direction.services.map((service: any) => (
                <div
                  key={service.id}
                  className={`flex justify-between items-center p-3  ${
                    selectedServices.has(service.id)
                      ? "border-orange-500 bg-[#F5F5F5] rounded-lg"
                      : "border-gray-300"
                  }`}
                  onClick={() => toggleService(service)}
                >
                  <div className="flex gap-2 flex-row items-center ">
                    <input
                      type="checkbox"
                      defaultChecked={true}
                      onChange={() => toggleService(service)}
                      className="h-4 w-4 border-gray-300 text-orange-500 bg-white "
                    />
                    <p className="text-[#262626] font-medium">{service.name}</p>
                  </div>
                  <div>
                    <p className="text-[#141414] text-xs font-normal">
                      {service.price}
                    </p>
                    <p className="text-[#8C8C8C] text-xs font-normal">
                      {service.duration}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Collapse>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
