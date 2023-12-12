"use client";

import React, { useState } from 'react';
import NavbarButton from './NavbarButton';
import NavbarContent from './NavbarContent';
import LogoutButton from './LogoutButton';
import { isMediumScreenOrLarger } from '@/libs/utils';

function Navbar() {
  var sidebarOpen = localStorage.getItem('sidebarOpen');
  if (isMediumScreenOrLarger() && sidebarOpen == null) {sidebarOpen = "true"}
  const [isOpen, setIsOpen] = useState(sidebarOpen === 'true');

  const handleNavClick = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    localStorage.setItem('sidebarOpen', newState.toString());
  }
  const selectOption = () => {
    setIsOpen(false);
  }

  return (
    <>
    <div className={`md:hidden ${!isOpen ? 'hidden' : ''} fixed z-10 bg-opacity-70 bg-black h-screen w-screen`}></div>
    <nav className={`flex flex-col justify-between fixed md:relative h-full z-20 ${isOpen ? 'w-3/4 md:w-64 pl-6' : 'w-0'} bg-color-primary-strong text-color-font pt-6`}>
      <NavbarContent isOpen={isOpen} selectOption={selectOption}/>
      <NavbarButton handleClick={handleNavClick} isOpen={isOpen}/>
      <div className={`flex items-center justify-start pb-5 ${!isOpen ? "hidden" : ""}`}>
        <LogoutButton/>
      </div>
    </nav>
    </>
  );
}
  
  export default Navbar;