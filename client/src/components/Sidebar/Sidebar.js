import React from "react";
import logo from '../../assets/images/LOGO.png'
import peopleOfBrooklyn from '../../assets/images/People of Brooklyn Avatar.png'

import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="side-bar">
      <div className="logo-content">
        <div className="logo">
          <div className="logo-name">
            <img src={logo} alt={logo} />
          </div>
        </div>
      </div>
      <ul className="side-bar-list">
        <li>
          <a href="/">
            <i className="bx bxs-message-square-dots"></i>
            <span className="links-name">Thread</span>
          </a>
        </li>
        <li>
          <a href="/">
            <i className="bx bx-at"></i>
            <span className="links-name">Mentions & Reactions</span>
          </a>
        </li>
        <li>
          <a href="/">
            <i className="bx bx-chat"></i>
            <span className="links-name">All DM's</span>
          </a>
        </li>

        <li>
          <a href="/">
            <i className="bx bxs-layer-plus"></i>
            <span className="links-name">Integrate</span>
          </a>
        </li>

        <ul className="dropdown-list show" id="myDropdown">
          <li className="dropdown-list-items">
            <a href="/">
              <i className="bx bx-chair"></i>
              <span className="dropdown-list-items-name">lounge</span>
            </a>
          </li>
          <li className="dropdown-list-items">
            <a href="/">
              <i className="bx bx-hash"></i>
              <span className="dropdown-list-items-name">shift management</span>
            </a>
          </li>
          <li className="dropdown-list-items">
            <a href="/">
              <i className="bx bxs-shopping-bag-alt"></i>
              <span className="dropdown-list-items-name">meeting room</span>
            </a>
          </li>
          <li className="dropdown-list-items">
            <a href="/">
              <i className="bx bx-music"></i>
              <span className="dropdown-list-items-name">music room</span>
            </a>
          </li>
          <li className="dropdown-list-items">
            <a href="/">
              <i className="bx bxs-user-detail"></i>
              <span className="dropdown-list-items-name">conference room</span>
            </a>
          </li>
        </ul>

        <li className="dropdown-menu">
          <a href="/">
            <i className="bx bx-chevron-down"></i>
            <span className="links-name">Channels</span>
            <i className="bx bx-plus-circle"></i>
          </a>
        </li>

        <ul className="dropdown-list show" id="myDropdown">
          <li className="dropdown-list-items">
            <a href="/">
              <i className="bx bx-hash"></i>
              <span className="dropdown-list-items-name">announcement</span>
            </a>
          </li>
          <li className="dropdown-list-items">
            <a href="/">
              <i className="bx bx-hash"></i>
              <span className="dropdown-list-items-name">designers</span>
            </a>
          </li>
          <li className="dropdown-list-items">
            <a href="/">
              <i className="bx bx-lock-alt"></i>
              <span className="dropdown-list-items-name">stage 4</span>
            </a>
          </li>
        </ul>

        <li className="dropdown-menu">
          <a href="/">
            <i className="bx bx-chevron-down"></i>
            <span className="links-name">Direct Messages</span>
            <i className="bx bx-plus-circle"></i>
          </a>
        </li>

        <ul className="dropdown-list">
          <li className="dropdown-list-items">
            <div className="profile-content">
              <div className="profile">
                <div className="profile-details">
                  <img src={peopleOfBrooklyn} alt={peopleOfBrooklyn} />
                  <div className="name">Miles Esther</div>
                </div>
                <div className="profile-details">
                  <img src={peopleOfBrooklyn} alt={peopleOfBrooklyn} />
                  <div className="name">Cooper Krisitin</div>
                </div>
                <div className="profile-details">
                  <img src={peopleOfBrooklyn} alt={peopleOfBrooklyn} />
                  <div className="name">Flores Juanita</div>
                </div>
                <div className="profile-details">
                  <img src={peopleOfBrooklyn} alt={peopleOfBrooklyn} />
                  <div className="name">Black Mavin</div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default Sidebar;
