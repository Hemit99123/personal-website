"use client";

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

interface ProjectItemProps {
  title: string;
  imgSrc: string;
  hoverImgSrc: string;
  slug: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ title, imgSrc, hoverImgSrc, slug}) => {
  const [isHovered, setIsHovered] = useState(false);

  const router = useRouter()

  const handleGoPage = () => {
    router.push(slug)
  }

  return (
    <div className="cursor-pointer" onClick={handleGoPage}>
      <div
        className="border-2 border-black flex justify-center items-center relative overflow-hidden h-80 rounded-md"
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
