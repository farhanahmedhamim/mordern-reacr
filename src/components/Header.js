import React, { useState, useEffect } from 'react';
// Import data
import { header } from '../data';

// Import icons
import { HiMenuAlt4, HiOutlineX } from 'react-icons/hi'

// Import components
import MobileNav from '../components/MobileNav';
import Nav from '../components/Nav';

const Header = () => {
  // Mobile nav state
  const [mobileNav, setMobileNav] = useState(false);

  // Header state
  const [isActive, setIsActive] = useState(false);

  // Destructure header data
  const { logo, btnText } = header;

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      // Set isActive based on scroll position
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    };

    window.addEventListener("scroll", handleScroll);
    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect runs only once after initial render

  return (
    <header className={`${isActive ? 'lg:top-0 bg-white shadow-2xl' : 'lg:top-[20px]'} py-6 lg:py-4 fixed w-full transition-all z-10`}>
      <div className='container mx-auto flex justify-between items-center'>
        {/* Logo */}
        <a href='/' data-aos='fade-down' data-aos-delay='1000' data-aos-once='true'>
          <img src={logo} alt='' />
        </a>

        {/* Navigation - initially hidden on mobile */}
        <div className='hidden lg:flex' data-aos='fade-down' data-aos-delay='1200' data-aos-once='true'>
          <Nav />
        </div>

        {/* CTA button - initially hidden on mobile */}
        <button className='btn btn-sm btn-outline hidden lg:flex' data-aos='fade-down' data-aos-delay='1400' data-aos-once='true'>{btnText}</button>

        {/* Mobile nav trigger button - hidden on desktop */}
        <button className='lg:hidden' onClick={() => setMobileNav(!mobileNav)}>
          {mobileNav ? <HiOutlineX className='text-3xl text-accent' /> : <HiMenuAlt4 className='text-3xl text-accent' />}
        </button>

        {/* Mobile nav - hidden on desktop */}
        <div className={`${mobileNav ? 'left-0' : '-left-full'} fixed top-0 bottom-0 w-[60vw] lg:hidden transition-all`}>
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
