import { useState } from 'react';
import Link from 'next/link';

const NavBar = () => {
  // const menuClick = () => {};
  return (
    <header>
      <div className='bg-lime-green h-12 w-full px-3 py-4 flex items-center justify-between mx-auto relative'>
        <nav className='hidden md:flex nav_text uppercase h-full items-center gap-x-3'>
          <Link href='/'>Articles</Link>
          <Link href='/'>Directory</Link>
          <Link href='/'>Events</Link>
        </nav>
        <div>PUT LOGO HERE</div>
        <nav className='hidden md:flex nav_text uppercase h-full items-center gap-x-3'>
          <button className='uppercase p-1'>Search</button>
          <Link href='/'>About</Link>
          <Link href='/'>Join Us</Link>
          <Link href='/'>Services</Link>
        </nav>
        <button className='md:hidden text-left uppercase'>Menu</button>
      </div>
    </header>
  );
};

export default NavBar;
