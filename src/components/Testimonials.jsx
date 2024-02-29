import React from 'react';

const testimonials = [
  {
    id: 1,
    name: "Ahmed Youssef",
    position: "Seller",
    testimonial: "Using this platform has transformed the way I sell used tech. The process is straightforward, and the customer service is outstanding.",
  },
  {
    id: 2,
    name: "Sara Kamal",
    position: "Buyer",
    testimonial: "I found exactly what I needed in less than a day. The wide selection and secure transaction system made my purchase decision a no-brainer.",
  },
  {
    id: 3,
    name: "Mohamed Ali",
    position: "Seller",
    testimonial: "The exposure my products received on this platform was incredible. It’s been a game-changer for my small business.",
  },
];

const TestimonialCard = ({ testimonial, name, position }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6">
    <p className="text-gray-700 text-base mb-4">
      "{testimonial}"
    </p>
    <p className="text-gray-900 leading-none">{name}</p>
    <p className="text-gray-600">{position}</p>
  </div>
);

const Testimonials = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
