import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CgNotes } from "react-icons/cg";
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";
import {
  FaFlask,
  FaShower,
  FaBroom,
  FaFan,
  FaSearch,
  FaShippingFast,
} from "react-icons/fa";

// Custom arrow components for the carousel
const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 right-[-25px] text-xl transform -translate-y-1/2 z-10 text-customGolden p-5 cursor-pointer"
      onClick={onClick}
    >
      <IoMdArrowDropright className="w-10 h-auto" />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 left-[-25px] text-xl transform -translate-y-1/2 z-10 text-customGolden p-5 cursor-pointer"
      onClick={onClick}
    >
      <IoMdArrowDropleft className="w-10 h-auto" />
    </div>
  );
};

const ServiceCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-yellow-50 lg:mt-[150px] bg-opacity-95 py-10">
      {" "}
      {/* Add background color here */}
      <div className="w-full md:w-4/5 mx-auto py-8 relative px-5 mb-10">
        <div className="text-center text-customGolden md:text-3xl mb-10 text-xl font-bold">
          OUR PROCESS
          <div className="mx-auto mt-2 w-[120px] h-[2.5px] bg-customGolden rounded-full"></div>
        </div>

        {/* Carousel */}
        <Slider {...settings}>
          {/* Step 1 */}
          <div className="p-2 hover:cursor-pointer">
            <div className="border rounded-3xl p-5 shadow-lg bg-white w-11/12 lg:w-5/6 h-[26vh] flex flex-col justify-between mx-auto">
              <div className="flex justify-center items-center mb-2">
                <CgNotes size={35} className="text-customGolden" />
                <div className="ml-2 md:text-lg text-md font-bold">STEP 1</div>
              </div>
              <div className="font-bold text-md text-center uppercase text-customGolden">
                Dye Testing :
              </div>
              <div className="text-gray-500 font-semibold text-center text-sm">
                Stability testing and dye stabiliser application to prevent
                bleeding.
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-2 hover:cursor-pointer">
            <div className="border rounded-3xl p-5 shadow-lg bg-white w-11/12 lg:w-5/6 h-[26vh] flex flex-col justify-between mx-auto">
              <div className="flex justify-center items-center mb-2">
                <FaFlask size={35} className="text-customGolden" />
                <div className="ml-2 md:text-lg text-md font-bold">STEP 2</div>
              </div>
              <div className="font-bold text-md text-center uppercase text-customGolden">
                Pre-Spotting / Conditioning and Fringe Preparation :
              </div>
              <div className="text-gray-500 font-semibold text-center text-sm">
                Targeted treatment of problem areas and fringes.
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-2 hover:cursor-pointer">
            <div className="border rounded-3xl p-5 shadow-lg bg-white w-11/12 lg:w-5/6 h-[26vh] flex flex-col justify-between mx-auto">
              <div className="flex justify-center items-center mb-2">
                <FaShower size={35} className="text-customGolden" />
                <div className="ml-2 md:text-lg text-md font-bold">STEP 3</div>
              </div>
              <div className="font-bold text-md text-center uppercase text-customGolden">
                Washing :
              </div>
              <div className="text-gray-500 font-semibold text-center text-sm">
                Customized cleaning methods with eco-friendly products for
                optimal soil suspension.
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="p-2 hover:cursor-pointer">
            <div className="border rounded-3xl p-5 shadow-lg bg-white w-11/12 lg:w-5/6 h-[26vh] flex flex-col justify-between mx-auto">
              <div className="flex justify-center items-center mb-2">
                <FaBroom size={35} className="text-customGolden" />
                <div className="ml-2 md:text-lg text-md font-bold">STEP 4</div>
              </div>
              <div className="font-bold text-md text-center uppercase text-customGolden">
                Rinsing and Fringe Cleaning :
              </div>
              <div className="text-gray-500 font-semibold text-center text-sm">
                Thorough rinsing and cleaning of both sides and fringes.
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="p-2 hover:cursor-pointer">
            <div className="border rounded-3xl p-5 shadow-lg bg-white w-11/12 lg:w-5/6 h-[26vh] flex flex-col justify-between mx-auto">
              <div className="flex justify-center items-center mb-2">
                <FaFan size={35} className="text-customGolden" />
                <div className="ml-2 md:text-lg text-md font-bold">STEP 5</div>
              </div>
              <div className="font-bold text-md text-center uppercase text-customGolden">
                Spin & Temperature-controlled Drying :
              </div>
              <div className="text-gray-500 font-semibold text-center text-sm">
                Centrifugal water extraction and climate-controlled drying.
              </div>
            </div>
          </div>

          {/* Step 6 */}
          <div className="p-2 hover:cursor-pointer">
            <div className="border rounded-3xl p-5 shadow-lg bg-white w-11/12 lg:w-5/6 h-[26vh] flex flex-col justify-between mx-auto">
              <div className="flex justify-center items-center mb-2">
                <FaSearch size={35} className="text-customGolden" />
                <div className="ml-2 md:text-lg text-md font-bold">STEP 6</div>
              </div>
              <div className="font-bold text-md text-center uppercase text-customGolden">
                Inspection Process :
              </div>
              <div className="text-gray-500 font-semibold text-center text-sm">
                Comprehensive inspection and detailed pre-cleaning reports.
              </div>
            </div>
          </div>

          {/* Step 7 */}
          <div className="p-2 hover:cursor-pointer">
            <div className="border rounded-3xl p-5 shadow-lg bg-white w-11/12 lg:w-5/6 h-[26vh] flex flex-col justify-between mx-auto">
              <div className="flex justify-center items-center mb-2">
                <FaShippingFast size={35} className="text-customGolden" />
                <div className="ml-2 md:text-lg text-md font-bold">STEP 7</div>
              </div>
              <div className="font-bold text-md text-center uppercase text-customGolden">
                Packaging & Delivery :
              </div>
              <div className="text-gray-500 font-semibold text-center text-sm">
                Finally, we vacuum and meticulously pack our rug for storage or
                transportation.
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ServiceCard;
