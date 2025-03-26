import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export const Navbar: React.FC = () => {
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  const toggleAdminMenu = () => {
    setIsAdminOpen(!isAdminOpen);
  };

  return (
    <nav className="navbar">
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
        <li>
          <Link to="/">Cerrar Sesión</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
