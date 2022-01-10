import React, { useState } from "react";
import { GetStartedHeading } from "../assets/svgjs";
import emailjs from "@emailjs/browser";

const GetInTouch = () => {
  const [showModal, setShowModal] = useState(false);

  const Modal = () => {
    return (
      <div className="fixed flex flex-col justify-center items-center top-0 left-0 z-10 w-screen h-screen bg-opacity-50 bg-slate-400">
        <div className="w-80 h-60 bg-white rounded-xl flex flex-col items-center justify-center px-5">
          <p className="text-3xl text-center">Thank you!</p>
          <p className="text-center">
            We have received your requtest and will be in touch very soon
          </p>
          <button
            className="w-20 h-10 bg-[#e63946] text-white rounded-md font-semibold text-lg mt-10"
            onClick={() => setShowModal(false)}
          >
            Done
          </button>
        </div>
      </div>
    );
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_hztz9v8",
        "template_zfmkeyo",
        e.target,
        "user_26WQttcmTcLnOvj3sEOPQ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setShowModal(true);
  };

  return (
    <div className="flex flex-col y-container" id="getintouch">
      <GetStartedHeading className="svg-heading x-container" />
      <div className="bg-[#EEF2FF] main-container">
        {showModal ? <Modal /> : null}
        <div className="flex flex-col lg:flex-row justify-evenly items-baseline">
          <div className="w-full lg:w-96">
            <p className="text-3xl lg:text-4xl font-semibold pb-5">
              Tell and more on how we can help
            </p>
            <p className="text-xl">
              Get in touch with us with your contact and a brief description of
              your project. We'll help you make it happen!
            </p>
          </div>
          <div
            className="bg-[#4f46e5] flex flex-col justify-center lg:w-3/6 rotate-[2deg] rounded-[3em] lg:-translate-y-10 my-10 lg:my-0 lg:mx-10"
            style={{
              boxShadow: "5px 5px 20px #4f46e5,10px 10px 20px #ffffff",
            }}
          >
            <form onSubmit={sendEmail}>
              <div className="flex flex-col rotate-[-2deg] mx-10 lg:my-10">
                <input
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  className="my-10 h-14 w-full text-lg italic rounded-md pl-2 text-black focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="my-10 h-14 w-full text-lg italic rounded-md pl-2 text-black focus:outline-none"
                />
                <textarea
                  placeholder="Message"
                  name="message"
                  className="my-10 rounded-md w-full p-2 text-lg italic h-60 text-black focus:outline-none"
                />
                <input
                  className="bg-[#fcbf49] text-white font-bold text-lg h-12 w-full lg:w-40 mt-5 mb-10 rounded-md hover:cursor-pointer hover:bg-[#f7b531]"
                  type="submit"
                  value="Submit"
                ></input>
              </div>
            </form>
          </div>
          <div className="flex flex-col justify-center self-center w-fit">
            <p className="text-2xl pb-3">Or just email us at:</p>
            <div className="bg-[#e63946] w-fit py-3 px-4 rounded-xl shadow-2xl hover:-translate-y-1 hover:scale-110 duration-100 hover:cursor-pointer">
              <a
                className="text-white"
                target="_top"
                href="mailto:email@example.com"
              >
                tynkerrweb@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
