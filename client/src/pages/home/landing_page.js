import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/zuri-logo.svg";
import company from "../../assets/company_shift.png";
import "./landing_page.css";

const Landpage = () => {
  return (
    <div className="container-fluid">
      <div className="cs-left-column">
        <div className="cs-logo">
          <img src={logo} className="cs-logo_img" alt="Employee Shift Logo" />
        </div>
        <div className="cs-description">
          <h1 className="cs-head">Shift Management Simplified - Task 18</h1>
          <p className="cs-built">Bulit by team curies</p>
          <Link to="/dashboard" className="cs-button">
            Get Started
          </Link>
        </div>
      </div>

      <div className="cs-right-column">
        <img src={company} className="cs-company_img" alt="Employee Shift" />
      </div>
    </div>
  );
};

export default Landpage;
