import React, { useEffect } from "react";
import { FaShieldAlt } from "react-icons/fa"; // Importing the shield icon

const MissionSection = () => {
  useEffect(() => {
    // You can add any necessary side effects here
  }, []);

  return (
    <section
      className="relative h-screen parallax"
      style={{ backgroundImage: "url('cleaningImages/S1.jpg')" }}
    >
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
        <div className="text-center p-6 text-white max-w-4xl">
          <h2 className="text-4xl font-bold mb-4 text-customGolden">
            OUR MISSION
          </h2>
          <p className="mb-4 font-semibold md:text-lg text-base ">
            At Swayz Security Services, our mission is to strive towards
            perfection and be recognized as the leader in providing
            comprehensive security solutions. Our commitment is to protect our
            clients and their assets while ensuring a safe and secure
            environment for individuals and businesses alike. We believe that
            effective security requires a proactive approach.
          </p>

          <p className="mb-4 font-semibold md:text-lg text-base">
            Our team continuously evaluates risks and implements tailored
            strategies to mitigate potential threats. We prioritize client
            communication, ensuring that we understand their unique needs and
            concerns. We strive to integrate eco-friendly practices in our
            operations, ensuring that our security solutions not only protect
            our clients but also respect the environment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
