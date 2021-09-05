import React from 'react';
import './sidebar.css';
//image
import zuriLogo from '../../assets/zuri-logo.svg';
import Navigation from '../navaigation/Navigation';

import navContents from '../../assets/nav';

function Sidebar() {
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
