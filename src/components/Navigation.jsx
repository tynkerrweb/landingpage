import React, { useState, useEffect } from "react";
import navItems from "./navItems.json";
import { Link } from "react-scroll";
import logo from "../assets/Logo.svg";
import useMediaQuery from "../hooks/useMediaQuery";

const Navigation = () => {
  const isDesktop = useMediaQuery("(min-width: 960px)");

  const [navClicked, setNavClicked] = useState(false);

  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 10) {
      return setScrolled(true);
    } else {
      return setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const styleStrings = {
    mainDiv: `flex justify-between w-full lg:flex-row items-center x-container fixed z-10 ease-in-out duration-200 ${
      scrolled
        ? "bg-gray-900 py-2 shadow-md shadow-gray-800"
        : "lg:py-10 py-5 lg:my-0"
    }`,
    navDiv: "flex py-0 px-3 items-center",
    navButton: `lg:mx-5 text-white text-lg my-2 lg:my-0 h-7 lg:w-30 ${
      isDesktop ? "navBtn" : "hover:bg-white hover:text-black"
    }`,
    logo: `relative h-10 ease-in-out duration-200 ${
      scrolled ? "lg:h-12" : "lg:h-20"
    }`,
  };

  function NavMobile() {
    return (
      <div className={styleStrings.mainDiv}>
        <img src={logo} alt="logo" className={styleStrings.logo} />
        <div
          className="px-2 py-2 rounded h-fit z-20"
          onClick={() => setNavClicked(!navClicked)}
        >
          {navClicked ? (
            <div className="flex items-center justify-center h-fit my-2">
              <div className="w-6 h-0.5 bg-gray-200 rotate-45" />
              <div className="w-6 h-0.5 bg-gray-200 -rotate-45 -ml-6" />
            </div>
          ) : (
            <div>
              <div className="w-6 h-0.5 bg-gray-200 mb-1.5" />
              <div className="w-6 h-0.5 bg-gray-200 mb-1.5" />
              <div className="w-6 h-0.5 bg-gray-200" />
            </div>
          )}
        </div>

        <div
          className={`flex flex-col py-[8.2em] px-3 items-center bg-black opacity-90 absolute z-10 top-0 left-0 w-full ${
            navClicked
              ? "translate-y-0 scale-y-100"
              : "-translate-y-full scale-y-0"
          } ease-in-out duration-300`}
        >
          {navItems.navItems.map((item) => {
            return (
              <button className={styleStrings.navButton} key={item.id}>
                <Link
                  activeClass="active"
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  {item.title}
                </Link>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  function NavDesktop() {
    return (
      <div className={styleStrings.mainDiv}>
        <img src={logo} alt="logo" className={styleStrings.logo} />
        <div className={styleStrings.navDiv}>
          {navItems.navItems.map((item) => {
            return (
              <button className={styleStrings.navButton} key={item.id}>
                <Link
                  activeClass="active"
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  {item.title}
                </Link>
              </button>
            );
          })}
        </div>
        {/* <div className="relative w-10 h-10 bg-white z-20 after:bg-red-900 after:h-3 after:w-10 after:content-none after:absolute after:-bottom-5"></div> */}
      </div>
    );
  }

  return (
    <>
      {isDesktop ? NavDesktop() : NavMobile()}
      {}
    </>
  );
};

export default Navigation;
