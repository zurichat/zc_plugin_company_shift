import React from 'react';
import './main.css';
import { BiArrowBack, BiCalendarAlt } from 'react-icons/bi';

function Main() {
  return (
    <div className='mobile-main-wrapper'>
      <section className='mobile-main-header'>
        <span className='mobile-arrow-bck'>
          <BiArrowBack></BiArrowBack>
        </span>
        <div className='arrow-title'>
          <strong>Shift Management</strong>
        </div>
        <br></br>
      </section>
      <br></br>

      <section className='filter-header'>
        <h5>Filter</h5>
      </section>
      <br></br>

      <section className='table-wrapper'>
        <table className='mobile-table'>
          <tr className='mobile-table-header'>
            <th></th>
            <th>
              <div className='DayOfTheWeek'>TUES</div>
              <div className='DayNo'>AUG 28</div>
            </th>
            <th>
              <div className='DayOfTheWeek'>TUES</div>
              <div className='DayNo'>AUG 28</div>
            </th>
            <th>
              <BiCalendarAlt className='calendar-icon'></BiCalendarAlt>
            </th>
          </tr>
          <br></br>
          <tr className='mobileview-shift'>
            <td className='mobile-profile-container'>
              <div className='mobile-pic'>
                <img
                  src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
                  alt=''
                  className='mobile-img'
                />
              </div>
              &nbsp; &nbsp;
              <div clasName='mobile-text'>
                <p>Deyrin Cutting</p>
              </div>
            </td>

            <td className='shift-board'>
              <p className='shift-type-container'>
                <span className='shift-status'></span>&nbsp;
                <span>Ended Shift</span>
              </p>
              <br />
              <p>9pm - 6:30am</p>
            </td>
            <td className='shift-board'>
              <p>
                <span className='shift-status'></span>&nbsp;
                <span>Ended Shift</span>
              </p>
              <br />
              <p>9pm - 6:30am</p>
            </td>
          </tr>
          <br></br>
          <tr className='mobileview-shift'>
            <td className='mobile-profile-container'>
              <div className='mobile-pic'>
                <img
                  src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
                  alt=''
                  className='mobile-img'
                />
              </div>
              &nbsp; &nbsp;
              <div clasName='mobile-text'>
                <p>
                  Deyrin
                  <br></br>Cutting
                </p>
              </div>
            </td>
            <td className='shift-board'>
              <p>
                <span className='shift-status'></span>&nbsp;
                <span>Ended Shift</span>
              </p>
              <br />
              <p>9pm - 6:30am</p>
            </td>
            <td className='shift-board'>
              <p>
                <span className='shift-status'></span>&nbsp;
                <span>Ended Shift</span>
              </p>
              <br />
              <p>9pm - 6:30am</p>
            </td>
            &nbsp;
            <br></br>
          </tr>
          <br></br>
          <tr className='mobileview-shift'>
            <td className='mobile-profile-container'>
              <div className='mobile-pic'>
                <img
                  src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
                  alt=''
                  className='mobile-img'
                />
              </div>
              &nbsp; &nbsp;
              <div clasName='mobile-text'>
                <p>
                  Deyrin
                  <br></br>Cutting
                </p>
              </div>
            </td>

            <td className='shift-board'>
              <p>
                <span className='shift-status'></span>&nbsp;
                <span>Ended Shift</span>
              </p>
              <br />
              <p>9pm - 6:30am</p>
            </td>
            <td className='shift-board'>
              <p>
                <span className='shift-status'></span>&nbsp;
                <span>Ended Shift</span>
              </p>
              <br />
              <p>9pm - 6:30am</p>
            </td>
          </tr>
        </table>
      </section>
    </div>
  );
}

export default Main;
