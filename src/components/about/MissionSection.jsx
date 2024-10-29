import React, { useEffect } from "react";
import { TbScanEye } from "react-icons/tb";
import { FaBullseye } from "react-icons/fa6";

const MissionSection = () => {
  useEffect(() => {
    // You can add any necessary side effects here
  }, []);

  return (
    <section
      className="relative h-screen parallax"
      style={{ backgroundImage: "url('cleaningImages/S1.jpg')" }}
    >
      <div className="flex items-center justify-center h-full bg-black bg-opacity-70">
        <div className="text-center p-6 text-white max-w-4xl">
          <div className="text-4xl font-bold mb-4 text-customGolden">
            <div className="flex justify-center items-center space-x-5">
              <div>
                <TbScanEye />
              </div>
              <div>OUR VISION</div>
            </div>
          </div>
          <p className="mb-4 font-semibold md:text-lg text-base ">
            Our vision is to be the leading provider of integrated solutions in
            security, cleaning, construction, and energy sectors, recognized for
            our commitment to excellence, innovation, and social responsibility.
          </p>

          <div className="text-4xl font-bold mb-4 text-customGolden">
            <div className="flex justify-center items-center space-x-5">
              <div>
                <FaBullseye />
              </div>
              <div>OUR MISSION</div>
            </div>
          </div>
          <p className="mb-4 font-semibold md:text-lg text-base">
            At Swayz Group, our mission is to empower communities through
            excellence in security, cleaning, construction, and energy
            solutions. We are dedicated to creating safer, cleaner, and more
            sustainable environments where individuals and businesses can
            thrive.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
