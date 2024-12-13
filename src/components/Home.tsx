import React from "react";
import SalonPage from "../pages/salon/Salon";
import MastersCard from "./masters/MastersCard";
import img from "../assets/logo.png";
export const specialists = [
  {
    id: 1,
    name: "Иван Иванов",
    title: "Стрижка",
    phone: "+7 (123) 456-78-90",
    image: img,
  },
  {
    id: 2,
    name: "Петр Петров",
    title: "Маникюр",
    phone: "+7 (123) 456-78-90",
    image: img,
  },
  {
    id: 3,
    name: "Петр Петров",
    title: "Маникюр",
    phone: "+7 (123) 456-78-90",
    image: img,
  },
  {
    id: 4,
    name: "Петр Петров",
    title: "Маникюр",
    phone: "+7 (123) 456-78-90",
    image: img,
  },
  {
    id: 5,
    name: "Петр Петров",
    title: "Маникюр",
    phone: "+7 (123) 456-78-90",
    image: img,
  },
  {
    id: 6,
    name: "Петр Петров",
    title: "Маникюр",
    phone: "+7 (123) 456-78-90",
    image: img,
  },
];
const Home: React.FC = () => {
  return (
    <div className="flex flex-col justify-between">
      <SalonPage /> 
       <MastersCard specialists={specialists} />
      
    </div>
  );
};

export default Home;
