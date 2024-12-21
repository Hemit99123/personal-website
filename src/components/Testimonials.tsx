import React from 'react';
import PersonTestimonial from './PersonTestimonial';
import testimonials from '@/data/tests';

const Experience = () => {
  return (
    <div className="mt-10 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-52 mb-16">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">Testimonials</h1>
      <p className="text-gray-500 mb-8">People who think I'm goated</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {testimonials.map((item, index) => (
          <PersonTestimonial
            key={index}
            testimonial={item.testimonial}
            person={item.person}
            personImg={item.personImg}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
