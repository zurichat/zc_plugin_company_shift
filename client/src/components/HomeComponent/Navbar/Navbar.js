import React from "react";
import peopleOfBrooklyn from "../../../assets/images/People of Brooklyn Avatar.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-items">
        <div className="search-box">
          <div className="search">
            <input type="search" placeholder="Search here" name="" id="" />
            <i classNameName="bx bx-search"></i>
          </div>
        </div>
        <div className="profile-content">
          <div className="nav-profile">
            <div className="nav-profile-details">
              <i className="bx bx-cog"></i>
              <img src={peopleOfBrooklyn} alt={peopleOfBrooklyn} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
