import React from 'react';
import ProjectItem from './ProjectItem';
import projectData from '@/data/projects';

const Projects = () => {
  // Define an array of project objects with width and height


  return (
    <div id="projects" className="mt-10 px-52 lg:px-30">
      <h1 className="text-5xl font-black mb-10">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Map through projectData and pass props to ProjectItem */}
        {projectData.map((project, index) => (
          <ProjectItem
            key={index}
            title={project.title}
            imgSrc={project.imgSrc}
            hoverImgSrc={project.hoverImgSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
