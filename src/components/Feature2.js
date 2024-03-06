import React from 'react';
// Import data
import { features } from '../data';

const Feature2 = () => {
  // Destructure feature2 data from features
  const { feature2 } = features;
  // Destructure feature2 properties
  const { pretitle, title, subtitle, btnLink, btnIcon, image } = feature2;

  return (
    <section className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:items-center lg:gap-[30px]'>
          {/* Image */}
          <div className='flex-1 order-2 lg:order-1' data-aos='fade-right' data-aos-offset='300' data-aos-once='true'>
            <img src={image} alt='' />
          </div>
          {/* Text */}
          <div className='flex-1 order-1 lg:order-2' data-aos='fade-left' data-aos-offset='400' data-aos-once='true'>
            {/* Pretitle */}
            <div className='pretitle'>{pretitle}</div>
            {/* Title */}
            <h2 className='title'>{title}</h2>
            {/* Subtitle */}
            <p className='lead'>{subtitle}</p>
            {/* Button */}
            <button className='btn-link flex items-center gap-x-3 hover:gap-x-5 transition-all'>
              {btnLink} <img src={btnIcon} alt='' />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature2;
