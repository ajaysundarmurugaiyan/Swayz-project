import React, { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const CleaningHomePage = () => {
  const navigate = useNavigate();
  const imageSectionRef = useRef(null);
  const contentRef = useRef(null);
  const [isCounting, setIsCounting] = useState(false);
  const statsRef = useRef(null);
  const statistics = [
    { value: 10, label: "Years of Experience" },
    { value: 500, label: "Projects Successfully Completed" },
    { value: 100, label: "Satisfaction Guaranteed" },
    { value: 50, label: "Expert Cleaners On-Call" },
  ];

  useEffect(() => {
    const statsAnimation = gsap.fromTo(
      statsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
          onEnter: () => startCounting(),
        },
      }
    );

    const contentAnimation = gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    const imageAnimation = gsap.fromTo(
      imageSectionRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: imageSectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      statsAnimation.kill();
      contentAnimation.kill();
      imageAnimation.kill();
    };
  }, []);

  const startCounting = () => {
    if (!isCounting) {
      setIsCounting(true);
      statistics.forEach((stat, index) => {
        const target = statsRef.current.children[index].firstChild;
        let count = 0;
        const increment = Math.ceil(stat.value / 100);
        const duration = 2000;

        const countInterval = setInterval(() => {
          count += increment;
          if (count > stat.value) count = stat.value;
          target.innerHTML = count + "+";

          if (count === stat.value) {
            clearInterval(countInterval);
          }
        }, duration / (stat.value / increment));
      });
    }
  };

  return (
    <>
      <div className="md:px-10 px-5 text-center text-customGolden md:text-3xl text-xl font-bold">
        OUR SERVICES
        <div className="mx-auto mt-2 w-[120px] h-[2.5px] bg-customGolden rounded-full"></div>
      </div>

      {/* Description */}
      <p className="text-customGrey font-bold md:text-lg text-base text-center my-5 lg:mx-52 xl:mx-96 mx-5">
        Our specialized services are tailored to address specific cleaning
        needs, providing comprehensive solutions for both commercial and
        residential clients.
      </p>

      {/* Content Section */}
      <div
        className="grid md:grid-cols-2 items-center gap-8 md:px-20 px-6 md:py-20 py-10"
        ref={contentRef}
      >
        {/* Left Side - Text Content */}
        <div className="p-0 md:pr-10">
          <h1 className="md:text-3xl text-xl font-bold mb-4">
            Tired of Dealing with Messy Spaces?
          </h1>
          <p className="md:text-2xl font-semibold text-customGolden mb-4">
            You’re in the Right Place.
          </p>
          <p className="md:text-lg text-base font-semibold text-customGrey mb-6">
            Keeping your surroundings clean can feel overwhelming, especially
            with today's busy schedules. Don’t let the stress of cleaning weigh
            you down. Whether it’s your home, office, or a special event, we’ve
            got it covered.
          </p>
          <p className="md:text-lg text-base font-semibold">
            Relax, Let Us Handle the Dirty Work!
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-8">
            <div
              className="flex items-center bg-customGolden cursor-pointer rounded-lg w-fit px-2 py-1 text-white"
              onClick={() => navigate("/cleaning-services")}
            >
              <span className="md:text-md text-base font-semibold text-white">
                Know More
              </span>
              <FaArrowRight className="text-white ml-2" />
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div
          ref={imageSectionRef}
          className="relative lg:block hidden flex justify-center"
        >
          {/* Foreground image */}
          <div className="relative rounded-xl shadow-lg left-[19%] overflow-hidden w-96 h-[65vh]">
            <img
              src="/cleaningImages/cleaning.jpeg" // Replace with actual image path
              alt="Pressure Cleaning"
              className="w-full h-full object-cover"
            />
            {/* Background with overlay */}
            <div className="absolute inset-0 bg-customGolden bg-opacity-90 "></div>
          </div>
          {/* Background image */}
          <div className="rounded-xl absolute -top-[1%] right-[14%] shadow-lg overflow-hidden w-96 h-[65vh]">
            <img
              src="/cleaningImages/cleaning.jpeg" // Replace with actual image path
              alt="Pressure Cleaning"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Mobile Image Section */}
        <div className="lg:hidden flex justify-center">
          <img
            src="/cleaningImages/PressureCleaning.jpg" // Replace with actual image path
            alt="Pressure Cleaning"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
    </>
  );
};

export default CleaningHomePage;
