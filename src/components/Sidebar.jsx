import React, { useState } from "react";
import logo from "../assets/logo/admin-img.png";
import MenuItem from "./MenuItem";

function Sidebar() {
  const [inactive, setInactive] = useState(true);
  const menuItems = [
    {
      name: "Entry/Update",
      to: "/home",
      iconClassName: "fa-solid fa-pen-to-square",
      inactive: { inactive },
    },
    {
      name: "FeedLog",
      to: "/home",
      iconClassName: "fa-solid fa-utensils",
      inactive: { inactive },
    },
    {
      name: "Pricing Table",
      to: "/home",
      iconClassName: "fa-solid fa-hand-holding-dollar",
      inactive: { inactive },
    },
  ];

  return (
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
      <div className="top-section">
        {!inactive ? (
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        ) : (
          <div className="hambar" onClick={() => setInactive(!inactive)}>
            <i className="fa-solid fa-bars" />
          </div>
        )}
      </div>

      <div className="divider" />

      <div className="main-menu">
        <ul>
          {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              to={menuItem.to}
              iconClassName={menuItem.iconClassName}

            />
          ))}
          {/* <li>
            <a className="menu-item" href="/home">
              <div className="menu-icon">
                <i class="fa-solid fa-pen-to-square" />
              </div>
              {!inactive && <span className="menu-text">Entry/Update</span>}
            </a>
          </li>

          <li>
            <a className="menu-item" href="/home">
              <div className="menu-icon">
                <i class="fa-solid fa-utensils" />
              </div>
              {!inactive && <span className="menu-text">FeedLog</span>}
            </a>
          </li>

          <li>
            <a className="menu-item" href="/home">
              <div className="menu-icon">
                <i class="fa-solid fa-hand-holding-dollar" />
              </div>
              {!inactive && <span className="menu-text">Pricing Table</span>}
            </a>
          </li> */}
        </ul>
      </div>

      <div className="divider" />
      <div className="temp" />
      <div className="temp" />

      <div className="request-history">
        <div className="calendar-icon">
          <i class="fa-solid fa-calendar-days" />
        </div>
        {!inactive && <span className="menu-text">Request History</span>}
      </div>

      <div className="temp" />
      <div className="divider" />
      <div className="temp" />

      <div
        className="toggle-menu-btn-arrow"
        onClick={() => setInactive(!inactive)}
      >
        <i class={`fa-solid fa-circle-arrow-${inactive ? "right" : "left"}`} />
      </div>

      <div className="side-menu-footer">
        <p>CopyRight &copy; 2022-23 </p>
      </div>
      {/* <div className="temp" /> */}
    </div>
  );
}

export default Sidebar;
