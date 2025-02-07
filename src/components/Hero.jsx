import React from "react";
import myImage from "../assets/myimage.png";

function Hero() {
  return (
    <>
      <section>
        {/* Left side is starting  */}
        <div className="left">
          <h1 className="text-purple-400">
            <span className="text-purple-800 text-3xl  md:text-5xl font-bold">
              Abdullah Al Mamun{" "}
            </span>{" "}
            <br /> Frontend Developer & Wordpress Website Designer
          </h1>
          <p className="my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            aliquid, doloribus aperiam laboriosam veniam voluptate, eum,
            doloremque asperiores aliquam ea cumque saepe? Nemo, possimus!
            Facilis nobis cumque nulla sunt sequi nostrum velit magni repellat
            amet? Necessitatibus illum beatae ab nihil!
          </p>
          <br />
          {/* button  */}
          <button id="btn">Download CV</button>
        </div>
        <br />
        {/* Right Side Starts from here */}
        <div className="right relative bg-black overflow-hidden z-50">
          <div className="border-2 border-purple-500 shadow-2xl rounded-lg ">
            <div
              className="w-20 h-20 rounded-full absolute bg-purple-500 p-12 -z-1 overflow-hidden
          -left-4 -top-4 opacity-30"
            ></div>

            <img className="max-w-64 mx-auto" src={myImage} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
