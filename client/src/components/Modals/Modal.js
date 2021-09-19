import React from "react";
import { GrFormClose } from "react-icons/gr";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import "./Modals.css";

const Modal = () => {
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
            <p className="text-sm text-black">Department</p>
            <div className="relative bg-gray-100 mt-3 p-2 w-48 h-2.375 rounded flex justify-end">
              <FiChevronDown
                style={{
                  cursor: "pointer",
                }}
              />
            </div>
          </div>
          <div className="">
            <p className="text-sm text-black">Date</p>
            <div className="relative bg-gray-100 mt-3 py-1 px-2 w-36 h-2.375 rounded flex justify-between items-center">
              <div></div>
              <div className="">
                <FiChevronUp
                  style={{
                    fontSize: ".75rem",
                    cursor: "pointer",
                  }}
                />
                <FiChevronDown
                  style={{
                    fontSize: ".75rem",
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-sm text-black">Employee</p>
          <div className="relative bg-gray-100 mt-3 p-2 px-3 w-88 h-2.375 rounded flex justify-end">
            <FiChevronDown
              style={{
                cursor: "pointer",
              }}
            />
          </div>
        </div>

        <div className="flex justify-between items-center mt-4 w-full">
          <div className="">
            <p className="text-sm text-black">Start Time</p>
            <div className="relative py-1 h-2.375 flex">
              <div className="text-black font-bold text-lg mr-2">09:00am</div>
              <div className="font-bold">
                <FiChevronUp
                  style={{
                    fontSize: ".75rem",
                    cursor: "pointer",
                    color: "#00B87C",
                    fontWeight: "bold",
                  }}
                />
                <FiChevronDown
                  style={{
                    fontSize: ".75rem",
                    cursor: "pointer",
                    color: "#00B87C",
                  }}
                />
              </div>
            </div>
          </div>

          <div className="">
            <p className="text-sm text-black">End</p>
            <div className="relative py-1 h-2.375 flex">
              <div className="text-black font-bold text-lg mr-2">04:00pm</div>
              <div className="">
                <FiChevronUp
                  style={{
                    fontSize: ".75rem",
                    cursor: "pointer",
                    color: "#00B87C",
                  }}
                />
                <FiChevronDown
                  style={{
                    fontSize: ".75rem",
                    cursor: "pointer",
                    color: "#00B87C",
                  }}
                />
              </div>
            </div>
          </div>

          <div className="">
            <p className="text-sm text-black">Duration</p>
            <div className="relative py-1 h-2.375 flex">
              <p className="text-black font-bold text-lg">6 hours</p>
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
          <div className="flex mb-3">
            <div className="ml-1 mr-5">
              <input type="checkbox" checked className='m-0' />
              <label>One-Off Shift</label>
            </div>
            <div>
              <input type="checkbox"></input>
              <label>Recurrent Shift</label>
            </div>
          </div>
          <div className="flex w-full m">
            <label for="toggleB" className="flex items-center cursor-pointer">
              <div className="relative">
                <input type="checkbox" id="toggleB" className="sr-only" />

                <div className="block bg-green-500 w-10 h-6 rounded-full"></div>

                <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"></div>
              </div>

              <div className="text-xs italic ml-4 text-gray-700 font-medium">
                Alarms on, toggle to turn off
              </div>
            </label>
          </div>
          <div className="flex mt-5">
            <button className="p-3 w-36 bg-green-400 rounded text-white mr-5">
              Create
            </button>
            <button className="p-3 w-36  rounded  text-red-500 border-solid border-2 border-red-500 ">
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