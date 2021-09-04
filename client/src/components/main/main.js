import React, { useState } from 'react';
import './main.css';
//icons
import { AiOutlineSearch } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { AiOutlineDown } from 'react-icons/ai';
import { IoChevronBackOutline } from 'react-icons/io5';
import { IoChevronForward } from 'react-icons/io5';
import { GoPrimitiveDot } from 'react-icons/go';
//images
import Employ from '../../assets/user';

function Main() {
  const [Employee, setEmployee] = useState(Employ);
  return (
    <div className='main-conatiner'>
      <section className='main-header'>
        <div class='main-header-wrapper'>
          <div className='main-input-container'>
            <input className='input-box' type='text' placeholder='search' />
            <span className='search-icon-main'>
              <AiOutlineSearch></AiOutlineSearch>
            </span>
          </div>
          <span className='main-settings-icon'>
            <FiSettings></FiSettings>
          </span>

          <span className='admin-img-holder'>
            <img
              className='admin-img'
              src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
              alt=''
            />
          </span>
        </div>
      </section>

      <section className='main-title'>
        <div className='main-title-text'>
          <span className='main-txt'>
            <h1>Shift Management</h1>
          </span>
          &nbsp;
          <div className='main-img-container'>
            <div className='main-text-img'>
              <img
                src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
                alt=''
                style={{ width: '100%', height: '100%', borderRadius: '24px' }}
              />
            </div>
            <div className='main-text-img-2'>
              <img
                src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
                alt=''
                style={{ width: '100%', height: '100%', borderRadius: '24px' }}
              />
            </div>
            <div className='main-text-img'>
              <img
                src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
                alt=''
                style={{ width: '100%', height: '100%', borderRadius: '24px' }}
              />
            </div>
            <div className='main-text-img-2'>
              <img
                src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
                alt=''
                style={{ width: '100%', height: '100%', borderRadius: '24px' }}
              />
            </div>
          </div>
        </div>

        <div className='main-title-btns'>
          <button className='shift-btn'>
            swap shift
            <span>
              <AiOutlineDown></AiOutlineDown>
            </span>
          </button>
          <button className='create-btn'>create a new shift</button>
        </div>
      </section>
      <br />

      <section className='main-department-section'>
        <div className='main-department-items'>
          <select name='' id=''>
            <option value=''>Departments</option>
            <option value=''>Field department</option>
            <option value=''>Human Resources</option>
            <option value=''>IT</option>
            <option value=''>Engineering</option>
          </select>

          <span>
            <select name='' id=''>
              <option value=''>All Status</option>
              <option value=''>On duty</option>
              <option value=''>Awaiting Shifts</option>
              <option value=''>Off Duty</option>
              <option value=''>Not Assigned</option>
            </select>
          </span>

          <span>
            <select name='' id=''>
              <option value=''>All Shifts</option>
              <option value=''>Morning</option>
              <option value=''>Afternoon</option>
              <option value=''>Interns</option>
              <option value=''>Evening</option>
            </select>
          </span>
        </div>
        <div className='main-department-date'>
          <div className='week-container'>
            <p>Weekly</p>
          </div>

          <div className='day-container'>
            <p>Mon 27 - Fri 31</p>
          </div>

          <div className='move-btn'>
            <button>
              <IoChevronBackOutline></IoChevronBackOutline>
            </button>
            <button>
              <IoChevronForward></IoChevronForward>
            </button>
          </div>
        </div>
      </section>
      <br />
      <section>
        <table id='workers'>
          <tr>
            <th>Employee</th>
            <th>
              <p>Mon</p>
              <p>AUG 27</p>
            </th>
            <th>
              <p>Tues</p>
              <p>AUG 28</p>
            </th>
            <th>
              <p>Wed</p>
              <p>AUG 29</p>
            </th>
            <th>
              <p>Thur</p>
              <p>AUG 30</p>
            </th>
            <th>
              <p>Fri</p>
              <p>AUG 31</p>
            </th>
            <th>
              <p>SAT</p>
              <p>SEP1 </p>
            </th>
          </tr>
          {Employee.map((eachEmployee) => (
            <tr>
              <td className='profile'>
                <span>
                  <div className='table-user-image-cont'>
                    <img
                      src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
                      alt=''
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '24px',
                      }}
                    />
                  </div>
                </span>
                &nbsp;
                <span>
                  <h5 className='profile-text'>{eachEmployee.name}</h5>
                </span>
              </td>
              {eachEmployee.daysOfTheWeekAvailable.map((eachitems, index) => {
                // const { MON } = eachEmployee.daysOfWeek;
                let b;

                if (eachEmployee.daysOfWeek) {
                  b = eachEmployee.daysOfWeek[index];
                }

                let employeeStatus;
                let style;
                let shift;
                let timeLeft;
                if (eachEmployee[eachitems.status]) {
                  let status_holder = eachitems.status;
                  employeeStatus = eachEmployee[status_holder];
                  style = {
                    backgroundColor: employeeStatus['color'],
                    color: employeeStatus['iconColor'],
                  };
                  shift = employeeStatus['shift'];
                  timeLeft = employeeStatus['timeLeft'];
                }
                if (b === eachitems.Day) {
                  /**/

                  return (
                    <td className='resume-work' style={style}>
                      <div className='resume-shift'>
                        <span className='shift-text'>shift</span>
                        <span className='resume-icon'>
                          <GoPrimitiveDot></GoPrimitiveDot>
                          <span>{eachitems.status}</span>
                        </span>
                      </div>

                      <div className='resume-time'>
                        <span className='resume-work-time'>{shift}</span>
                        <span className='resume-time-left'>{timeLeft}</span>
                      </div>
                    </td>
                  );
                } else {
                  //b = eachEmployee.daysOfWeek[index + 1];
                  return <td></td>;
                }
              })}
            </tr>
          ))}
        </table>
      </section>
    </div>
  );
}

export default Main;
