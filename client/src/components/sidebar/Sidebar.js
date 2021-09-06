import React from 'react';
import './sidebar.css';
//image
import zuriLogo from '../../assets/zuri-logo.svg';
import Navigation from '../navigation/Navigation';
//component

import navContents from '../../assets/nav';

function Sidebar() {
  // const [_,__] = useState();
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
