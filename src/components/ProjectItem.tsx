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
        className="border-2 border-black flex justify-center items-center relative overflow-hidden h-80"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={isHovered ? hoverImgSrc : imgSrc}
          alt={title}
          className={`transition-all duration-300 ease-in-out ${isHovered ? 'object-cover w-full h-full' : 'w-20 h-20'}`}
        />
      </div>
      <p className="text-xl font-medium">{title}</p>
    </div>
  );
};

export default ProjectItem;
