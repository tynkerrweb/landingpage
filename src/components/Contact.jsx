import React from "react";
import logo from "../assets/Logo.svg";
import { FaPhone } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { animateScroll as scroll } from "react-scroll";
import SitemapLink from "./SitemapLink";

const Contact = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div
      className="bg-black text-white flex flex-col main-container"
      id="footer"
    >
      <div className="flex flex-col lg:flex-row items-center lg:justify-evenly lg:mb-20">
        <div className="mb-10 lg:mb-0">
          <img src={logo} alt="logo" className="mb-5 h-20" />
          <div className="flex justify-center lg:justify-start lg:mb-5">
            <FaPhone className="rotate-90 mr-3 text-xl" />
            <p>(214)-600-2079</p>
          </div>
          <div className="flex justify-center lg:justify-start lg:mb-5">
            <MdOutlineEmail className="mr-3 text-2xl" />
            <p>tynkerrweb@gmail.com</p>
          </div>
        </div>
        <div className="mb-10 lg:mb-0">
          <p className="text-4xl lg:text-5xl italic lg:mb-5">Site Map</p>
          <SitemapLink />
        </div>
      </div>
      <button
        className="bg-gray-800 hover:bg-gray-600 transition ease-in-out h-10 lg:h-12 w-36 lg:w-60 text-slate-100 rounded-lg font-bold lg:text-lg self-center"
        onClick={scrollToTop}
      >
        Back to Top
      </button>
    </div>
  );
};

export default Contact;
