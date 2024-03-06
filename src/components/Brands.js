import React from 'react';
// Import data
import { overview } from '../data';

const Brands = () => {
  // Destructure brands data from overview
  const { brands } = overview;

  return (
    <section className='py-9'>
      <div className='container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-6'>
        {/* Iterate over each brand */}
        {brands.map((item, index) => {
          // Destructure data for each brand item
          const { image, delay } = item;

          return (
            <div key={index} data-aos='fade-up' data-aos-delay={delay} data-aos-once='true'>
              {/* Render brand image */}
              <img src={image} alt='' />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Brands;
