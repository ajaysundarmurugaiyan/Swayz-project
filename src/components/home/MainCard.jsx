import React from 'react';
import cleaningImage from "/public/cleaningImages/CleaningBanner.jpg";
import constructionImage from "/public/leanoEnergyProfile/infrastructure_1.jpeg";

const MainCard = () => {
  return (
    <div className="container mx-auto py-8 px-10 md:px-20">
      <div className="flex gap-10 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth">
        
        {/* Card 1 */}
        <div className="min-w-[250px] bg-white rounded-lg shadow-lg overflow-hidden snap-center animate-slide-in delay-[100ms]">
          <a href="/cleaning-services">
            <div className="overflow-hidden">
              <img
                src={cleaningImage}
                alt="Cleaning Services"
                className="w-full h-52 object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 hover:underline duration-300">
                Cleaning Services
              </h2>
              <p className="mt-2 text-gray-600">
                A clean environment is the cornerstone of health, productivity, and well-being.
              </p>
            </div>
          </a>
        </div>

        {/* Card 2 */}
        <div className="min-w-[250px] bg-white rounded-lg shadow-lg overflow-hidden snap-center animate-slide-in delay-[200ms]">
          <a href="/swayz-construction">
            <div className="overflow-hidden">
              <img
                src={constructionImage}
                alt="Construction Services"
                className="w-full h-52 object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 hover:underline duration-300">
                Construction Services
              </h2>
              <p className="mt-2 text-gray-600">
                Swayz Group offers comprehensive construction services designed to bring visions to life.
              </p>
            </div>
          </a>
        </div>

        {/* Card 3 */}
        <div className="min-w-[250px] bg-white rounded-lg shadow-lg overflow-hidden snap-center animate-slide-in delay-[300ms]">
          <a href="/security">
            <div className="overflow-hidden">
              <img
                src="https://www.shutterstock.com/image-photo/lock-mark-cybersecurity-internet-protect-260nw-2493802703.jpg"
                alt="Security Services"
                className="w-full h-52 object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 hover:underline duration-300">
                Security Services
              </h2>
              <p className="mt-2 text-gray-600">
                In an ever-evolving landscape of security challenges, Swayz Group stands as a beacon of protection.
              </p>
            </div>
          </a>
        </div>

      </div>
    </div>
  );
}

export default MainCard;
