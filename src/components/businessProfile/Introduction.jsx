import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bussiness from '/public/business.jpeg'
gsap.registerPlugin(ScrollTrigger);

const Introduction = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const paths = svgRef.current.querySelectorAll("path");

    gsap.set("#big-shape", { visibility: "visible" });

    paths.forEach((path) => {
      const length = path.getTotalLength();
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
        opacity: 1, 
      });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: svgRef.current,
        start: "top 80%", 
        toggleActions: "play none none none",
      },
    });

    tl.to(paths, {
      strokeDashoffset: 0,
      duration: 3.8,
      ease: "power2.out", 
      stagger: 0.01,
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bussiness})`,
        }}
      />

      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.7)",
        }}
      />

      <div className="absolute inset-0 z-0 text-white">
        <svg
          id="big-shape"
          width="1440px"
          height="985px"
          viewBox="0 0 1440 985"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          style={{ visibility: "hidden" }}
          ref={svgRef}
        >
          <defs>
            <rect id="path-1" x="0" y="0" width="1440" height="1038"></rect>
          </defs>
          <g
            id="Design-v2"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            {/* SVG Paths Here */}
          </g>
        </svg>
      </div>
      <div className="absolute inset-0 bg-[#2a1d0c] opacity-30 z-0"></div>

      <div className="relative z-10 w-full flex flex-col py-32 items-center justify-center">
        <div className="text-center mb-8">
          <h1 className="block font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-white">
            Introduction for
          </h1>
          <h2 className="block font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-[#DBF2D6]">
            Business Profile
          </h2>
        </div>

        <div className="max-w-3xl text-center">
          <div className="mb-8">
            <p className="font-light text-base sm:text-lg md:text-xl text-justify leading-relaxed tracking-wide text-white">
              Swayz Security Services is a security provider with extensive
              experience in the industry. We have established a reputation for
              delivering high-quality security solutions. Our team of highly
              trained professionals is dedicated to ensuring the safety and
              protection of our clients' assets, personnel, and property.
            </p>
          </div>
{/* 
          <a
            href="#"
            className="inline-flex items-center group"
          >
            <span className="uppercase text-xs sm:text-sm tracking-widest text-[#DBF2D6]">
              Psira No:4405628
            </span>
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Introduction;
