"use client";

import React, { useEffect, useState } from 'react';
import NavbarButton from './NavbarButton';
import NavbarContent from './NavbarContent';
import LogoutButton from './LogoutButton';
import { isMediumScreenOrLarger } from '@/libs/utils';
import useWindowDimensions from '@/libs/useWindowDimensions';

export default function Navbar() {
  const { width, height } = useWindowDimensions();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(()=>{
    var sidebarOpen = localStorage.getItem('sidebarOpen');
    if (isMediumScreenOrLarger(width) && sidebarOpen == null) {sidebarOpen = "true"}
    setIsOpen(sidebarOpen === 'true');
  },[width])

  const handleNavClick = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    isMediumScreenOrLarger(width) && localStorage.setItem('sidebarOpen', newState.toString());
    setIsOpen(newState);
  }
  
  const selectOption = () => {
    if (isMediumScreenOrLarger(width)) return
    setIsOpen(false);
  }

  return (
    <>
    <div onClick={() => {setIsOpen(false)}} className={`md:hidden ${!isOpen ? 'hidden' : ''} fixed z-10 bg-opacity-70 bg-black fullheight w-screen`}></div>
    <nav className={`flex flex-col justify-between fixed md:relative h-full z-20 ${isOpen ? 'w-3/4 md:w-64 p-4' : 'w-0 md:w-14'} bg-neutral-500 text-white font-bold text-xl`}>
      <NavbarContent isOpen={isOpen} selectOption={selectOption}/>
      <NavbarButton handleClick={handleNavClick} isOpen={isOpen}/>
      <div className={`flex items-center justify-start pb-5 ${!isOpen ? "hidden md:flex" : ""}`}>
        <LogoutButton/>
      </div>
    </nav>
    </>
  );
}