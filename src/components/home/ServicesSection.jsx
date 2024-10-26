import { FaCogs, FaClipboardList, FaUserTie, FaShippingFast } from 'react-icons/fa'; // New unique icons
import React from 'react';

const ServicesSection = () => {
  return (
    <div className="max-w-7xl mx-auto md:mt-0 md:my-0 my-10 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {/* Precision Automation */}
        <div className="border-r border-gray-300 p-4">
          <FaCogs className="text-6xl text-customGolden mx-auto mb-4" />
          <h3 className="text-xl font-bold text-customGolden">Precision Automation</h3>
          <p className="mt-2 text-customGrey font-semibold">
            Revolutionizing Rug Cleaning through Cutting-Edge Technology
          </p>
        </div>

        {/* Tailored Cleaning Solutions */}
        <div className="border-r border-gray-300 p-4">
          <FaClipboardList className="text-6xl text-customGolden mx-auto mb-4" />
          <h3 className="text-xl font-bold text-customGolden">Tailored Cleaning Solutions</h3>
          <p className="mt-2 text-customGrey font-semibold">
            Personalized Care that Meets Your Unique Needs
          </p>
        </div>

        {/* Professional Expertise */}
        <div className="border-r border-gray-300 p-4">
          <FaUserTie className="text-6xl text-customGolden mx-auto mb-4" />
          <h3 className="text-xl font-bold text-customGolden">Professional Expertise</h3>
          <p className="mt-2 text-customGrey font-semibold">
            Experience Unmatched Skill and Attention to Detail
          </p>
        </div>

        {/* Convenient Service */}
        <div className="p-4">
          <FaShippingFast className="text-6xl text-customGolden mx-auto mb-4" />
          <h3 className="text-xl font-bold text-customGolden">Convenient Service</h3>
          <p className="mt-2 text-customGrey font-semibold">
            Hassle-Free Convenience: Seamless Pick-Up and Delivery
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
