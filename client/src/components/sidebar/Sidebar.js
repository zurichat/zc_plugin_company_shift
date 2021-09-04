<<<<<<< HEAD
import logo from '../../company_shift_logo.png';
import React from 'react'
import './Sidebar.css'


function Sidebar() {
    return (
        <div className="sidebar">
        <img src={logo} alt="company's logo" />


        </div>
        
    )
}

export default Sidebar
=======
import React, { useState } from 'react';
import './sidebar.css';
//image
import zuriLogo from '../../assets/zuri-logo.svg';
import Navigation from '../navaigation/Navigation';
//component

import navContents from '../../assets/nav';

function Sidebar() {
  const [] = useState();
  return (
    <div className='sideBar-container'>
      <section className='sidebar-header'>
        <div className='zuri-logo-container'>
          <img src={zuriLogo} alt='' />
        </div>
      </section>

      <section className='nav-container'>
        <Navigation contents={navContents}></Navigation>
      </section>
    </div>
  );
}

export default Sidebar;
>>>>>>> 8cb9d623533445e00d8885e880d20cc56e7401a0
