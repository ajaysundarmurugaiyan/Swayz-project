import React, { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null); // Reference to the dropdown menu

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false); // Close the dropdown
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`bg-white shadow-md sticky top-0 z-50 transition-colors py-3 duration-300 ${
        location.pathname === "/business-profile" ? "bg-golden" : ""
      } ${isMobileMenuOpen ? "bg-customGolden" : ""}`}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              className="h-12 w-auto"
              src="/cleaningImages/logo.jpg"
              alt="Your Company"
            />
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-600 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop navigation links */}
          <div className={`hidden sm:flex sm:space-x-4 flex-grow justify-end`}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 text-xs lg:text-base font-semibold flex items-center justify-center ${
                  isActive
                    ? "text-customGolden font-bold"
                    : "text-customGrey hover:text-customGolden"
                }`
              }
            >
              Home
            </NavLink>

            <div className="relative inline-block text-left" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className={`px-3 py-2 text-xs lg:text-base font-semibold flex items-center justify-center ${
                  isOpen
                    ? "text-customGolden font-bold"
                    : "text-customGrey hover:text-customGolden"
                }`}
              >
                Services
                <svg
                  className={`ml-2 h-5 w-5 transition-transform transform ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06 0L10 10.92l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Dropdown Items */}
              {isOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <NavLink
                      to="/cleaning-services"
                      className={({ isActive }) =>
                        `px-3 py-2 text-xs lg:text-base font-semibold flex items-center justify-center ${
                          isActive
                            ? "text-customGolden font-bold"
                            : "text-customGrey hover:text-customGolden"
                        }`
                      }
                    >
                      Cleaning Services
                    </NavLink>
                    <NavLink
                      to="/swayz-construction"
                      className={({ isActive }) =>
                        `px-3 py-2 text-xs lg:text-base font-semibold flex items-center justify-center ${
                          isActive
                            ? "text-customGolden font-bold"
                            : "text-customGrey hover:text-customGolden"
                        }`
                      }
                    >
                      Swayz Construction
                    </NavLink>
                    <NavLink
                      to="/security"
                      className={({ isActive }) =>
                        `px-3 py-2 text-xs lg:text-base font-semibold flex items-center justify-center ${
                          isActive
                            ? "text-customGolden font-bold"
                            : "text-customGrey hover:text-customGolden"
                        }`
                      }
                    >
                      Security
                    </NavLink>
                  </div>
                </div>
              )}
            </div>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-3 py-2 text-xs lg:text-base font-semibold flex items-center justify-center ${
                  isActive
                    ? "text-customGolden font-bold"
                    : "text-customGrey hover:text-customGolden"
                }`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-3 py-2 text-xs lg:text-base font-semibold flex items-center justify-center ${
                  isActive
                    ? "text-customGolden font-bold"
                    : "text-customGrey hover:text-customGolden"
                }`
              }
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden z-10" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block px-3 py-2 text-base font-semibold flex items-center justify-center ${
                  isActive
                    ? "text-customGolden md:bg-transparent bg-yellow-50 rounded-md"
                    : "text-black hover:text-customGolden"
                }`
              }
              onClick={toggleMobileMenu}
            >
              Home
            </NavLink>

            {/* Services Dropdown for Mobile */}
            <div>
              <button
                onClick={toggleDropdown}
                className="md:block w-full text-left px-3 py-2 flex items-center justify-center text-base font-semibold text-black hover:text-customGolden"
              >
                Services
                <svg
                  className={`ml-2 h-5 w-5 inline transition-transform transform ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06 0L10 10.92l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {isOpen && (
                <div className="pl-4 space-y-1">
                  <NavLink
                    to="/cleaning-services"
                    className={({ isActive }) =>
                      `md:block px-3 py-2 text-base font-semibold flex justify-center ${
                        isActive
                          ? "text-customGolden bg-yellow-50 rounded-md"
                          : "text-black hover:text-customGolden"
                      }`
                    }
                    onClick={toggleMobileMenu}
                  >
                    Swayz Cleaning
                  </NavLink>
                  <NavLink
                    to="/leano-profile"
                    className={({ isActive }) =>
                      `md:block px-3 py-2 text-base font-semibold flex justify-center ${
                        isActive
                          ? "text-customGolden bg-yellow-50 rounded-md"
                          : "text-black hover:text-customGolden"
                      }`
                    }
                    onClick={toggleMobileMenu}
                  >
                    Swayz Construction
                  </NavLink>
                  <NavLink
                    to="/business-profile"
                    className={({ isActive }) =>
                      `md:block px-3 py-2 text-base font-semibold flex justify-center ${
                        isActive
                          ? "text-customGolden bg-yellow-50 rounded-md"
                          : "text-black hover:text-customGolden"
                      }`
                    }
                    onClick={toggleMobileMenu}
                  >
                    Security
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block px-3 py-2 text-base font-semibold flex items-center justify-center ${
                  isActive
                    ? "text-customGolden md:bg-transparent bg-yellow-50 rounded-md"
                    : "text-black hover:text-customGolden"
                }`
              }
              onClick={toggleMobileMenu}
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block px-3 py-2 text-base font-semibold flex items-center justify-center ${
                  isActive
                    ? "text-customGolden md:bg-transparent bg-yellow-50 rounded-md"
                    : "text-black hover:text-customGolden"
                }`
              }
              onClick={toggleMobileMenu}
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
