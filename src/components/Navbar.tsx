import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/logo.png";

export const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <img src={logo} alt="Win" />
      </div>

      {/* Menú */}
      <ul className="navbar-menu">
        <li>
          <Link to="/home/overview">Overview</Link>
        </li>
        <li>
          <Link to="/home/devices">Devices</Link>
        </li>
        <li>
          <Link to="/home/faults">Faults</Link>
        </li>

        {/* Admin */}
        <li className="dropdown">
          <span>Admin ▼</span>
          <ul className="dropdown-menu">
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
        </li>
      </ul>

      {/* Botón de Cerrar Sesión */}
      <div className="navbar-logout">
        <Link to="/">Cerrar Sesión</Link>
      </div>
    </nav>
  );
};

export default Navbar;
