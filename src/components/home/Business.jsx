import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import image from '/image.avif';

const Business = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 }); 

  return (
    <div>
      <section className="container mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0">
        <section className="relative px-10 md:p-0 cursor-pointer" ref={ref}>
          
          <motion.div
            className="relative xl:max-w-6xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <motion.img
              className="w-full"
              src={image}
              alt="Business Profile"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />

            <motion.div
              className="absolute inset-0 bg-[#0b0907] opacity-70 z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ duration: 0.5 }}
            ></motion.div>
          </motion.div>

          <motion.div
            className="content bg-white p-2 pt-8 md:p-12 pb-12 lg:max-w-lg w-full lg:absolute top-48 right-5 z-20"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            whileHover={{ x: -10 }}
          >
            <h2 className="text-3xl font-semibold">
              Swayz Security service on Business Profile
            </h2>
            <p className="my-3 mb-10 text-justify font-medium text-gray-700 leading-relaxed">
              Swayz Security Services is a security provider with extensive
              experience in the industry. We have established a reputation for
              delivering high-quality security solutions. Our team of highly
              trained professionals is dedicated to ensuring the safety and
              protection of our clients' assets, personnel, and property.
            </p>
            <motion.a
              href="/"
              className="mt-2 md:mt-5 p-3 px-5 bg-black text-white font-bold text-sm hover:bg-[#C5975B]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Read More
            </motion.a>
          </motion.div>
        </section>
      </section>
    </div>
  );
};

export default Business;
