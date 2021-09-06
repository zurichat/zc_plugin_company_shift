import React, { useState } from 'react';
import './primaryheader.css';
//icons
import { AiOutlineSearch } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { AiOutlineDown } from 'react-icons/ai';

function Pheader()
{

    return(

 <div className="klare-main-container">

<section className='klare-main-header'>

        <div class='klare-main-header-wrapper'>
          <div className='klare-main-input-container'>
            <input className='klare-input-box' type='text' placeholder='search' />
            <span className='klare-search-icon-main'>
              <AiOutlineSearch></AiOutlineSearch>
            </span>
          </div>
          <span className='klare-main-settings-icon'>
            <FiSettings></FiSettings>
          </span>

          <span className='klare-admin-img-holder'>
            <img
              className='klare-admin-img'
              src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
              alt=''
            />
          </span>
        </div>
      </section>

<section className='klare-main-title'>
        <div className='klare-main-title-text'>
          <span className='klare-main-txt'>
            <h1>Shift Management</h1>
          </span>
          &nbsp;
          <div className='klare-main-img-container'>
            <div className='klare-main-text-img'>
              <img
                src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
                alt=''
                style={{ width: '100%', height: '100%', borderRadius: '24px' }}
              />
            </div>
            <div className='klare-main-text-img-2'>
              <img
                src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
                alt=''
                style={{ width: '100%', height: '100%', borderRadius: '24px' }}
              />
            </div>
            <div className='klare-main-text-img'>
              <img
                src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
                alt=''
                style={{ width: '100%', height: '100%', borderRadius: '24px' }}
              />
            </div>
            <div className='klare-main-text-img-2'>
              <img
                src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
                alt=''
                style={{ width: '100%', height: '100%', borderRadius: '24px' }}
              />
            </div>
          </div>
        </div>

        <div className='klare-main-title-btns'>

          <button className='klare-shift-btn'>
            swap shift
            <span>
              <AiOutlineDown></AiOutlineDown>
            </span>
          </button>
          <button className='klare-create-btn'>create a new shift</button>
        </div>

    </section>
<br />
</div>  
    );





}


export default Pheader; 