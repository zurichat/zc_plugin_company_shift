import React from "react";
import { GrFormClose } from "react-icons/gr";
// import { FiChevronDown } from "react-icons/fi";
import { GoPrimitiveDot } from "react-icons/go";
// import shiftLogo from "../../assets/Vector.png";
// import userLogo from "../../assets/Group.png";
import profileImage from "../../assets/profile (8).png";
import sunrise from "../../assets/default1.png";
import sunset from "../../assets/default2.png";
import sun from "../../assets/default3.png";
import "./Modals.css";

const Modall = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="lg:max-w-lg md:max-w-md sm:max-w-sm mx-auto">
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
          className="px-6 py-8 max-w-lg max-h-lg mx-auto sm:mx-auto shadow-md flex flex-col"
          style={{ background: "#FAFAFA" }}
        >
          <div className="header flex justify-between items-center mb-5">
            <div className="profile">
              <div className="profile-image mr-2">
                <img
                  src={profileImage}
                  alt={profileImage}
                  className="rounded-full"
                />
              </div>
              <div className="profile-details">
                <h2 className="text-2xl leading-8 font-medium">Abu Emmanuel</h2>
                <p className="text-base leading-4" style={{ color: "#999999" }}>
                  Frontend Developer
                </p>
                <div
                  className="text-xs flex items-center mt-1 font-bold"
                  style={{ color: "#00AF5B" }}
                >
                  <span>
                    <GoPrimitiveDot />
                  </span>
                  <span>On Duty</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <button className="p-3 w-36 bg-green-500 rounded text-white mb-3">
                Message
              </button>
              <span className="text-xs font-bold text-black">View shifts</span>
            </div>
          </div>
          <div className="tab flex flex-col">
            <div className="tab-heading font-xs cursor-pointer mb-5">
              <span className="py-5 mr-3 hover:text-green-500 hover:border-b-4 hover:border-green-500">
                Profile
              </span>
              <span className="py-5 hover:text-green-500 hover:border-b-4 hover:border-green-500">
                Timesheet
              </span>
            </div>
            <div className="tab-header flex justify-between items-center mb-5">
              <h3 className="text-md font-bold text-black">Timesheet</h3>
              <button className="p-2 w-24 bg-blue-400 rounded text-white mb-3">
                Download
              </button>
            </div>
            <div className="tab-content">
              <table>
                <colgroup span="4"></colgroup>
                <tr
                  className="flex"
                  style={{ background: "rgba(232, 240, 255, 0.3" }}
                >
                  <th className="w-24 h-16 text-xs flex items-center">Date</th>
                  <th className="w-28 h-16 text-xs flex items-center">
                    Shift Time
                  </th>
                  <th className="w-44 h-16 text-xs flex items-center">
                    Status
                  </th>
                  <th className="h-16 text-xs flex items-center">
                    Hours Tracked
                  </th>
                </tr>
                <tr className="flex items-center justify-content">
                  <td className="w-24 h-16 text-xs flex items-center">
                    24 Aug 2021
                  </td>
                  <td className="flex items-center w-28 h-16 text-xs">
                    <img src={sunrise} alt={sunrise} />
                    <span className="mx-2">Morning</span>
                  </td>
                  <td className="w-44 text-xs h-16">
                    <div className="flex flex-col bg-green-100 rounded w-40 text-xs py-2 px-3 h-14">
                      <div className="shift-status flex justify-between items-center font-bold mb-2">
                        <span>Shift</span>
                        <div
                          className="text-xs flex items-center font-bold"
                          style={{ color: "#00AF5B" }}
                        >
                          <span>
                            <GoPrimitiveDot />
                          </span>
                          <span>On Duty</span>
                        </div>
                      </div>
                      <div className="shift-duration">
                        <span>9am - 1pm</span>
                      </div>
                    </div>
                  </td>
                  <td className="w-28 h-16 text-xs flex items-center">
                    5hr 30min
                  </td>
                </tr>
                <tr className="flex items-center justify-content">
                  <td className="w-24 h-16 text-xs flex items-center">
                    24 Aug 2021
                  </td>
                  <td className="flex items-center w-28 h-16 text-xs">
                    <img src={sunset} alt={sunset} />
                    <span className="mx-2">Evening</span>
                  </td>
                  <td className="w-44 text-xs h-16">
                    <div className="flex flex-col bg-red-100 rounded w-40 text-xs py-2 px-3 h-14">
                      <div className="shift-status flex justify-between items-center font-bold mb-2">
                        <span>Shift</span>
                        <div
                          className="text-xs flex items-center font-bold"
                          style={{ color: "#FF4550" }}
                        >
                          <span>
                            <GoPrimitiveDot />
                          </span>
                          <span>Ended Shift</span>
                        </div>
                      </div>
                      <div className="shift-duration">
                        <span>5pm - 9pm</span>
                      </div>
                    </div>
                  </td>
                  <td className="w-28 h-16 text-xs flex items-center">
                    2hr 30min
                  </td>
                </tr>
                <tr className="flex items-center justify-content">
                  <td className="w-24 h-16 text-xs flex items-center">
                    26 Aug 2021
                  </td>
                  <td className="flex items-center w-28 h-16 text-xs">
                    <img src={sun} alt={sun} />
                    <span className="mx-2">Afternoon</span>
                  </td>
                  <td className="w-44 text-xs h-16">
                    <div className="flex flex-col bg-red-100 rounded w-40 text-xs py-2 px-3 h-14">
                      <div className="shift-status flex justify-between items-center font-bold mb-2">
                        <span>Shift</span>
                        <div
                          className="text-xs flex items-center font-bold"
                          style={{ color: "#FF4550" }}
                        >
                          <span>
                            <GoPrimitiveDot />
                          </span>
                          <span>Ended Shift</span>
                        </div>
                      </div>
                      <div className="shift-duration">
                        <span>1am - 6pm</span>
                      </div>
                    </div>
                  </td>
                  <td className="w-28 h-16 text-xs flex items-center">2hr</td>
                </tr>
                <tr className="flex items-center justify-content">
                  <td className="w-24 h-16 text-xs flex items-center">
                    27 Aug 2021
                  </td>
                  <td className="flex items-center w-28 h-16 text-xs">
                    <img src={sunset} alt={sunset} />
                    <span className="mx-2">Evening</span>
                  </td>
                  <td className="w-44 text-xs h-16">
                    <div className="flex flex-col bg-red-100 rounded w-40 text-xs py-2 px-3 h-14">
                      <div className="shift-status flex justify-between items-center font-bold mb-2">
                        <span>Shift</span>
                        <div
                          className="text-xs flex items-center font-bold"
                          style={{ color: "#FF4550" }}
                        >
                          <span>
                            <GoPrimitiveDot />
                          </span>
                          <span>Ended Shift</span>
                        </div>
                      </div>
                      <div className="shift-duration">
                        <span>5am - 9pm</span>
                      </div>
                    </div>
                  </td>
                  <td className="w-28 h-16 text-xs flex items-center">4hr</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modall;
