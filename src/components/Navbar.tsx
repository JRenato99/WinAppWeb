import React from "react";
import "../styles/Navbar.css";

export const Navbar: React.FC = () => {
  return (
    <div className="navbar">
        <div className="tabs">
            <span>OverView</span>
            <span>Devices</span>
            <span>Faults</span>
            <span>Admin</span>
        </div>
        <div className="user-session">            
            admin<span className="logout">Cerrar Sesión</span>
        </div>
    </div>
  )
}
