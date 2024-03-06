import React from 'react';
// Import Swiper slider components from react
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

const ClientSlider = ({ clients }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      grabCursor={true}
      loop={true}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 0
        },
        1170: {
          slidesPerView: 3,
          spaceBetween: 30
        },
      }}
    >
      {/* Map through clients and render each client as a Swiper slide */}
      {clients.map((client, index) => {
        // Destructure client properties
        const { message, image, name, position, borderColor } = client;

        return (
          <SwiperSlide key={index} style={{ borderColor: borderColor }} className='border-t-[10px] rounded-t-[12px]'>
            {/* Client card */}
            <div className='w-full mx-auto lg:max-w-[300px] xl:max-w-[350px] h-[250px] rounded-[12px border border-gray py-6 px-[30px]'>
              {/* Client message */}
              <div className='mb-[30px]'>{message}</div>
              {/* Client name, image, and position */}
              <div className='flex gap-x-[10px]'>
                <img src={image} alt='' />
                <div className='font-bold'>{name}</div>
                <div className='text-light'>{position}</div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ClientSlider;
