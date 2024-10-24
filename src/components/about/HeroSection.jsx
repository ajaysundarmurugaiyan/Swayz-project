// src/HeroSection.js
import React from "react";

const HeroSection = () => {
  return (
    <div
      className="relative mx-auto font-semibold text-customGrey px-4 sm:px-6 lg:px-8 pt-10 pb-16 text-center lg:pt-20 bg-cover bg-center"
      style={{
        backgroundImage: "url('https://thumbs.dreamstime.com/b/house-under-construction-blueprints-building-project-53360048.jpg')", // Replace with your image URL
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      <p className="mx-auto -mt-4 max-w-2xl text-lg tracking-tight text-white sm:mt-6 relative z-10">
        Welcome to{" "}
        <span className="border-b border-dotted text-customGolden font-bold border-slate-300">
          SWAYZ GROUP
        </span>
      </p>

      <h1 className="mx-auto lg:max-w-7xl md:max-w-xl font-display text-3xl font-medium tracking-tight text-white md:text-4xl lg:text-7xl relative z-10">
        <span className="inline-block">
          Your{" "}
          <span className="relative whitespace-nowrap text-customGolden">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute top-2/3 left-0 h-[0.58em] w-full fill-yellow-800/40"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
            </svg>
            <span className="relative">Security Services</span>
          </span>
        </span>
        <span className="inline-block">for Your Peace of Mind</span>
      </h1>

      <p className="mx-auto mt-9 max-w-2xl text-lg tracking-tight text-white sm:mt-6 relative z-10">
        <span className="inline-block">
          We offer a wide range of services to meet the diverse needs of our clients.
        </span>
        <span className="inline-block">
          From comprehensive security solutions to expert analysis.
        </span>
      </p>

      <p className="mx-auto mt-4 max-w-2xl text-lg tracking-tight text-white relative z-10">
        <span className="inline-block">
          Our tailored strategies ensure your safety and security.
        </span>
      </p>

      <div className="mt-12 flex flex-col justify-center gap-y-5 sm:mt-10 sm:flex-row sm:gap-y-0 sm:gap-x-6 relative z-10">
        <a
          className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-customGolden text-white hover:bg-customGolden hover:text-slate-100 active:bg-slate-800 active:text-slate-300"
          href="/security"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            role="img"
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-3 w-3 flex-none"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8.824 7.287c.008 0 .004 0 0 0zm-2.8-1.4c.006 0 .003 0 0 0zm16.754 2.161c-.505-1.215-1.53-2.528-2.333-2.943.654 1.283 1.033 2.57 1.177 3.53l.002.02c-1.314-3.278-3.544-4.6-5.366-7.477-.091-.147-.184-.292-.273-.446a3.545 3.545 0 01-.13-.24 2.118 2.118 0 01-.172-.46.03.03 0 00-.027-.03.038.038 0 00-.021 0l-.006.001a.037.037 0 00-.01.005L15.624 0c-2.585 1.515-3.657 4.168-3.932 5.856a6.197 6.197 0 00-2.305.587.297.297 0 00-.147.37c.057.162.24.24.396.17a5.622 5.622 0 012.008-.523l.067-.005a5.847 5.847 0 011.957.222l.095.03a5.816 5.816 0 01.616.228c.08.036.16.073.238.112l.107.055a5.835 5.835 0 01.368.211 5.953 5.953 0 012.034 2.104c-.62-.437-1.733-.868-2.803-.681 4.183 2.09 3.06 9.292-2.737 9.02a5.164 5.164 0 01-1.513-.292 4.42 4.42 0 01-.538-.232c-1.42-.735-2.593-2.121-2.74-3.806 0 0 .537-2 3.845-2 .357 0 1.38-.998 1.398-1.287-.005-.095-2.029-.9-2.817-1.677-.422-.416-.622-.616-.8-.767a3.47 3.47 0 00-.301-.227 5.388 5.388 0 01-.032-2.842c-1.195.544-2.124 1.403-2.8 2.163h-.006c-.46-.584-.428-2.51-.402-2.913-.006-.025-.343.176-.389.206-.406.29-.787.616-1.136.974-.397.403-.76.839-1.085 1.303a9.816 9.816 0 00-1.562 3.52c-.003.013-.11.487-.11.487l-.005.038a.473.473 0 00.193.523c1.537 1.036 4.275 1.57 5.63-.014.028.22.076.393.173.491.296.297.698.346.968.289 0 0 1.149-.034 1.783-.893-.057.224-.128.469-.218.698-.162.415-.384.826-.638 1.212-.425.624-.74 1.18-1.043 1.76-.048.089-.094.18-.138.27-.204.256-.408.483-.614.72-.657.634-1.379 1.257-2.057 1.88 1.118.313 1.778.708 1.778.708 3.255-2.084 1.78-6.23-.41-8.063-.348-.269-.733-.499-1.109-.695 1.069.042 2.086-.162 3.174-.474a.148.148 0 00.004-.001l.128-.041a.007.007 0 00.005-.005l-.006-.001zm-11.743 1.316c.653 0 1.146.585 1.146 1.313 0 .728-.493 1.314-1.146 1.314-.653 0-1.146-.586-1.146-1.314 0-.728.493-1.313 1.146-1.313zm1.523 6.292c.491 0 .979.188 1.346.524.368.335.572.799.572 1.27 0 .473-.204.935-.572 1.27-.368.335-.855.524-1.346.524-.491 0-.979-.189-1.346-.524-.368-.335-.572-.797-.572-1.27 0-.471.204-.935.572-1.27.368-.335.855-.524 1.346-.524zm7.898-6.033c.491 0 .979.188 1.346.524.368.335.572.799.572 1.27 0 .473-.204.935-.572 1.27-.368.335-.855.524-1.346.524-.491 0-.979-.189-1.346-.524-.368-.335-.572-.797-.572-1.27 0-.471.204-.935.572-1.27.368-.335.855-.524 1.346-.524zm-1.943-6.292c.653 0 1.146.585 1.146 1.313 0 .728-.493 1.314-1.146 1.314-.653 0-1.146-.586-1.146-1.314 0-.728.493-1.313 1.146-1.313z"></path>
          </svg>
          <span>View Services</span>
        </a>
        <a
          className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 border border-white text-white hover:bg-white hover:text-black active:bg-slate-800 active:text-slate-300"
          href="/contact"
        >
          <span>Contact Us</span>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
