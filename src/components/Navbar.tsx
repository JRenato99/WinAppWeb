import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/logo.png";

export const Navbar: React.FC = () => {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/home" className="navbar-logo">
          <img src={logo} alt="Win" />
        </Link>

        {/* Botón de menú para pantallas pequeñas */}
        <button
          className="navbar-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {/* Menú */}
        <ul className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
          <li>
            <Link to="/home/overview">Resumen</Link>
          </li>
          <li>
            <Link to="/home/devices">Dispositivos</Link>
          </li>
          <li>
            <Link to="/home/faults">Fallos</Link>
          </li>

          {/* Admin con hover */}

          <li
            className="admin-menu"
            onMouseEnter={() => setIsAdminOpen(true)}
            onMouseLeave={() => setIsAdminOpen(false)}
          >
            <span>Admin ▼</span>
            {isAdminOpen && (
              <ul className="dropdown">
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
            )}
          </li>
          {/* Botón de Cerrar Sesión */}
          <li className="logout">
            <Link to="/">Cerrar Sesión</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
