"use client";

import React from "react";
import Image from "next/image";
import { GithubIcon, LinkedinIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  const handleRedirect = (link: string) => {
    router.push(link);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen relative md:pb-0 pb-16 sm:-mt-20">
      {/* Name/Image */}
      <Image
        src="/HeroName.png"
        alt="my name"
        width={500}
        height={0}
        className="md:w-auto w-3/4"
      />

      {/* Description */}
      <div className="max-w-[700px] mt-7 sm:mt-5">
        <p className="text-xl text-center font-medium">
          an aspiring software engineer, focusing on beautiful designs, shipping impact, GTFOL
        </p>
      </div>

      {/* Social Media Buttons */}
      <div className="mt-4 space-x-2">
        <button
          onClick={() => handleRedirect("https://github.com/hemit99123")}
          className="border-2 border-gray-500 rounded-full px-2 py-2"
        >
          <GithubIcon />
        </button>
        <button
          onClick={() => handleRedirect("https://www.linkedin.com/in/hemit-patel-383ab3271/")}
          className="border-2 border-gray-500 rounded-full px-2 py-2"
        >
          <LinkedinIcon />
        </button>
      </div>

      {/* Goodies Section */}
      <div
        className="cursor-pointer absolute bottom-5 flex flex-col items-center md:bottom-5 sm:bottom-16"
        onClick={() => handleRedirect("/#projects")}
      >
        <p className="text-sm">down here for the goodies~</p>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width={50}
          height={50}
        >
          <path
            d="M12 5V19M12 19L6 13M12 19L18 13"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
