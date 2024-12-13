import React, { useState } from "react";
import { Collapse } from "@mui/material"; 
import icontop from '../../assets/Vector2.png'
import iconbottom from "../../assets/Vector.png";


type Service = {
  id: number;
  name: string;
  price: string;
  duration: string;
};

type Category = {
  name: string;
  services: Service[];
};

const categories: Category[] = [
  {
    name: "Стрижки",
    services: [
      { id: 1, name: "Стрижка кроп", price: "50 TJS", duration: "1 час" },
      { id: 2, name: "Экзекьютив", price: "60 TJS", duration: "20 мин" },
      { id: 3, name: "Андеркат", price: "50 TJS", duration: "1 час" },
      { id: 4, name: "Фейд", price: "75 TJS", duration: "1 час" },
    ],
  },
  {
    name: "Маникюр",
    services: [
      {
        id: 5,
        name: "Маникюр классический",
        price: "100 TJS",
        duration: "1 час",
      },
      {
        id: 6,
        name: "Маникюр с покрытием",
        price: "150 TJS",
        duration: "1.5 часа",
      },
    ],
  },
  {
    name: "Чистка лица",
    services: [
      {
        id: 7,
        name: "Ультразвуковая чистка",
        price: "120 TJS",
        duration: "1 час",
      },
      {
        id: 8,
        name: "Механическая чистка",
        price: "140 TJS",
        duration: "1.5 часа",
      },
    ],
  },
  {
    name: "test",
    services: [
      { id: 9, name: "Стрижка кроп", price: "50 TJS", duration: "1 час" },
      { id: 10, name: "Экзекьютив", price: "60 TJS", duration: "20 мин" },
      { id: 11, name: "Андеркат", price: "50 TJS", duration: "1 час" },
      { id: 12, name: "Фейд", price: "75 TJS", duration: "1 час" },
    ],
  },
  {
    name: "Стрижки",
    services: [
      { id: 1, name: "Стрижка кроп", price: "50 TJS", duration: "1 час" },
      { id: 2, name: "Экзекьютив", price: "60 TJS", duration: "20 мин" },
      { id: 3, name: "Андеркат", price: "50 TJS", duration: "1 час" },
      { id: 4, name: "Фейд", price: "75 TJS", duration: "1 час" },
    ],
  },
  {
    name: "Стрижки",
    services: [
      { id: 1, name: "Стрижка кроп", price: "50 TJS", duration: "1 час" },
      { id: 2, name: "Экзекьютив", price: "60 TJS", duration: "20 мин" },
      { id: 3, name: "Андеркат", price: "50 TJS", duration: "1 час" },
      { id: 4, name: "Фейд", price: "75 TJS", duration: "1 час" },
    ],
  },
  {
    name: "Стрижки",
    services: [
      { id: 1, name: "Стрижка кроп", price: "50 TJS", duration: "1 час" },
      { id: 2, name: "Экзекьютив", price: "60 TJS", duration: "20 мин" },
      { id: 3, name: "Андеркат", price: "50 TJS", duration: "1 час" },
      { id: 4, name: "Фейд", price: "75 TJS", duration: "1 час" },
    ],
  },
];

const ServiceCard: React.FC = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [selectedServices, setSelectedServices] = useState<Set<number>>(
    new Set()
  );

  const toggleCategory = (categoryName: string) => {
    setExpandedCategory((prev) =>
      prev === categoryName ? null : categoryName
    );
  };

  const toggleService = (serviceId: number) => {
    setSelectedServices((prev) => {
      const updated = new Set(prev);
      if (updated.has(serviceId)) {
        updated.delete(serviceId);
      } else {
        updated.add(serviceId);
      }
      return updated;
    });
  };

  return (
    <div className="min-h-[calc(4*7rem)] overflow-y-auto max-h-[calc(4*7rem)]">
      {categories.map((category) => (
        <div key={category.name} className="my-6 ">
          <div
            className="flex justify-between items-center cursor-pointer border-b pb-4"
            onClick={() => toggleCategory(category.name)}
          >
            <h2 className="bigMobile:text-base flex gap-2 font-medium text-[#262626]">
              {category.name}
              <span className="text-[#E87248]">
                ({category.services.length})
              </span>
            </h2>
            <span className="mr-3">
              {expandedCategory === category.name ? (
                <img src={iconbottom} alt="top" />
              ) : (
                <img src={icontop} alt="top" />
              )}
            </span>
          </div>
          <Collapse in={expandedCategory === category.name}>
            <div className="mt-3 space-y-3">
              {category.services.map((service) => (
                <div
                  key={service.id}
                  className={`flex justify-between items-center p-3  ${
                    selectedServices.has(service.id)
                      ? "border-orange-500 bg-[#F5F5F5] rounded-lg"
                      : "border-gray-300"
                  }`}
                  onClick={() => toggleService(service.id)}
                >
                  <div className="flex gap-2 flex-row items-center ">
                    <input
                      type="checkbox"
                      className="h-4 w-4 border-gray-300 text-orange-500 after:ring-orange-500"
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
