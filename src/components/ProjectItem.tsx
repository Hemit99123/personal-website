"use client";

import React, { useState } from 'react';

interface ProjectItemProps {
  title: string;
  imgSrc: string;
  hoverImgSrc: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ title, imgSrc, hoverImgSrc}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="cursor-pointer">
      <div
        className="border-2 border-black flex justify-center items-center relative overflow-hidden h-80 sm:h-96 md:h-[20rem] lg:h-[24rem] xl:h-[28rem]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={isHovered ? hoverImgSrc : imgSrc}
          alt={title}
          className={`transition-all duration-300 ease-in-out ${isHovered ? 'object-cover w-full h-full' : 'w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56'}`}
        />
      </div>
      <p className="text-xl font-medium text-center">{title}</p>
    </div>
  );
};

export default ProjectItem;
