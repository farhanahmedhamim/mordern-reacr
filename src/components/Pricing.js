import React, { useState } from 'react';
// Import data
import { pricing } from '../data';
// Import icons
import { HiCheck, HiOutlineArrowNarrowRight } from 'react-icons/hi';

const Pricing = () => {
  // State to track selected card index
  const [index, setIndex] = useState(1); // Initialized with 0 to match the array index

  // Destructure title and cards from pricing data
  const { title, cards } = pricing;

  return (
    <section className='section'>
      <div className='container mx-auto'>
        {/* Title */}
        <h2 className='h2 mb-10 lg:mb-20 text-center' data-aos='fade-up' data-aos-delay='200' data-aos-once='true'>
          {title}
        </h2>

        {/* Cards */}
        <div className='flex flex-col lg:flex-row lg:gap-x-[30px] gap-y-[30px] lg:gap-y-0 justify-center items-center'>
          {cards.map((card, cardIndex) => {
            // Destructure card properties
            const { icon, title, services, price, userAmount, btnText, delay } = card;

            return (
              <div key={cardIndex} data-aos='fade-up' data-aos-delay={delay} data-aos-offset='300' data-aos-once='true'>
                {/* Card */}
                <div
                  onClick={() => setIndex(cardIndex)} // Set selected index on click
                  className={`${cardIndex === index ? 'bg-white shadow-2xl' : 'border border-gray'} w-[350px] h-[500px] rounded-[12px] p-[40px] cursor-pointer transition-all`}
                >
                  {/* Card icon */}
                  <div className='mb-8'>
                    <img src={icon} alt='' />
                  </div>
                  {/* Card title */}
                  <div className='text-[32px] font-semibold'>{title}</div>
                  {/* Card services */}
                  <div className='flex flex-col gap-y-2 mb-6'>
                    {services.map((service, serviceIndex) => {
                      // Destructure service properties
                      const { name } = service;

                      return (
                        <div key={serviceIndex} className='flex items-center gap-x-[12px]'>
                          {/* Check icon */}
                          <HiCheck className='text-light' />
                          {/* Service name */}
                          <div>{name}</div>
                        </div>
                      );
                    })}
                  </div>

                  <div className='mb-10'>
                    <div>
                      {/* Price */}
                      <span className='text-2xl font-semibold'>{price}/</span>
                      <span className='text-xl text-light'>year</span>
                    </div>
                    {/* User amount */}
                    <div className='text-base text-light'>{userAmount}</div>
                  </div>

                  {/* Button */}
                  <button
                    className={`${cardIndex === index ? 'bg-accent hover:bg-accentHover text-white' : 'border border-accent text-accent'} btn btn-sm space-x-[14px]`}
                  >
                    <span>{btnText}</span>
                    <HiOutlineArrowNarrowRight />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
