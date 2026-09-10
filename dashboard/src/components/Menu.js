import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const profileRef = useRef(null);

  const user = JSON.parse(localStorage.getItem("user"));

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      profileRef.current &&
      !profileRef.current.contains(event.target)
    ) {
      setIsProfileDropdownOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

 const handleLogout = (e) => {
  e.stopPropagation();

  console.log("LOGOUT BUTTON CLICKED");

  localStorage.removeItem("token");
  localStorage.removeItem("user");

  setIsProfileDropdownOpen(false);

  window.location.href = "https://trade-nest-frontend-peod.onrender.com/login";
};

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />

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
              to="funds"
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
              onClick={() => handleMenuClick(6)}
            >
              <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>

        <hr />
         <div className="profile-container" ref={profileRef}>
  <div className="profile" onClick={handleProfileClick}>
    <div className="avatar">
      {user?.username?.charAt(0).toUpperCase() || "U"}
    </div>

    <p className="username">
      {user?.username || "USERID"}
    </p>
  </div>

          {isProfileDropdownOpen && (
          <div className="profile-dropdown">
            <div className="profile-info">
              <p className="profile-username">
                {user?.username}
              </p>

              <p className="profile-email">
                {user?.email}
              </p>
            </div>

            <button type="button" onClick={handleLogout}>
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