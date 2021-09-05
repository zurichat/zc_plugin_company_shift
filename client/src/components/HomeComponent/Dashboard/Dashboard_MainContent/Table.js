import React from "react";
import profile1 from '../../../../assets/images/profile (1).png'
import profile2 from '../../../../assets/images/profile (2).png'
import profile3 from '../../../../assets/images/profile (3).png'
import profile4 from '../../../../assets/images/profile (4).png'
import profile5 from '../../../../assets/images/profile (5).png'
import ellipse3 from '../../../../assets/images/Ellipse 3.png'
import profile from '../../../../assets/images/profile.png'
import "./Table.css";

const Table = () => {
  return (
    <table>
      <colgroup span="7"></colgroup>
      <tr>
        <th colspan="1">Employee</th>
        <th>
          <h5>Mon</h5>
          <span>Aug 27</span>
        </th>
        <th>
          <h5>Tue</h5>
          <span>Aug 28</span>
        </th>
        <th>
          <h5>Wed</h5>
          <span>Aug 29</span>
        </th>
        <th>
          <h5>Thu</h5>
          <span>Aug 30</span>
        </th>
        <th>
          <h5>Fri</h5>
          <span>Aug 31</span>
        </th>
        <th>
          <h5>Sat</h5>
          <span>Sep 1</span>
        </th>
      </tr>

      <tr>
        <td>
          <div className="profile-content">
            <div className="profile">
              <div className="shift-profile-details">
                <img src={profile1} alt={profile1} />
                <div className="name">Abu Emmanuel</div>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="shifts">
            <div className="shift-status">
              <span>Shift</span>
              <h5 className="on-duty">
                <i className="bx bxs-circle"></i>
                <span>On Duty</span>
              </h5>
            </div>
            <div className="shift-duration">
              <span>9am - 5pm</span>
              <span>
                30 mins <em>left</em>
              </span>
            </div>
          </div>
        </td>
        <td>
          <div className="shifts" id="off-duty">
            <div className="shift-status">
              <span>Shift</span>
              <h5 className="off-duty">
                <i className="bx bxs-circle"></i>
                <span>Off Duty</span>
              </h5>
            </div>
            <div className="shift-duration">
              <span>9am - 5pm</span>
            </div>
          </div>
        </td>
        <td>
          <div className="shifts" id="off-duty">
            <div className="shift-status">
              <span>Shift</span>
              <h5 className="off-duty">
                <i className="bx bxs-circle"></i>
                <span>Off Duty</span>
              </h5>
            </div>
            <div className="shift-duration">
              <span>9am - 5pm</span>
            </div>
          </div>
        </td>
        <td>
          <div className="shifts" id="off-duty">
            <div className="shift-status">
              <span>Shift</span>
              <h5 className="off-duty">
                <i className="bx bxs-circle"></i>
                <span>Off Duty</span>
              </h5>
            </div>
            <div className="shift-duration">
              <span>9am - 5pm</span>
            </div>
          </div>
        </td>
        <td>
          <div className="shifts" id="off-duty">
            <div className="shift-status">
              <span>Shift</span>
              <h5 className="off-duty">
                <i className="bx bxs-circle"></i>
                <span>Off Duty</span>
              </h5>
            </div>
            <div className="shift-duration">
              <span>9am - 5pm</span>
            </div>
          </div>
        </td>
        <td>
          <div className="shifts" id="off-duty">
            <div className="shift-status">
              <span>Shift</span>
              <h5 className="off-duty">
                <i className="bx bxs-circle"></i>
                <span>Off Duty</span>
              </h5>
            </div>
            <div className="shift-duration">
              <span>9am - 5pm</span>
            </div>
          </div>
        </td>
      </tr>

      <tr>
        <td>
          <div className="profile-content">
            <div className="profile">
              <div className="shift-profile-details">
                <img src={profile2} alt={profile2} />
                <div className="name">Dame Omon</div>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="shifts" id="await">
            <div className="shift-status">
              <span>Shift</span>
              <h5 className="awating">
                <i className="bx bxs-circle"></i>
                <span>Awaiting</span>
              </h5>
            </div>
            <div className="shift-duration">
              <span>9am - 5pm</span>
            </div>
          </div>
        </td>
        <td>
          <div className="shifts" id="off-duty">
            <div className="shift-status">
              <span>Shift</span>
              <h5 className="off-duty">
                <i className="bx bxs-circle"></i>
                <span>Off Duty</span>
              </h5>
            </div>
            <div className="shift-duration">
              <span>9am - 5pm</span>
            </div>
          </div>
        </td>
        <td></td>
        <td></td>
        <td>
          <div className="shifts" id="off-duty">
            <div className="shift-status">
              <span>Shift</span>
              <h5 className="off-duty">
                <i className="bx bxs-circle"></i>
                <span>Off Duty</span>
              </h5>
            </div>
            <div className="shift-duration">
              <span>9am - 5pm</span>
            </div>
          </div>
        </td>
        <td>
          <div className="shifts" id="off-duty">
            <div className="shift-status">
              <span>Shift</span>
              <h5 className="off-duty">
                <i className="bx bxs-circle"></i>
                <span>Off Duty</span>
              </h5>
            </div>
            <div className="shift-duration">
              <span>9am - 5pm</span>
            </div>
          </div>
        </td>
      </tr>

      <tr>
        <td>
          <div className="profile-content">
            <div className="profile">
              <div className="shift-profile-details">
                <img src={profile3} alt={profile3} />
                <div className="name">Ezechukwu Lota</div>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="shifts" id="ended">
            <div className="shift-status">
              <span>Shift</span>
              <h5 className="ended-shift">
                <i className="bx bxs-circle"></i>
                <span>Ended Shift</span>
              </h5>
            </div>
            <div className="shift-duration">
              <span>9am - 5pm</span>
            </div>
          </div>
        </td>
      </tr>

      <tr>
        <td>
          <div className="profile-content">
            <div className="profile">
              <div className="shift-profile-details">
                <img src={profile4} alt={profile4} />
                <div className="name">Folashade Olaiya</div>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="shifts">
            <div className="shift-status">
              <span>Shift</span>
              <h5 className="on-duty">
                <i className="bx bxs-circle"></i>
                <span>On Duty</span>
              </h5>
            </div>
            <div className="shift-duration">
              <span>9am - 5pm</span>
            </div>
          </div>
        </td>
      </tr>

      <tr>
        <td>
          <div className="profile-content">
            <div className="profile">
              <div className="shift-profile-details">
                <img src={profile5} alt={profile5} />
                <div className="name">Ogunlana Michael</div>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="shifts" id="await">
            <div className="shift-status">
              <span>Shift</span>
              <h5 className="awating">
                <i className="bx bxs-circle"></i>
                <span>Awaiting</span>
              </h5>
            </div>
            <div className="shift-duration">
              <span>9am - 5pm</span>
            </div>
          </div>
        </td>
      </tr>

      <tr>
        <td>
          <div className="profile-content">
            <div className="profile">
              <div className="shift-profile-details">
                <img src={ellipse3} alt={ellipse3} />
                <div className="name">Olakunle Fasasi</div>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="shifts" id="ended">
            <div className="shift-status">
              <span>Shift</span>
              <h5 className="ended-shift">
                <i className="bx bxs-circle"></i>
                <span>Ended Shift</span>
              </h5>
            </div>
            <div className="shift-duration">
              <span>9am - 5pm</span>
            </div>
          </div>
        </td>
      </tr>

      <tr>
        <td>
          <div className="profile-content">
            <div className="profile">
              <div className="shift-profile-details">
                <img src={profile} alt={profile} />
                <div className="name">Emmanuel Abu</div>
              </div>
            </div>
          </div>
        </td>
      </tr>

      <tr>
        <td>
          <div className="profile-content">
            <div className="profile">
              <div className="shift-profile-details">
                <img src={profile} alt={profile} />
                <div className="name">Emmanuel Abu</div>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </table>
  );
};

export default Table;
