import React from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/Homepage.css"; // Importamos el archivo css

export const HomePage: React.FC = () => {
    const navigate = useNavigate(); // Declaramos la variable navigate que contiene el hook useNavigate

    return (
        <div className="homepage-container">
            {/* Menú lateral*/}
            <aside className="sidebar">                
                <h2>WIN</h2>
                <ul>
                    <li>📡 Dispositivos</li>
                    <li>⚙️ Configuración</li>
                    <li>🔍 Monitorización</li>
                </ul>
            </aside>

            {/* Contenido principal */}
            <main className="main-content">
                <header>
                    <h1>Panel de Administración</h1>
                    <button onClick={() => navigate("/")}>Cerrar sesión</button>
                </header>
                <section>
                    <p>Bienvenido al sistema de gestión de dispositivos.</p>
                </section>
            </main>
        </div>
    );
};

export default HomePage;