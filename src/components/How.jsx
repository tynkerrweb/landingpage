import React from "react";
import dropIcon from "../assets/Minimalist-icon.svg";
import targetIcon from "../assets/target-ico.svg";
import respIcon from "../assets/resp-ico.svg";
import { HowHeading } from "../assets/svgjs";

const How = () => {
  return (
    <div className="relative bg-[#EEF2FF] main-container" id="how">
      {/* <p className="text-[#4f46e5] italic font-bold text-7xl">How?</p> */}
      <HowHeading className="svg-heading w-fit" />
      <div className="flex lg:flex-row flex-col">
        <div className="text-sm mb-10 lg:mb-0 lg:pr-28 font-medium lg:w-1/2">
          <p>
            We love working with small businesses and non-profit organization. A
            website need to achieve certain key objectives in order to create
            the impact and draw in the right kind of attention. It needs to be
            purposeful and practical without being ostentatious.
          </p>
          <p className="mt-5">
            Clarity of thought and a sense of understanding and empathy towards
            the customers true intentions are vital to this end.
          </p>
          <p className="mt-5">
            There are 3 key aspects that we believe will help us achieve this
            goal
          </p>
          <ul className="ml-4 mt-10">
            <li className="list-disc mb-5">
              <strong>Minimalism:</strong> Clean and uncluttered web design that
              creates a sense of clarity from a visual perspective without
              clouding the viewers screen real estate
            </li>
            <li className="list-disc mb-5">
              <strong>Clarity and Concision:</strong> Bring focus and clarity to
              the website through careful and deliberate writing to a targeted
              audience
            </li>
            <li className="list-disc mb-5">
              <strong>Responsive:</strong> Design that is well suited to work on
              multiple devices may it be a desktop, laptop, tablet or a
              smartphone without any degradation in visual appeal
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-3xl flex items-center justify-evenly w-screen -ml-10 lg:ml-0 lg:w-1/2 py-5 lg:-mt-20 px-5">
          <div className="h-full flex flex-col justify-center items-center w-1/2">
            {card(dropIcon, "Minimalist", "Clean and uncluttered web design")}
            {card(
              respIcon,
              "Responsive",
              "Design that is well suited to work on multiple devices"
            )}
          </div>
          <div className="w-1/2 flex flex-col justify-center items-center">
            {card(
              targetIcon,
              "Clear & Concise",
              "Bring focus and clarity to the website"
            )}
          </div>
        </div>
      </div>
    </div>
  );
  function card(dropIcon, heading, desc) {
    return (
      <div
        className="w-32 md:w-40 lg:w-60 h-48 lg:h-64 bg-white rounded-3xl flex flex-col items-center justify-center m-5"
        style={{
          boxShadow: "-10px -10px 50px #D2D0F8,10px 10px 20px #ffffff",
        }}
      >
        <img src={dropIcon} alt="drop icon" className="h-12 lg:h-16 w-auto" />
        <p className="font-bold text-sm lg:text-base my-3">{heading}</p>
        <p className="text-center text-xs lg:text-sm px-3 sm:px-5">{desc}</p>
      </div>
    );
  }
};

export default How;
