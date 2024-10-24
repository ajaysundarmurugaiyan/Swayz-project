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
// import CardOverlap from '../../components/home/CardOverlap';

const Home = () => {
  return (
    <div > {/* Adds padding around the entire section */}
      <section style={{ marginBottom: '50px' }}> {/* Section with spacing */}
        <Main2/>
      </section>  

      <section> {/* Section with spacing */}
        <AboutUs/>
      </section>    
      <ServicesSection/>  

      <section style={{ marginBottom: '50px' }}>
        <CleaningHomePage/>
      </section>
      <section>
        <ScrollSections/>
      </section>
      <section style={{ marginBottom: '50px' }}>
        <Parallax/>
      </section>

      <section style={{ marginBottom: '50px' }}>
        <ServiceCard/>
      </section>

      <section style={{ marginBottom: '50px' }}>
        <Construction/>
      </section>

      <section style={{ marginBottom: '50px' }}>
        <Main1/>
      </section>

      {/* Add more spacing here if necessary */}
      <section style={{ marginBottom: '50px' }}>
        <NotFoundPage/>
      </section>

    </div>
  );
}

export default Home;
