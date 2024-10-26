import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const AboutUs = () => {
  const imgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const animateOnScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const sectionTop = document.getElementById("about-us").offsetTop;

      if (scrollY + window.innerHeight > sectionTop + 200) {
        gsap.to(imgRef.current, {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
        });
        gsap.to(textRef.current, {
          x: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3,
          ease: "power4.out",
        });
      }
    };

    window.addEventListener("scroll", animateOnScroll);
    return () => window.removeEventListener("scroll", animateOnScroll);
  }, []);

  return (
    <section
      id="about-us"
      className="flex justify-center items-center py-16 px-5 md:px-20 bg-white"
    >
      <div className="grid lg:grid-cols-2 gap-5 items-center w-full max-w-full">
        {/* New Image Above Existing Image */}
        <div className="absolute left-[5%] -top-[2%] z-10">
          <img
            src="/path/to/your/newImage.jpg" // Replace with your actual new image path
            alt="New Image"
            className="w-40 h-auto object-contain" // Adjust the width and height as necessary
          />
        </div>

        {/* Image Section */}
        <div
          ref={imgRef}
          className="relative opacity-0 lg:block hidden transform translate-x-[-100px] flex justify-center"
        >
          {/* Foreground image */}
          <div className="relative rounded-lg shadow-lg left-[10%] overflow-hidden w-96 h-[65vh]">
            <img
              src="/cleaningImages/PressureCleaning.jpg" // Replace with your actual image path
              alt="Machine"
              className="w-full h-full object-cover"
            />
            {/* Background with overlay */}
            <div className="absolute inset-0 bg-customGolden bg-opacity-90 mix-blend-multiply"></div>
          </div>
          <div className="rounded-lg absolute -top-[4%] lg:right-[10%] xl:right-[20%] shadow-lg overflow-hidden w-96 h-[65vh]">
          <img
              src="/cleaningImages/PressureCleaning.jpg" // Replace with your actual image path
              alt="Machine"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Section */}
        <div ref={textRef} className="opacity-0 transform translate-x-[100px]">
        <div className="md:px-0 px-5 text-center lg:text-start mb-5 text-customGolden md:text-3xl text-xl font-bold">
        ABOUT SWAYZ
        {/* <div className="mx-auto lg:mx-10 mt-2 w-[120px] h-[2.5px] bg-customGolden rounded-full"></div> */}
      </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Swayz Construction: Your Premier Cleaning Services
          </h1>
          <p className="text-customGrey font-semibold md:text-base text-sm mb-6">
            Welcome to Swayz, where we redefine professional cleaning services. Our innovative approach combines advanced technology with a dedication to cleanliness, delivering exceptional results every time. Experience the difference with our state-of-the-art cleaning solutions tailored to meet your needs.
          </p>
          <a href="/about">
          <button className="bg-customGolden text-white py-2 px-6 rounded-lg shadow hover:bg-opacity-80 transition duration-300">
            Read more
          </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
