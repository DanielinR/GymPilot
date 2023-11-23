"use client";

import React, { useState } from 'react';
import NavbarButton from './NavbarButton';
import NavbarContent from './NavbarContent';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

    const handleNavClick = () => {
      setIsOpen(!isOpen);
    }

    return (
      <>
      <div className={`md:hidden ${!isOpen ? 'hidden' : ''} fixed z-10 bg-opacity-70 bg-black h-screen w-screen`}></div>
      <nav className={`fixed md:relative h-full z-20 ${isOpen ? 'w-3/4 md:w-64 pl-6' : 'w-0'} bg-color-primary-strong text-color-font pt-6`}>
        <NavbarContent isOpen={isOpen}/>
        <NavbarButton handleClick={handleNavClick} isOpen={isOpen}/>
      </nav>
      </>
    );
  }
  
  export default Navbar;