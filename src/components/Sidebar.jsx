import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/admin-img.png";
import MenuItem from "./MenuItem";

export const menuItems = [
  {
    name: "Entry/Update",
    to: "/home/entry_update",
    iconClassName: "fa-solid fa-pen-to-square",
  },
  {
    name: "Feed Log",
    to: "/home/feed_log",
    iconClassName: "fa-solid fa-utensils",
  },
  {
    name: "Pricing Table",
    to: "/home/pricing_table",
    iconClassName: "fa-solid fa-hand-holding-dollar",
  },
];

function Sidebar(props) {
  const [inactive, setInactive] = useState(true);

  useEffect(
    (props2) => {
      props.onCollapse(inactive);
    },
    [inactive]
  );

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
          {/* {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              to={menuItem.to}
              iconClassName={menuItem.iconClassName}
              inactive= { inactive }
            />
          ))} */}
          <li>
            <Link className="menu-item" to="/home/entry_update">
              <div className="menu-icon">
                <i className="fa-solid fa-pen-to-square" />
              </div>
              {!inactive && <span className="menu-text">Entry/Update</span>}
            </Link>
          </li>

          <li>
            <Link className="menu-item" to="/home/feed_log">
              <div className="menu-icon">
                <i className="fa-solid fa-utensils" />
              </div>
              {!inactive && <span className="menu-text">FeedLog</span>}
            </Link>
          </li>

          <li>
            <Link className="menu-item" to="/home/pricing_table">
              <div className="menu-icon">
                <i className="fa-solid fa-hand-holding-dollar" />
              </div>
              {!inactive && <span className="menu-text">Pricing Table</span>}
            </Link>
          </li>
        </ul>
      </div>

      <div className="divider" />
      <div className="temp" />
      <div className="temp" />

      <Link className="request-history" to="/home/req_history">
        <div className="calendar-icon">
          <i className="fa-solid fa-calendar-days" />
        </div>
        {!inactive && <span className="menu-text">Request History</span>}
      </Link>

      <div className="temp" />
      <div className="divider" />
      <div className="temp" />

      <div
        className="toggle-menu-btn-arrow"
        onClick={() => setInactive(!inactive)}
      >
        <i
          className={`fa-solid fa-circle-arrow-${inactive ? "right" : "left"}`}
        />
      </div>

      <div className="side-menu-footer">
        <p>CopyRight &copy; 2022-23 </p>
      </div>
      {/* <div className="temp" /> */}
    </div>
  );
}

export default Sidebar;
