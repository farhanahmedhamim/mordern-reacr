import React from 'react';
// Import data
import { copyright } from '../data';

const Copyright = () => {
  // Destructure copyright data
  const { link1, link2, copyText, social } = copyright;

  return (
    <div className='flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between' data-aos='fade-up' data-aos-offset='0' data-aos-delay='200' data-aos-once='true'>
      {/* Links */}
      <div className='flex gap-x-6'>
        <a className='hover:text-accent transition' href={link1.href}>{link1.name}</a>
        <a className='hover:text-accent transition' href={link2.href}>{link2.name}</a>
      </div>

      {/* Copyright text */}
      <div>{copyText}</div>

      {/* Social icons */}
      <ul className='flex gap-x-[12px]'>
        {social.map((item, index) => {
          const { href, icon } = item;
          return (
            <li key={index}>
              <a href={href}>
                <img src={icon} alt='' />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Copyright;
