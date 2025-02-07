import React from "react";
import myImage from "../assets/myimage.png";
import htmlImage from "../assets/html.svg";
import tailwindImage from "../assets/tailwind.svg";
import reactImage from "../assets/react.svg";
import jsImage from "../assets/js.svg";
import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { FaSquareUpwork, FaUpwork } from "react-icons/fa6";
function Hero() {
  return (
    <>
      <section className=" md:grid md:grid-cols-12 gap-4 pb-0 mb-0">
        {/* Left side is starting  */}
        <div className="left md:col-span-6">
          <h1 className="text-purple-400">
            <span className="text-purple-800 text-3xl  md:text-5xl font-bold">
              Abdullah Al Mamun{" "}
            </span>{" "}
            <br /> Frontend Developer & Wordpress Website Designer
          </h1>
          <p className="my-2">
            web developer specializing in React, Node.js, and WordPress. Since
            2022, I've also been a WordPress web designer on Fiverr,
            collaborating with many international clients. Now I love to work
            with national and International team with{" "}
            <b className="text-purple-700">react js</b> and{" "}
            <b className="text-purple-700">node js , express js</b>
          </p>
          <br />
          {/* button  */}
          <button id="btn" className="hover:animate-pulse">
            Download CV
          </button>

          <div className="mt-10">
            <h2>You can Find me Social media Platform......</h2>
            <div className="flex gap-3 mt-4">
              <a
                href="https://github.com/almamun528"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="hover:animate-pulse" id="social">
                  <FaGithub />
                </button>
              </a>
              <a
                href="https://api.whatsapp.com/message/WQSVX5CH3VGNC1?autoload=1&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="hover:animate-pulse" id="social">
                  <FaWhatsapp />
                </button>
              </a>
              <a
                href="https://www.instagram.com/wp_mamun/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="hover:animate-pulse" id="social">
                  <FaInstagram />
                </button>
              </a>
              <a
                href="https://www.linkedin.com/in/mamun-js/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="hover:animate-pulse" id="social">
                  <FaLinkedinIn />
                </button>
              </a>
            </div>

            <>
              <h2 className="mt-3">
                I am also active into international marketplace....
              </h2>
              <span className="flex gap-3 mt-2 bg-gray-600 w-fit px-1 rounded  animate-pulse">
                <a
                  href="https://www.fiverr.com/free_mamun"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="text-blue-400 underline ">Fiverr.com</p>
                </a>
                <a
                  href="https://www.upwork.com/freelancers/~0128c27e26d30e1643"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="text-blue-400 underline ">Up Work.com</p>
                </a>
              </span>
            </>
          </div>
        </div>
        <br />
        {/* Right Side Starts from here */}
        <div className="right md:col-span-5 shadow-2xl relative bg-black overflow-hidden z-50">
          <div className="border-2 border-purple-500 shadow-2xl rounded-lg ">
            {/*  top left circle */}
            <div
              className="w-20 h-20 rounded-full absolute bg-purple-500 p-12 -z-1 overflow-hidden
          -left-4 -top-4 opacity-30"
            ></div>
            {/* top right  */}
            <div
              className="w-20 h-20 rounded-full absolute bg-purple-800 p-20 -z-3 overflow-hidden
          -right-7  -top-4 opacity-30"
            ></div>
            {/* React image */}
            <img
              className=" absolute -z-1 -left-10 top-10 animate-spin"
              src={reactImage}
              alt=""
            />
            {/* tailwindCss Image  */}
            <img
              className=" absolute -z-1 -right-14 -top-14 animate-pulse"
              src={tailwindImage}
              alt=""
            />
            {/* Html Image */}
            <img
              className=" absolute -z-3 md:right-24 right-0 top-32 md:top-28"
              src={htmlImage}
              alt=""
            />
            {/* JS Image  */}
            <img
              className=" absolute -z-3 md:right-24 -left-24 -bottom-28"
              src={jsImage}
              alt=""
            />

            {/* My Image  */}
            <img className="max-w-64  mx-auto" src={myImage} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
