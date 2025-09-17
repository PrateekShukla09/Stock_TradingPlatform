import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfiledropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfiledropdownOpen);
  };
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src={`/logo.png?v=1`} style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(5)}
            >
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div
          className="profile"
          style={{ position: "relative", cursor: "pointer" }}
        >
          <div className="avatar">ZU</div>
          <p
            className="username"
            onClick={handleProfileClick}
            style={{ cursor: "pointer" }}
          >
            {user ? user.username : "USERID"}
          </p>

          {isProfiledropdownOpen && (
            <div
              className="dropdown-menu"
              style={{
                position: "absolute",
                top: "40px",
                right: "0",
                backgroundColor: "#fff",
                border: "1px solid #ccc",
                borderRadius: "4px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                zIndex: 1000,
                padding: "10px",
              }}
              onClick={(e) => e.stopPropagation()} 
            >
              <button
                onClick={(e) => {
                e.stopPropagation();
                window.location.href = "http://localhost:3000";
              }}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "8px 12px",
                  fontSize: "14px",
                  width: "100%",
                  textAlign: "left",
                }}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
