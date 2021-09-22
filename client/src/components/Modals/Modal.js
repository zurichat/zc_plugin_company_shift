import React, { useState } from "react";
import { GrFormClose } from "react-icons/gr";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlinePlusCircle } from "react-icons/ai";
import shiftLogo from "../../assets/Vector.png";
import userLogo from "../../assets/Group.png";
import "./Modals.css";

const Modal = () => {
  const [department, setDepartment] = useState(false)
  const [employee, setEmployee] = useState(false)
  const showDepartment = () => setDepartment(!department)
  const showEmployee = () => setEmployee(!employee)

  return (
    <div className="p-8 flex items-center justify-center md:h-screen">
      <div className="mt-8 max-w-xs lg:max-w-lg md:max-w-md mx-auto px-8 md:px-0">
        <div className="mb-2 flex justify-end item-end">
          <GrFormClose
            className="rounded-full bg-white shadow-md"
            style={{
              fontSize: "1.5rem",
              cursor: "pointer",
            }}
          />
        </div>
        <div
          className="px-4 py-10 md:px-8 md:py-6 lg:px-20 lg:py-8 md:max-w-lg max-h-sm mx-auto sm:mx-auto shadow-md flex flex-col"
          style={{ background: "#FAFAFA" }}
        >
          <h1 className="md:text-3xl leading-10 mb-5 font-bold">
            Create a new Shift
          </h1>
          <div className="md:flex md:justify-between items-start">
            <div className="mb-5 md:mr-4">
              <p className="text-sm text-black">Date</p>
              <div className="relative bg-gray-100 py-3 px-2 sm-w-full md:w-48 h-2.375 rounded flex justify-between items-center">
                <div className="text-gray-500 font-medium text-sm">
                  Mon, August 28, 2021
                </div>
                <div className="">
                  <img
                    src={shiftLogo}
                    alt={shiftLogo}
                    style={{
                      fontSize: ".75rem",
                      cursor: "pointer",
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="">
              <p className="text-sm text-black">Shift Time</p>
              <div className="bg-gray-100 py-3 px-2 md:w-44 h-2.375 flex justify-between items-center border-2 rounded-md border-gray-500">
                <div className="text-gray-500 font-medium text-sm mr-2">
                  Morning Shift
                </div>
                <div className="font-bold">
                  <FiChevronDown
                    style={{
                      fontSize: "1rem",
                      cursor: "pointer",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="md:flex justify-between items-center mt-5">
            <div className="sm:mb-4 md:mr-4">
              <div className="md:w-48 h-2.375 py-3 px-2 flex justify-between items-center">
                <div className="text-black font-bold text-sm">09:00am</div>
                <div className="image">
                  <img
                    src={shiftLogo}
                    alt={shiftLogo}
                    style={{
                      fontSize: ".75rem",
                      cursor: "pointer",
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="md:mr-4">
              <div className="md:w-48 h-2.375 py-3 px-2 flex justify-between items-center">
                <div className="text-black font-bold text-sm">12:00pm</div>
                <div className="">
                  <img
                    src={shiftLogo}
                    alt={shiftLogo}
                    style={{
                      fontSize: ".75rem",
                      cursor: "pointer",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 relative w-full h-2.375 md:flex justify-between items-center">
            <div className="mb-5 md:mb-0 md:mr-4">
              <div className="relative bg-white py-3 px-2 md:w-48 h-2.375 rounded flex justify-between items-center mb-3">
                <div className="text-gray-500 font-medium text-sm mr-2">
                  Department
                </div>
                <FiChevronDown onClick={showDepartment}
                  style={{
                    cursor: "pointer",
                  }}
                />
              </div>
              <div className={department ? 'absolute z-50 dropdown-menu w-full md:w-48 bg-white shadow-md text-sm' : 'hidden'}>
                  <div className='dropdown-title flex justify-between items-center mb-3 border-b-2 p-2'>
                    <h3 className='font-bold text-black'>All Departments</h3>
                    <label for="toggleB" className="flex items-center cursor-pointer">
                      <div className="relative">
                        <input type="checkbox" id="toggleB" className="sr-only" />
                        <div className="block bg-gray-200 w-6 h-4 rounded-full"></div>
                        <div className="dot absolute left-1 top-1 bg-white w-2 h-2 rounded-full transition"></div>
                      </div>
                    </label>
                  </div>
                  <div className='dropdown-list'>
                    <div className='dropdown-list-items flex justify-between items-center p-2'>
                      <h4>Field department</h4>
                      <span className='text-green-500 text-lg'><AiOutlinePlusCircle /></span>
                    </div>
                    <div className='dropdown-list-items flex justify-between items-center p-2'>
                      <h4>Human Resources</h4>
                      <span className='text-green-500 text-lg'><AiOutlinePlusCircle /></span>
                    </div>
                    <div className='dropdown-list-items flex justify-between items-center p-2'>
                      <h4>IT</h4>
                      <span className='text-green-500 text-lg'><AiOutlinePlusCircle /></span>
                    </div>
                    <div className='dropdown-list-items flex justify-between items-center p-2'>
                      <h4>Engineering</h4>
                      <span className='text-green-500 text-lg'><AiOutlinePlusCircle /></span>
                    </div>
                  </div>
              </div>
            </div>

            <div className="">
              <div className="relative bg-white py-3 px-2 md:w-48 h-2.375 mb-3 rounded flex justify-between items-center">
                <div className="text-gray-200 font-medium text-sm md:mr-2">
                  Add Employee
                </div>
                <div className="">
                  <img
                    src={userLogo}
                    alt={userLogo}
                    style={{
                      fontSize: ".75rem",
                      cursor: "pointer",
                    }}
                    onClick={showEmployee}
                  />
                </div>
              </div>
              <div className={employee ? 'absolute z-50 dropdown-menu w-full md:w-48 bg-white shadow-md text-sm' : 'hidden'}>
                  <div className='dropdown-title flex justify-between items-center mb-3 border-b-2 p-2'>
                    <h3 className='font-bold text-black'>All Employees</h3>
                    <label for="toggleB" className="flex items-center cursor-pointer">
                      <div className="relative">
                        <input type="checkbox" id="toggleB" className="sr-only" />
                        <div className="block bg-gray-200 w-6 h-4 rounded-full"></div>
                        <div className="dot absolute left-1 top-1 bg-white w-2 h-2 rounded-full transition"></div>
                      </div>
                    </label>
                  </div>
                  <div className='dropdown-list'>
                    <div className='dropdown-list-items flex justify-between items-center p-2'>
                      <h4>Ezechukwu Lots</h4>
                      <span className='text-green-500 text-lg'><AiOutlinePlusCircle /></span>
                    </div>
                    <div className='dropdown-list-items flex justify-between items-center p-2'>
                      <h4>Olakunle Fasasi</h4>
                      <span className='text-green-500 text-lg'><AiOutlinePlusCircle /></span>
                    </div>
                    <div className='dropdown-list-items flex justify-between items-center p-2'>
                      <h4>Eniola Badmus</h4>
                      <span className='text-green-500 text-lg'><AiOutlinePlusCircle /></span>
                    </div>
                    <div className='dropdown-list-items flex justify-between items-center p-2'>
                      <h4>Simon Peters</h4>
                      <span className='text-green-500 text-lg'><AiOutlinePlusCircle /></span>
                    </div>
                    <div className='dropdown-list-items flex justify-between items-center p-2'>
                      <h4>Emmanuel Abu</h4>
                      <span className='text-green-500 text-lg'><AiOutlinePlusCircle /></span>
                    </div>
                    <div className='dropdown-list-items flex justify-between items-center p-2'>
                      <h4>Dame Omon</h4>
                      <span className='text-green-500 text-lg'><AiOutlinePlusCircle /></span>
                    </div>
                    <div className='dropdown-list-items flex justify-between items-center p-2'>
                      <h4>Kamal Momoh</h4>
                      <span className='text-green-500 text-lg'><AiOutlinePlusCircle /></span>
                    </div>
                    <div className='dropdown-list-items flex justify-between items-center p-2'>
                      <h4>Simon Peters</h4>
                      <span className='text-green-500 text-lg'><AiOutlinePlusCircle /></span>
                    </div>
                  </div>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-black text-lg font-bold uppercase leading-6 mb-3">
              Shift mode
            </h3>
            <p
              className="text-xs leading-4 mb-3 text-gray-700 font-medium"
              style={{ color: "rgba(0, 0, 0, 0.67)" }}
            >
              Choose Recurrent if you want to repeat this shift and for how
              long.
            </p>
            <div className="md:flex mb-3 text-gray-500">
              <div className="md:ml-1 md:mr-5">
                <input type="checkbox" className="m-0" />
                <label>One-Off Shift</label>
              </div>
              <div>
                <input type="checkbox"></input>
                <label>Recurrent Shift</label>
              </div>
            </div>
            <div className="flex mt-5">
              <button className="p-3 w-36 bg-green-400 rounded text-white mr-5">
                Create
              </button>
              <button className="p-3 w-36 rounded text-red-500 border-solid border-2 border-red-500 ">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
