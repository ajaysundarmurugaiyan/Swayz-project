import React from 'react';
import CleaningHomePage from '../../components/home/CleaningHomePage';
import Main2 from '../../components/home/Main2';
import Main1 from '../../components/home/Main1';
import Accordion from '../../components/home/Accordian';
import ScrollSections from '../../components/home/HorizontalScroll';
// import StickySections from '../../components/home/StickySections';
import Construction from '../../components/home/Construction';
import NotFoundPage from '../../components/home/BusinessProfile';
import AboutUs from '../../components/home/About';
import ServicesSection from '../../components/home/ServicesSection';
import Parallax from '../../components/home/Parallex';
import ServiceCard from '../../components/home/ServicesCard';
import Business from '../../components/home/Business';
import VisionMissionValues from '../../components/home/VissionMissionValues';
// import CardOverlap from '../../components/home/CardOverlap';

const Home = () => {
  return (
    <div>
      {" "}
      {/* Adds padding around the entire section */}
      <section className="overflow-x-hidden" style={{ marginBottom: "50px" }}>
        {" "}
        {/* Section with spacing */}
        <Main2 />
      </section>
      <section className="overflow-x-hidden">
        {" "}
        {/* Section with spacing */}
        <AboutUs />
      </section>
      <section className="overflow-x-hidden">
        <ServicesSection />
      </section>
      <section className="overflow-x-hidden" style={{ marginTop: "100px"}}>
        <VisionMissionValues />
      </section>
      <section className="overflow-x-hidden" style={{ marginBottom: "50px" }}>
        <CleaningHomePage />
      </section>
      <section>
        <ScrollSections />
      </section>
      <section className="overflow-x-hidden" style={{}}>
        <Parallax />
      </section>
      <section className="overflow-x-hidden" style={{ marginBottom: "100px" }}>
        <ServiceCard />
      </section>
      <section className="overflow-x-hidden" style={{ marginBottom: "50px" }}>
        <Construction />
      </section>
      <section className="overflow-x-hidden" style={{ marginBottom: "50px" }}>
        <Main1 />
      </section>
      {/* Add more spacing here if necessary */}
      <section className="overflow-x-hidden" style={{}}>
        {/* <NotFoundPage/> */}
        <Business />
      </section>
    </div>
  );
}

export default Home;
