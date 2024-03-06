import React from 'react';
// Import data
import { testimonials } from '../data';
// Import components
import ClientSlider from '../components/ClientSlider';

const Testimonials = () => {
  // Destructure testimonials data
  const { title, clients } = testimonials;

  return (
    <section className='section'>
      <div className='container mx-auto'>
        {/* Title */}
        <h2 className='title mb-10 lg:mb-20 text-center max-w-[920px] mx-auto' data-aos='fade-up' data-aos-delay='200' data-aos-once='true'>
          {title}
        </h2>
        {/* Slider */}
        <div data-aos='fade-up' data-aos-delay='400' data-aos-once='true'>
          <ClientSlider clients={clients} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
