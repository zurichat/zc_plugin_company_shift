import React from 'react';
import './main.css';
import { Link } from 'react-router-dom';
// import CreateShift from '../modal/CreateShift';
//icons
import { AiOutlineSearch } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { AiOutlineDown } from 'react-icons/ai';


function Main() {
  // const [Employee, setEmployee] = useState(Employ);
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
          <Link to='/modal'><button className='create-btn'>create a new shift</button></Link>
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
      </section>
      <br />
      <section>
        
      </section>
    </div>
  );
}

export default Main;
