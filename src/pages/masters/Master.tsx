import React from "react";
import Container from "../Container";
import ServiceCard from "../../components/ServiceCard/SeviceCard";
import MastersCard from "../../components/masters/MastersCard";


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

type Master = {
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
};

type MastersPageProps = {
  master: Master;
  masters: Master[];
  setSelectedMaster: (master: Master) => void;
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
};
const MastersPage: React.FC<MastersPageProps> = ({
  master,
  masters,
  setSelectedMaster,
  setSelectedServices,
  selectedServices,
}) => {
  return (
    <Container>
      <MastersCard
        specialists={[master]}
        setSelectedMaster={setSelectedMaster}
      />
      <ServiceCard
        masters={masters}
        setSelectedServices={setSelectedServices}
        selectedServices={selectedServices}
      />
    </Container>
  );
};

export default MastersPage;
