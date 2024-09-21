"use client";

import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import bgImage from "../assets/images/image.png";
import leftVector1 from "../assets/svgs/landingpage/left-vector1.svg";
import leftVector2 from "../assets/svgs/landingpage/left-vector2.svg";
import rightVector from "../assets/svgs/landingpage/right-vector.svg";

const HeroSection: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const bgImageUrl = `url(${bgImage.src})`;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    // Disable scroll when the menu is open
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Clean up by enabling scrolling when component is unmounted or menu closes
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <div
      className="relative max-w-full h-[25rem] sm:h-[37.5rem] md:h-[43.75rem] lg:h-[40rem] xl:h-[40rem] 2xl:h-[50rem] bg-cover bg-no-repeat bg-bluedark"
      id="HeroSection"
      style={{ backgroundImage: bgImageUrl }}
    >
      <div className="h-[1.25rem] sm:h-[1.875rem] md:h-[2.5rem] lg:h-[3.75rem] flex items-center justify-between p-8 sm:p-10 md:p-14 lg:p-16 pt-10 scroll-smooth">
        {/* Burger Menu Icon for Small Screens */}
        <div className="lg:hidden md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? (
              <FaTimes size={24} /> // Close icon when menu is open
            ) : (
              <FaBars size={24} /> // Burger icon when menu is closed
            )}
          </button>
        </div>

        {/* Center Section for Medium and Large Screens */}
        <div className="hidden lg:flex md:flex font-poppins py-4">
          <nav className="flex space-x-2 sm:space-x-4 md:space-x-8 lg:space-x-28 ml-[0.25rem] sm:ml-[1.75rem] md:ml-[2rem] lg:ml-16 2xl:ml-96">
            <a
              href="#HeroSection"
              className="text-white font-medium lg:text-[1rem] sm:text-sm md:text-lg"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white font-medium lg:text-[1rem] sm:text-sm md:text-lg"
            >
              About
            </a>
            <a
              href="#blogs"
              className="text-white font-medium lg:text-[1rem] sm:text-sm md:text-lg"
            >
              Blogs
            </a>
            <a
              href="#demo"
              className="text-white font-medium lg:text-[1rem] sm:text-sm md:text-lg"
            >
              Demo
            </a>
            <a
              href="#contact"
              className="text-white font-medium lg:text-[1rem] sm:text-sm md:text-lg"
            >
              Contact Us
            </a>
            <a
              href="#Features"
              className="text-white font-medium lg:text-[1rem] sm:text-sm md:text-lg bg-lightblue lg:w-[6rem] rounded-full pl-6"
            >
              LogIn
            </a>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden md:hidden fixed inset-0  top-[4rem] left-0 w-full bg-bluedark bg-opacity-95  text-white z-10 scroll-smooth">
          <nav
            className="flex flex-col items-center space-y-4 py-4"
            onClick={closeMenu}
          >
            <a href="#HeroSection" className="text-white text-lg font-medium">
              Home
            </a>
            <a
              href="#about"
              className="text-white text-lg font-medium"
              onClick={closeMenu}
            >
              About
            </a>
            <a
              href="#blogs"
              className="text-white text-lg font-medium"
              onClick={closeMenu}
            >
              Blogs
            </a>
            <a
              href="#demo"
              className="text-white text-lg font-medium"
              onClick={closeMenu}
            >
              Demo
            </a>
            <a
              href="#contact"
              className="text-white text-lg font-medium"
              onClick={closeMenu}
            >
              Contact Us
            </a>
            <a
              href="#Features"
              className="text-white text-lg font-medium"
              onClick={closeMenu}
            >
              LogIn
            </a>
          </nav>
        </div>
      )}

      {/* Rest of the Hero Section */}
      <div className="flex">
        {/* Left Vectors */}
        <div className="flex-col h-[37.5rem] justify-between hidden lg:flex">
          <Image
            src={leftVector1}
            width={70} // Adjust the width as needed
            height={70} // Adjust the height as needed
            alt="Vector 1"
          />
          <Image
            src={leftVector2}
            width={70} // Adjust the width as needed
            height={70} // Adjust the height as needed
            alt="Vector 2"
          />
        </div>

        <div className="relative flex flex-col justify-center w-full h-full text-center text-white p-2 sm:p-12 lg:p-14">
          {/* Arrow and Heading Wrapper */}
          <div className="relative max-w-[80%] sm:max-w-4xl md:max-w-[60%] lg:max-w-[80%] xl:max-w-[90%] mx-auto text-center">
            <div className="max-w-full md:max-w-full lg:max-w-[90%] xl:max-w-[90%] mx-auto text-center">
              <h1 className="font-bold text-[4rem] sm:text-[2.5rem] md:text-[1.75rem] lg:text-[6rem] 2xl:text-[7rem] leading-tight sm:leading-tight md:leading-normal lg:leading-normal xl:leading-tight text-lightblue">
                Lead<span className="text-white-light">Zen</span>
              </h1>
            </div>
          </div>

          <p className="font-medium mt-[0.25rem] text-[1rem]  sm:text-[0.4rem] md:text-[0.875rem] lg:text-[2.7rem] 2xl:text-[2.5rem] mb-[0.75rem] px-0 sm:px-[1.5rem] md:px-[2rem] lg:justify-center tracking-wide bg-lightblue max-w-sm lg:max-w-4xl mx-auto text-center">
            <span>Transforming Business Insights</span> into Smarter,
            Data-Driven <span className="text-bluedark font-medium">Success</span>
          </p>

          <button className="text-white font-bold text-base bg-bluedark w-[11rem] h-[3rem] sm:w-[11rem] lg:w-[12.5rem] 2xl:w-[14rem] 2xl:mt-10 rounded-full mt-[0.5rem] mb-[0.5rem] sm:mt-[1.5rem] sm:mb-[1.5rem] mx-auto hover:bg-white hover:text-bluedark">
            Take a Demo!
          </button>
        </div>

        {/* Right Vectors */}
        <div className="flex-col h-[20rem] justify-between hidden lg:flex">
          <Image
            src={rightVector}
            width={70} // Adjust the width as needed
            height={70} // Adjust the height as needed
            alt="Vector 3"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
