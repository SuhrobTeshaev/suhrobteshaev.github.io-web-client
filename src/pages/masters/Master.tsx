import React from "react";
import Container from "../Container";
import ServiceCard from "../../components/ServiceCard/SeviceCard";
import MastersCard from "../../components/masters/MastersCard";






type MastersPageProps = {
  master: { id: number; name: string; title: string; phone: string; image: string };
};
const MastersPage: React.FC<MastersPageProps> = ({master}) => {


return (
  <Container>
    <MastersCard specialists={[master]} />
    <ServiceCard />
  </Container>
);
};

export default MastersPage;
