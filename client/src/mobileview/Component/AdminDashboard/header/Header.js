import React from 'react';
import './Header.css';
//zuri logo
import zuriLogo from '../../../assets/img/mobile-zuri-logo.svg';
//icons
import { FiSearch, FiMoreVertical } from 'react-icons/fi';

function Header() {
  return (
    <div className='adminDashboard-header'>
      <div className='mobileview-zuri-logo'>
        <img src={zuriLogo} alt='' />
      </div>

      <div>
        <span>
          <FiSearch className='admindashBoard-searchicon'></FiSearch>
        </span>
        <span>
          <FiMoreVertical className='admindashBoard-moreicon'></FiMoreVertical>
        </span>
      </div>
    </div>
  );
}

export default Header;
