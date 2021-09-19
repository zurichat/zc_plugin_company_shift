import React from "react";
import { GrFormClose } from "react-icons/gr";
import { FiChevronDown } from "react-icons/fi";
import shiftLogo from '../../assets/Vector.png'
import userLogo from '../../assets/Group.png'
import "./Modals.css";

const ModalTwo = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
    <div className="lg:max-w-lg md:max-w-md sm:max-w-sm mx-auto">
      <div className="mb-2 flex justify-end item-end">
        <GrFormClose className='rounded-full bg-white shadow-md'
          style={{
            fontSize: "1.5rem",
            cursor: "pointer",
          }}
        />
      </div>
      <div
        className="px-20 py-8 max-w-lg max-h-sm mx-auto sm:mx-auto shadow-md flex flex-col"
        style={{ background: "#FAFAFA" }}
      >
        <h1 className="text-3xl leading-10 mb-5 font-bold">
          Create a new Shift
        </h1>
        <div className="flex justify-between items-start">
          <div className="mr-4">
            <p className="text-sm text-black">Date</p>
            <div className="relative bg-gray-100 py-3 px-2 w-48 h-2.375 rounded flex justify-between items-center">
              <div className='text-gray-500 font-medium text-sm'>Mon, August 28, 2021</div>
              <div className="">
                <img src={shiftLogo} alt={shiftLogo}
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
            <div className="bg-gray-100 py-3 px-2 w-44 h-2.375 flex justify-between items-center border-2 rounded-md border-gray-500">
              <div className="text-gray-500 font-medium text-sm mr-2">Morning Shift</div>
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

        <div className="flex justify-between items-center mt-8">
        <div className="mr-4">
              <div className="w-48 h-2.375 py-3 px-2 flex justify-between items-center">
                <div className="text-black font-bold text-sm">09:00am</div>
                <div className="">
                  <img src={shiftLogo} alt={shiftLogo}
                  style={{
                    fontSize: ".75rem",
                    cursor: "pointer",
                  }}
                  />
                </div>
              </div>
              </div>

            <div className="mr-4">  
              <div className="w-48 h-2.375 py-3 px-2 flex justify-between items-center">
                <div className="text-black font-bold text-sm">12:00pm</div>
                <div className="">
                    <img src={shiftLogo} alt={shiftLogo}
                    style={{
                      fontSize: ".75rem",
                      cursor: "pointer",
                    }}
                  />
                </div>
              </div>
            </div>
        </div>


        <div className="mt-4 relative w-full h-2.375 flex justify-between items-center">
        <div className='mr-4'>
        <div className="relative bg-white py-3 px-2 w-48 h-2.375 rounded flex justify-between items-center">
        <div className="text-gray-500 font-medium text-sm mr-2">Department</div>
           <FiChevronDown
             style={{
               cursor: "pointer",
             }}
           />
         </div>
        </div>

        <div className=''>
         <div className="relative bg-white py-3 px-2 w-48 h-2.375 rounded flex justify-between items-center">
         <div className="text-gray-200 font-medium text-sm mr-2">Add Employee</div>
         <div className="">
         <img src={userLogo} alt={userLogo}
         style={{
           fontSize: ".75rem",
           cursor: "pointer",
         }}
       />
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
            Choose Recurrent if you want to repeat this shift and for how long.
          </p>
          <div className="flex mb-3 text-gray-500">
            <div className="ml-1 mr-5">
              <input type="checkbox" className='m-0' />
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

export default ModalTwo;