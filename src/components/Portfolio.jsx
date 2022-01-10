import React from "react";
import doozyImgLG from "../assets/doozy_page_lg.png";
import Slider from "react-slick";
import { PortfolioHeading } from "../assets/svgjs";

const Portfolio = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 2000,
    lazyLoad: true,
  };
  return (
    <div id="portfolio" className="y-container">
      <PortfolioHeading className="svg-heading x-container" />
      <div className="flex flex-col text-lg bg-[#EEF2FF] lg:px-60 mt-5 lg:mt-10 x-container">
        <div className="-translate-y-5 lg:-translate-y-10 shadow-2xl border-none">
          <Slider {...settings}>
            {WebdevEx()}
            {WebdevEx()}
          </Slider>
        </div>
      </div>
    </div>
  );

  function WebdevEx() {
    return (
      <div className="bg-gray-900">
        <div className="text-white m-5">
          <p className="lg:text-xl">Doozy</p>
          <p className="text-sm lg:text-base text-gray-500 pb-4">Bakery</p>
          <div className="text-sm lg:text-base">
            <p>
              UX, UI design for an incredible bakery that does home baked
              creations to enchant your palate.
            </p>
            <p>Crafted by hand 💁‍♀️.</p>
            <p>Flavors inspired by our heritage 🙏🏽</p>
          </div>
        </div>
        <img src={doozyImgLG} alt="" />
      </div>
    );
  }
};

export default Portfolio;
