import React from 'react';
import ProjectItem from './ProjectItem';
import {projects} from '@/data/projects';

const Projects = () => {
  return (
    <div id="projects" className="mt-10 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-52 mb-20">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-10">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Map through projectData and pass props to ProjectItem */}
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            title={project.title}
            imgSrc={project.imgSrc}
            hoverImgSrc={project.hoverImgSrc}
            slug={project.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
