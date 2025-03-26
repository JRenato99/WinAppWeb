import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/logo.png";

export const Navbar: React.FC = () => {
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  const toggleAdminMenu = () => {
    setIsAdminOpen(!isAdminOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Win" className="logo" />
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li>
            <Link to="/home/overview">Overview</Link>
          </li>
          <li>
            <Link to="/home/devices">Devices</Link>
          </li>
          <li>
            <Link to="/home/faults">Faults</Link>
          </li>
          <li className="admin-menu">
            <button onClick={toggleAdminMenu} className="admin-button">
              Admin
            </button>
            {isAdminOpen && (
              <ul className="dropdown">
                <li>
                  <Link to="/home/admin/presets">Presets</Link>
                </li>
                <li>
                  <Link to="/home/admin/provisions">Provisions</Link>
                </li>
                <li>
                  <Link to="/home/admin/files">Files</Link>
                </li>
                <li>
                  <Link to="/home/admin/config">Config</Link>
                </li>
                <li>
                  <Link to="/home/admin/permissions">Permissions</Link>
                </li>
                <li>
                  <Link to="/home/admin/users">Users</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
      <div className="navbar-rigth">
        <Link to="/">Cerrar Sesión</Link>
      </div>
    </nav>
  );
};

export default Navbar;
