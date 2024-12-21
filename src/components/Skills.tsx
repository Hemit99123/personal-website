import React from 'react'
import { FaGithub, FaReact, FaHtml5, FaNodeJs, FaCss3 } from "react-icons/fa";
import { DiRedis } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";

const Skills = () => {
  return (
    <div className="mt-10 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-52 mb-20">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-black">Skills</h1>
      <p className="text-gray-500">These are some of my mastered technologies and languages:</p>
      <div className="flex space-x-3 text-4xl mt-6">
        <FaGithub />
        <FaReact />
        <FaHtml5 />
        <FaNodeJs />
        <DiRedis />
        <RiTailwindCssFill />
        <FaCss3 />
      </div>

    </div>
  )
}

export default Skills