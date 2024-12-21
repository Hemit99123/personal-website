import React from 'react';
import Job from './Job';

const Experience = () => {
  const jobs = [
    {
      title: "President, DailySAT",
      date: "Aug 2024-Present",
      imgSrc: "/companies/dailysat.png",
    },
    {
      title: "CTO, Talem",
      date: "July 2024-Present",
      imgSrc: "/companies/talem.png",
    },
    {
      title: "Software Engineer Intern, GharMates",
      date: "Dec 2023- Aug 2024",
      imgSrc: "/companies/gharmates.png",
    },
    {
      title: "Chairman & CTO, Everyone STEM",
      date: "July 2023-Dec 2024",
      imgSrc: "/companies/everyone-stem.png",
    },
  ];

  return (
    <div className="mt-10 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-52 mb-16">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-black">My Experience</h1>
      <p className="text-gray-500 mb-5">These are some cool things I'm working/worked on :)</p>
      <div className="space-y-6">
        {jobs.map((job, index) => (
            <Job 
            key={index}
            title={job.title}
            date={job.date}
            imgSrc={job.imgSrc}
            />
        ))}
      </div>

    </div>
  );
};

export default Experience;
