import React from 'react'
import './Modal.css'
import avatar from '../../company_shift_logo.png'

const closeModal = (e) =>{ 
    e.target
    }

function Modal() {
    return (
        <div className='overlay'>
            <button className="close" onclick=>X</button>
            <div className='modal'>
                <div className="header">
                    <div className="user">
                        <img src={avatar} alt="" />
                        <aside>
                            <h3>Abu Emmanuel</h3>
                            <p>Frontend Department</p>
                            <small>On Duty</small>
                        </aside>
                    </div>
                    <div>
                        <button>Messge</button>
                        <p className="view">View Shifts</p>
                    </div>
                </div>
                <ul className="tab">
                    <li>Profile</li>
                    <li className="active">TimeSheet</li>
                </ul>
                <div className="timesheet">
                    <div className="tab-head">
                        <h3>TimeSheet</h3>
                        <button>Download</button>
                    </div>
                    <div className="table">
                        <div className="th">
                            <h5>Date</h5>
                            <h5>Shift TIme</h5>
                            <h5>Status</h5>
                            <h5>Hours Tracked</h5>
                        </div>
                        <div className="tr">
                            <p>24 Aug 2021</p>
                            <p>Morning</p>
                            <div className="tr-bg">
                                <div className='tr-shift'>
                                    <h6>Shift</h6>
                                    <small>On Duty</small>
                                </div>
                                <p>9am - 1pm</p>
                            </div>
                            <h5>5hr 30min</h5>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}

export default Modal
