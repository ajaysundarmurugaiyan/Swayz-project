import React from 'react';
import contactBanner from '/contact/contactBanner.jpg';

const ContactBanner = ({ scrollToMapForm }) => {
  return (
    <div className="relative flex-1 px-5 py-24 lg:px-8">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${contactBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.5,
          zIndex: -1,
        }}
      ></div>

      <div className="absolute inset-0 bg-[#2a1d0c] opacity-80 z-0"></div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <h2 className="text-center text-3xl sm:text:lg font-extrabold leading-tight text-[#F8F8F8] md:text-6xl mb-4">
          Experience the difference with Swayz Group
        </h2>
        <p className="text-lg font-medium text-[#F8F8F8] mb-10">
          Whether you’re ready to kick off a project or just want to learn more
          about what we can do, we’re here to help. Connect with us and take the
          first step toward transforming your business.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center space-y-5 sm:flex-row sm:gap-x-6 sm:space-y-0">
          <button
            className="relative inline-flex w-full items-center justify-center rounded-full border border-[#F8F8F8] px-8 py-4 text-lg font-bold text-[#F8F8F8] transition-colors duration-150 ease-in-out hover:border-[#C5975B] hover:bg-[#C5975B] sm:w-auto sm:border-2"
            onClick={scrollToMapForm}
          >
            Get in touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
