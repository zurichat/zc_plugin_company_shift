import React from 'react';
//components
import Main from '../components/main/main';
import MainSidebar from '../components/sidebar/Sidebar';
import Calendar from '../components/calendar/calendar';
//css
import './shitf_management/shift_management.css';

function ManagementHome() {
  return (
    <div className='Management-container'>
      <MainSidebar></MainSidebar>
      <div>
      <Main></Main>
      <Calendar />
      </div>
    </div>
  );
}

export default ManagementHome;
