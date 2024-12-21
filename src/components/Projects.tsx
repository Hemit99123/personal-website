import React from 'react';
import ProjectItem from './ProjectItem';

const Projects = () => {
  // Define an array of project objects with width and height
  const projectData = [
    {
      title: 'Talem',
      imgSrc: '/projects-assets/talem.png',
      hoverImgSrc: '/projects-assets/talem-hover.png',
    },
    {
      title: 'DailySAT',
      imgSrc: '/projects-assets/dailysat.png',
      hoverImgSrc: '/projects-assets/dailysat-hover.png',

    },
    {
      title: 'Trashify',
      imgSrc: '/projects-assets/trashify.png',
      hoverImgSrc: '/projects-assets/trashify-hover.png',
    },
    {
      title: 'Everyone Classroom',
      imgSrc: '/projects-assets/everyone-stem.png',
      hoverImgSrc: '/projects-assets/everyone-stem-hover.png',
      },
  ];

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
