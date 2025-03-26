import React from "react";
import "../styles/Sidebar.css";

const Sidebar: React.FC = () => {
    return(
        <div className="sidebar">
            <h2 className="sidebar-title">WIN</h2>
            <ul className="sidebar-menu">
                <li>📌 Dispositivos</li>
                <li>⚙️ Configuración</li>
                <li>🔍 Monitorización</li>
            </ul>
        </div>
    );
};

export default Sidebar;