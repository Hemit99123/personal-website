import React from 'react';
import Job from './Job';
import jobs from '@/data/experience';

const Experience = () => {


  return (
    <div className="mt-10 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-52 mb-16">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-black">My Experience</h1>
      <p className="text-gray-500 mb-5">These are some cool things I&apos;m working/worked on :)</p>
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
