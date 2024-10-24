import React from "react";
import { Link } from "react-router-dom"; // Using Link for navigation

const services = [
  {
    id: 1,
    title: "Commercial Cleaning",
    image: "/cleaningImages/S1.jpg",
    route: "/cleaning-services",
    description:
      "Thorough cleaning for businesses to create welcoming environment.",
  },
  {
    id: 2,
    title: "Residential Cleaning",
    image: "/cleaningImages/S2.jpg",
    route: "/cleaning-services",
    description:
      "Expert cleaning services for your home, tailored to your needs.",
  },
  {
    id: 3,
    title: "Specialized Services",
    image: "/cleaningImages/S3.jpg",
    route: "/cleaning-services",
    description: "Customized cleaning solutions for unique requirements.",
  },
  {
    id: 4,
    title: "Rug Cleaning",
    image: "/cleaningImages/S5.jpg",
    route: "/cleaning-services",
    description: "Professional rug cleaning to restore and maintain beauty.",
  },
  {
    id: 5,
    title: "Carpet Cleaning",
    image: "/cleaningImages/S4.jpg",
    route: "/cleaning-services",
    description: "Deep cleaning to refresh your carpets and remove allergens.",
  },
  {
    id: 6,
    title: "Explore More",
    image: "/cleaningImages/S6.jpg",
    route: "/cleaning-services",
    description: "Discover our full range of cleaning services and offers.",
  },
];

const Parallax = () => {
  return (
    <div className="bg-[url('/cleaningImages/p1.jpg')] relative bg-fixed bg-cover bg-center lg:h-[90vh] h-full">
      <div className="container mx-auto py-16">
        {/* Optional dark overlay for better contrast */}
        <div className="absolute inset-0 bg-black opacity-70 brightness-75"></div>

        <h1 className="md:text-3xl text-2xl uppercase font-semibold text-center text-white mb-12 relative z-10">
          Elevate Your <span className="text-customGolden">Cleanliness with Our Services</span>  
        </h1>

        {/* Card grid */}
        <div className="grid grid-cols-1 px-5 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
        {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:bg-customGolden"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 md:h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-35 group-hover:bg-customGolden group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 hover:cursor-pointer">
                <h2 className="text-lg md:text-2xl font-bold text-white mb-4 text-center">
                  {service.title}
                </h2>
                {/* Description that appears on hover */}
                <p className="text-white mb-4 text-center font-semibold transition-opacity duration-300">
                  {service.description}
                </p>
                <Link
                  to={service.route}
                  className="bg-white text-customGolden font-semibold md:px-4 md:py-2 px-2 py-1 rounded-md z-20 transition duration-300 block text-center"
                >
                  View Services
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Parallax;
