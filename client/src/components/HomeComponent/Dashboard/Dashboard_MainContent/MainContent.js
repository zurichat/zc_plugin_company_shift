import React from "react";
import Table from "./Table";
import './MainContent.css'

const MainContent = () => {
  return (
    <div className="dashboard-main-content">
      <div className="dashboard-main-content-heading">
        <form action="">
          <select name="" id="">
            <option value="department">Department</option>
          </select>
          <select name="" id="">
            <option value="all-status">All Status</option>
          </select>
          <select name="" id="">
            <option value="all-shifts">All Shifts</option>
          </select>
        </form>
        <div className="dashboard-main-content-heading-schedule">
          <div className="weekly">Weekly</div>
          <div className="time">Mon 27 - Fri 31</div>
          <div className="schedule-shift">
            <i className="bx bx-chevron-left"></i>
            <i className="bx bx-chevron-right"></i>
          </div>
        </div>
      </div>

      <div class="dashboard-main-content-body">
        <Table />
      </div>
    </div>
  );
};

export default MainContent;
