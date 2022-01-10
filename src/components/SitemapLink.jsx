import React from "react";
import navItems from "./navItems.json";
import { Link } from "react-scroll";

const SitemapLink = () => {
  return (
    <div className="flex flex-col items-center lg:items-start">
      {navItems.navItems.map((item) => {
        return (
          <p className="lg:mb-2 hover:cursor-pointer" key={item.id}>
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
          </p>
        );
      })}
    </div>
  );
};

export default SitemapLink;
