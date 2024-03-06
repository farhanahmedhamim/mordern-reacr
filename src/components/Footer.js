import React from 'react';
// Import data
import { footer } from '../data';
// Import component
import Copyright from '../components/Copyright';

const Footer = () => {
  // Destructure footer data
  const { logo, links, legal, newsletter, form } = footer;

  return (
    <footer className='pt-[142px] pb-[60px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left lg:justify-between gap-y-8'>

          {/* Logo and legal links */}
          <div data-aos='fade-up' data-aos-offset='200' data-aos-delay='300' data-aos-once='true'>
            <img src={logo} alt='' />
            <ul className='flex flex-col gap-y-3 mt-4'>
              {legal.map((item, index) => {
                const { href, name } = item;
                return (
                  <li key={index}>
                    <a className='font-medium hover:text-accent transition' href={href}>{name}</a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Links list 1 */}
          <div data-aos='fade-up' data-aos-offset='200' data-aos-delay='500' data-aos-once='true'>
            <div className='text-2xl uppercase font-medium mb-6'>Links</div>
            <ul className='flex flex-col gap-y-3'>
              {links.map((item, index) => {
                const { href, name } = item;
                return (
                  <li key={index}>
                    <a className='font-medium hover:text-accent transition' href={href}>{name}</a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Links list 2 (Legal) */}
          <div data-aos='fade-up' data-aos-offset='200' data-aos-delay='700' data-aos-once='true'>
            <div className='text-2xl uppercase font-medium mb-6'>Legal</div>
            <ul className='flex flex-col gap-y-3'>
              {legal.map((item, index) => {
                const { href, name } = item;
                return (
                  <li key={index}>
                    <a className='font-medium hover:text-accent transition' href={href}>{name}</a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Newsletter */}
          <div data-aos='fade-up' data-aos-offset='200' data-aos-delay='900' data-aos-once='true'>
            <div className='text-2xl uppercase font-medium mb-6'>{newsletter.title}</div>
            <div className='text-xl text-light mb-[18px]'>{newsletter.subtitle}</div>
            {/* Newsletter form */}
            <form className='max-w-[349px] mb-[10px]'>
              <div className='h-[62px] p-[7px] flex border border-dark rounded-lg'>
                <input className='w-full h-full pl-6 border-none outline-none placeholder:text-dark' type='text' placeholder={form.placeholder} />
                <button className='btn btn-sm bg-accent hover:bg-accentHover w-[102px] text-white'>{form.btnText}</button>
              </div>
            </form>
            <span className='text-sm text-light'>{form.smallText}</span>
          </div>

        </div>
        {/* Divider */}
        <hr className='mt-10 mb-5' data-aos='fade-up' data-aos-offset='100' data-aos-delay='200' data-aos-once='true' />
        {/* Copyright */}
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
