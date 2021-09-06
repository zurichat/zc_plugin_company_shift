import React from 'react';
//components

import Calendar from '../../components/calendar/calendar';
import Main from '../../components/main/main';
// import MainSidebar from '../../components/sidebar/Sidebar';
//css
import './shift_management.css';

function ManagementHome() {
  return (
    <div className='Management-container'>
      {/* <MainSidebar></MainSidebar> */}
      <div>
        <Main></Main>
        <Calendar />
      </div>
    </div>
  );
}

export default ManagementHome;
