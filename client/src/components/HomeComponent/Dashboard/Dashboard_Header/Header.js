import React from "react";
import ellipse2 from "../../../../assets/images/Ellipse 2.png";
import ellipse3 from "../../../../assets/images/Ellipse 3 (1).png";
import ellipse4 from "../../../../assets/images/Ellipse 4.png";
import ellipse5 from "../../../../assets/images/Ellipse 5.png";
import ellipse6 from "../../../../assets/images/Ellipse 6.png";
import profile from "../../../../assets/images/profile.png";
import "./Header.css";

const Header = () => {
  return (
    <div class="dashboard-header">
      <div class="dashboard-heading">
        <h1>Shift Management</h1>
        <div class="users-images">
          <img src={ellipse2} alt={ellipse2} />
          <img src={ellipse3} alt={ellipse3} />
          <img src={ellipse4} alt={ellipse4} />
          <img src={ellipse4} alt={ellipse5} />
          <img src={ellipse6} alt={ellipse6} />
        </div>
      </div>
      <div class="shift-profile">
        <div class="user-shift-profile">
          <div class="user-shift-profile-details">
            <div class="user-shift-close-icon">
              <i class="bx bx-x"></i>
            </div>
            <div class="user-shift-image">
              <img src={profile} alt={profile} />
            </div>
            <div class="user-shift-name">
              <h5>
                <a href="/">@Ademike</a>
                <span>from DevOp stack</span>
                <span>
                  duty <em>ENDS</em> in 5 mins
                </span>
              </h5>
              <span>Today August 26th</span>
            </div>
          </div>
        </div>
        <div class="shift-buttons">
          <button>
            <span>Swap shift</span>
            <i class="bx bx-chevron-down"></i>
          </button>
          <button>
            <span>Create a new shift</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
