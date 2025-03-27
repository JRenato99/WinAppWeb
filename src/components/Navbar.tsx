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
          <Link to="/home/overview">Resumen</Link>
        </li>
        <li>
          <Link to="/home/devices">Dispositivos</Link>
        </li>
        <li>
          <Link to="/home/faults">Fallos</Link>
        </li>

        {/* Admin */}
        <li className="dropdown">
          <span>Admin ▼</span>
          <ul className="dropdown-menu">
            <li>
              <Link to="/home/admin/presets">Preajustes</Link>
            </li>
            <li>
              <Link to="/home/admin/provisions">Disposiciones</Link>
            </li>
            <li>
              <Link to="/home/admin/files">Archivos</Link>
            </li>
            <li>
              <Link to="/home/admin/config">Configuracion</Link>
            </li>
            <li>
              <Link to="/home/admin/permissions">Permisos</Link>
            </li>
            <li>
              <Link to="/home/admin/users">Usuarios</Link>
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
