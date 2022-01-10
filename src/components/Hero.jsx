import React from "react";
import bgImg from "../assets/sketch-web-design-wireframes-sketch-paper-negative-space-thumb-1-1.jpg";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div id="hero">
      <div className={styles.bgDiv.tail} style={styles.bgDiv.css} />

      <div className="relative x-container flex flex-col items-center lg:items-start justify-center h-[30em] lg:h-[50em]">
        <p className={styles.header}>Breath life into your digital presence</p>
        <p className="relative text-white text-sm lg:text-lg tracking-wide italic my-5">
          Let us help you create an online presence that captures an audience
          and makes a statement
        </p>
        <button className="relative lg:mt-5 lg:mb-10 h-10 w-32 lg:h-12 lg:w-40 text-white bg-[#4f46e5] hover:bg-indigo-500 transition ease-in-out rounded text-sm lg:text-lg bold">
          <Link
            activeClass="active"
            to="getintouch"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Get in touch!
          </Link>
        </button>
      </div>
    </div>
  );
};

const styles = {
  bgDiv: {
    css: {
      backgroundImage: `url(${bgImg})`,
    },
    tail: "absolute bg-black top-0 left-0 lg:bg-fixed bg-no-repeat bg-cover h-[30em] lg:h-[50em] w-full",
  },
  navDiv: "flex lg:justify-between w-full flex-col lg:flex-row",
  logo: "h-14 h-10 w-auto lg:h-20 my-10",
  overlay: "absolute w-full opacity-50 bg-black h-full",
  header: "relative text-white text-4xl lg:text-7xl lg:mt-36",
};

export default Hero;
