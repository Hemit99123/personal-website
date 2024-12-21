import React from 'react';
import PersonTestimonial from './PersonTestimonial';

const testimonials = [
  {
    testimonial: 'Hemit is a brilliant young developer. He worked as an intern at one of our tech startups and blew us away with his knowledge and attitude towards work. Best of luck Hemit!',
    person: 'Jay Hao',
    personImg: '/people/jay-hao.png',
    title: 'Ex-CEO of OKEX',
  },
  {
    testimonial: "Hemit is an extremely talented young man. I've had the pleasure of mentoring / working with Hemit from the beginning. He's a quick learner and is years ahead of his age. Hemit has a very bright future ahead, looking forward to working with him in the future",
    person: 'Parth Patel',
    personImg: '/people/parth-patel.png',
    title: 'Board Member of GharMates',
  },
  {
    testimonial: "I highly recommend Hemit Patel as a team leader and an amazing coder. His exceptional coding skills and strong leadership qualities have consistently contributed to our companies success. Hemit's ability to tackle complex technical challenges while inspiring and guiding the team is truly commendable. He's an invaluable asset to any project or organization.",
    person: 'Rishi Patel',
    personImg: '/people/rishi-patel.png',
    title: 'Ex-CHRO of Everyone STEM',
  },
  {
    testimonial: 'Hemit is a very generous person and knowing him for a while, he is also enthusiastic towards the work he does. We work on the same team together, and he has always been an open but polite responder, which is in itself very helpful.',
    person: 'Vibhuti Bafna',
    personImg: '/people/vibhuti-bafna.png',
    title: 'Ex-CIO of Everyone STEM',
  },
];

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
