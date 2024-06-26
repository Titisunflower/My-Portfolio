"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#ffa5ab] via-[#720026] to-[#ffa5ab]">
              Hello, I'm{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Henriette",
                1000,
                "Frontend Dev",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Transforming ideas into captivating user experiences with a blend of
            creativity and technical expertise.
          </p>
          <div>
            <button className="px-6 py-3 sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#ffa5ab] via-[#720026] to-[#ffa5ab] hover:text-black text-white font-bold">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#720026] to-[#ffa5ab] hover:text-[#720026] text-white mt-3 font-medium">
              <span className="block bg-black hover-bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#720026] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
              alt="hero image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
