import React, { useRef } from 'react';
import ContactBanner from '../../components/contact/ContactBanner';
import MapForm from '../../components/contact/MapForm';

const Contact = () => {
  // Create a reference for MapForm
  const mapFormRef = useRef(null);

  // Function to handle scrolling to MapForm
  const scrollToMapForm = () => {
    mapFormRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Pass the scroll function to ContactBanner */}
      <ContactBanner scrollToMapForm={scrollToMapForm} />
      
      {/* MapForm with the reference */}
      <div ref={mapFormRef}>
        <MapForm />
      </div>
    </div>
  );
};

export default Contact;
