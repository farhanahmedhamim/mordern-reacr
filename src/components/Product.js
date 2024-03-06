import React from 'react';
// Import data
import { product } from '../data';
// Import components
import Cards from './Cards';

const Product = () => {
  // Destructure product data
  const { title, subtitle } = product;

  return (
    <section className='section'>
      <div className='container mx-auto'>
        {/* Title and Subtitle */}
        <div className='flex flex-col items-center lg:flex-row mb-10 lg:mb-20' data-aos='fade-up' data-aos-offset='400' data-aos-delay='300' data-aos-once='true'>
          {/* Title */}
          <h2 className='section-title' data-aos='fade-up' data-aos-offset='400' data-aos-delay='400' data-aos-once='true'>{title}</h2>
          {/* Subtitle */}
          <p className='lead lg:max-w-[350px]'>{subtitle}</p>
        </div>
        {/* Cards */}
        <Cards />
      </div>
    </section>
  );
};

export default Product;
