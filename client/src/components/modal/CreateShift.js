import * as AiIcons from 'react-icons/ai';
import { useState } from "react";
import createshift from "./createshift.css"

const CreateShift = () => {
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    }
    const [date, setDate] = useState(false);
    const [isChecked, setIsChecked] = useState(false)
    const handleChange = () => {
       setDate(!date);
       setIsChecked(!isChecked)
   
    }
    return ( 
        <div className="body-container">
        <button
        className="btn"
        onClick={toggleModal}
        >
            Click me
        </button>
        
        {modal&& (
            <form className="outer-container">
                <div className="overlay">
           
                </div>
                <AiIcons.AiOutlineClose 
                    className="close-btn"
                    onClick={toggleModal}
                />
                <div className="">
                    <div className="container">
                        <h2 className="shift-heading">Create a new Shift</h2>
                        <div class="select-employee-options">
                <div class="department-section">
                    <label for="department">Department</label>
                    <select name="" id="" className="dropdown">
                        <option value="field" className="dropdown-content">Field department </option> 
                        <option value="human resource" className="dropdown-content">Human Resources </option>
                        <option value="IT" className="dropdown-content">IT</option>
                        <option value="Engineering" className="dropdown-content">Engineering</option>
                    </select>
                </div>
                <div class="date-section">
                    <label for="date">Date</label>
                    <input type="date"/>
                </div>
                
            </div>
                <div class="employee-section">
                    <label for="employee">Employee</label>
                    <select name="" id="" className="dropdown">
                        <option value="field" className="dropdown-content">Ezechukwu Lots</option> 
                        <option value="human resource" className="dropdown-content">Olakunle Fasasi</option>
                        <option value="IT" className="dropdown-content">Eniola Badmus</option>
                        <option value="Engineering" className="dropdown-content">Simon Peters</option>
                    </select>
                </div>
                <div className="time-section">
                    <div className="time start-time">
                        <p>Start time</p>
                        <h3>09:00am</h3>
                    </div>
                    <div className="time end-time">
                        <p>End time</p>
                        <h3>02:00pm</h3>
                    </div>
                    <div className="time duration-time">
                        <p>Duration</p>
                        <h3>5hours</h3>
                    </div>
                </div>
            <div className="shift-setting">
                <h2>Shift mode</h2>
                <p>Choose recurrent if you want to repeat this shift for long</p>
                <div className="shift-option">
                    <div class="shifts">
                        <input type="checkbox" name="" id="checkbox" />
                        <label for="one-off">One-Off Shift</label>
                    </div>
                    <div class="shifts">
                        <input type="checkbox" name="" id="checkbox" onChange={handleChange} checked={isChecked} />
                        <label for="one-off">Recurrent Shift</label>
                    </div>
                </div>
            <div>
                {date ? <div className="days-section">
                            <ul className="day-list">
                                <li>S</li>
                                <li>M</li>
                                <li>T</li>
                                <li>W</li>
                                <li>T</li>
                                <li>F</li>
                                <li>S</li>
                            </ul>
                        </div> : false
                }
            </div>
            </div>
            <div className="toggle-btn">
                <div className="switch">
                    <input id="switch-1" type="checkbox" class="switch-input" />
                    <label for="switch-1" className="switch-label">Switch</label>
                </div>
                <label for="one-off">Alarm on, toggle to turn off</label>
            </div>
            <div>
            <button className="btn create-btn">Create</button>
            <button className="btn cancel-btn">Cancel</button>
            </div>
                    </div>
                </div>
            </form>
        )}
        
    </div>
     );
}
 
export default CreateShift;