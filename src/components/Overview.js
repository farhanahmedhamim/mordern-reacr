import React from 'react';
// Import data
import { overview } from '../data';

const Overview = () => {
  // Destructure overview data
  const { productImg } = overview;

  return (
    <section className='lg:min-h-[712px] bg-overview bg-cover bg-left-top pt-[30px] lg:pt-[87px]'>
      <div className='container mx-auto flex justify-end overflow-hidden'>
        {/* Product image */}
        <img src={productImg} alt='' data-aos='fade-up' data-aos-offset='300' data-aos-once='true' />
      </div>
    </section>
  );
};

export default Overview;
