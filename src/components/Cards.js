import React, { useState } from 'react';
// Import data
import { product } from '../data';
// Import image
import ArrowImg from '../assets/img/product/cards/arrow.svg';

const Cards = () => {
  // State to track selected card index
  const [index, setIndex] = useState(1); // Initialized with 0 to match the array index

  // Destructure cards data from product
  const { cards } = product;

  return (
    <>
      {/* Render cards */}
      <div className='flex flex-col gap-y-[30px] lg:flex-row lg:gap-x-[30px]'>
        {cards.map((card, cardIndex) => {
          // Destructure card properties
          const { icon, title, subtitle, delay } = card;

          return (
            <div key={cardIndex} data-aos='zoom-out' data-aos-offset='300' data-aos-delay={delay} data-aos-once='true'>
              {/* Card */}
              <div
                className={`${index === cardIndex && 'bg-white shadow-2xl'} w-[350px] h-[350px] flex flex-col justify-center items-center mx-auto p-[65px] text-center rounded-[12px] cursor-pointer transition-all`}
                onClick={() => setIndex(cardIndex)} // Set selected index on click
              >
                {/* Card icon */}
                <div className='mb-6'>
                  <img src={icon} alt='' />
                </div>
                {/* Card title */}
                <div className='mb-3 text-[30px] font-medium'>{title}</div>
                {/* Card subtitle */}
                <p className='mb-6 text-light'>{subtitle}</p>
                {/* Arrow image shown if this card is selected */}
                {index === cardIndex && <img src={ArrowImg} alt='' />}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
