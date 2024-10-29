import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import videoFile from '/public/home.mp4'; // Update the path to your video file

const Main2 = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });

  // Trigger animation when the element is in view
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  // Animation variants for pop-up effect
  const variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 }, // Start below the position, slightly smaller
    visible: {
      opacity: 1,
      y: 0,
      scale: 1, // Animate to normal position and size
      transition: {
        duration: 1, // Slower animation for smoothness
        ease: 'easeOut', // Smooth easing
        when: 'beforeChildren',
        staggerChildren: 0.2, // Slight delay between each child element for cascading effect
      },
    },
  };

  return (
    <div>
      <div className="relative h-[80vh] my-10 md:mx-20 lg:mx-26 mx-5 rounded-lg overflow-hidden" ref={ref}>
        {/* Video background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={videoFile}
          autoPlay
          loop
          muted
        />
        
        {/* Overlay Div */}
        <div className="absolute inset-0 h-full bg-black opacity-70 rounded-lg"></div>

        {/* Content */}
        <motion.div
          className="relative z-10 flex justify-center items-center flex-col text-center px-4 h-full" // Center content
          initial="hidden"
          animate={controls}
          variants={variants}
        >
          <motion.h1
            className="text-2xl text-white sm:text-3xl md:text-5xl lg:text-6xl font-bold"
            variants={variants}
          >
            Build Your Dream Projects with 
            <div className='text-customGolden'>SWAYZ </div>
          </motion.h1>

          <motion.p
            className="mt-4 text-base text-white sm:text-lg md:text-xl lg:text-2xl"
            variants={variants}
          >
            Premium construction solutions tailored to your vision.
          </motion.p>

          {/* Animate the Call to Action button */}
          <motion.div
            className="mt-6 sm:mt-8"
            variants={variants}
          >
            <button className="bg-yellow-700 hover:bg-yellow-800 font-semibold text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-base sm:text-lg">
              Explore More
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Main2;
