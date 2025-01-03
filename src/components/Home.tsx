import React from "react";
import SalonPage from "../pages/salon/Salon";
import MastersCard from "./masters/MastersCard";
import { useGetSalonBySlugQuery } from "../api/SalonApi";
import Container from "../pages/Container";
import { useParams } from "react-router-dom";

const Home: React.FC = () => {
  const {slug} = useParams()
  // const slug = "ulybkaaa";
  const { data: salonData, isLoading, isError } = useGetSalonBySlugQuery(slug);
    if (isLoading) {
      return (
        <Container>
          <p>Загрузка данных салона...</p>
        </Container>
      );
    }

    if (isError || !salonData) {
      return (
        <Container>
          <p>Ошибка при получении данных салона. Попробуйте позже.</p>
        </Container>
      );
    }
    const salon = salonData?.data;
    const specialists = salon?.masters;
  return (
    <div className="flex flex-col justify-between">
      <SalonPage salon={salon} /> 
       <MastersCard specialists={specialists} setSelectedMaster={() => {}} />
      
    </div>
  );
};

export default Home;
