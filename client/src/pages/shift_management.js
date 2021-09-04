import React from 'react';
//components
import Main from '../components/main/main';
import MainSidebar from '../components/sidebar/Sidebar';
//css
import './shitf_management/shift_management.css';

function ManagementHome() {
  return (
    <div className='Management-container'>
      <MainSidebar></MainSidebar>
      <Main></Main>
    </div>
  );
}

export default ManagementHome;
