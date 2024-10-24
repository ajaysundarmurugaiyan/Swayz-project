// src/AboutUs.js
import React from "react";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center py-20 bg-gray-100">
      <div className="md:px-10 px-5 text-center mb-5 text-customGolden md:text-3xl text-xl font-bold">
        ABOUT US
        <div className="mx-auto mt-2 w-[120px] h-[2.5px] bg-customGolden rounded-full"></div>
      </div>
      <div className="max-w-2xl text-center mb-10 animate-fade-in">
        <p className="mb-4">
          We offer a wide range of services to meet the diverse needs of our
          clients. In addition to providing comprehensive security services, we
          also specialize in professional research and security analysis. This
          allows us to assess and identify potential risks and vulnerabilities,
          enabling us to develop tailored security strategies for our clients.
        </p>
        <p>
          We understand that each client has unique security requirements, and
          we take the time to conduct thorough assessments to determine the most
          effective solutions. Furthermore, we offer a selection of cutting-edge
          detection equipment and expert advice on security systems such as
          alarms, safes, and other safety materials.
        </p>
      </div>
      <div className="mt-10 animate-fade-in">
        <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
        <div className="flex justify-center space-x-4">
          <img
            src="https://png.pngtree.com/png-vector/20240309/ourmid/pngtree-construction-worker-engineer-png-image_11917231.png"
            alt="Team Member"
            className="w-32 h-32 rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
          />
          <img
            src="https://png.pngtree.com/png-vector/20240309/ourmid/pngtree-construction-worker-engineer-png-image_11917231.png"
            alt="Team Member"
            className="w-32 h-32 rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
          />
          <img
            src="https://png.pngtree.com/png-vector/20240309/ourmid/pngtree-construction-worker-engineer-png-image_11917231.png"
            alt="Team Member"
            className="w-32 h-32 rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
