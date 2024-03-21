"use client";
import React from 'react'
import './nav.css'
import { IoHome } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { RiBook2Line } from "react-icons/ri";
import { LuHelpingHand } from "react-icons/lu";
import { GrContact } from "react-icons/gr";
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav className='bg-[#720026]'>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active': ''}><IoHome /></a>
      <a href='#about'onClick={() => setActiveNav('#about')} className= {activeNav === '#about' ? 'active' : ''}><FaUser /></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className= {activeNav === '#experience' ? 'active' : ''}><RiBook2Line /></a>
      <a href='#services' onClick={() => setActiveNav('#services')} className= {activeNav === '#services' ? 'active' : ''}><LuHelpingHand /></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className= {activeNav === '#contact' ? 'active' : ''}><GrContact /></a>
    </nav>
  )
}

export default Nav
