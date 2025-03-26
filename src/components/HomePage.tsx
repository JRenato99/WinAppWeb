import React from "react";
import "./../styles/Homepage.css"; // Importamos el archivo css
//import Sidebar from "./Sidebar";
import { Navbar } from "./Navbar";
import { Dashboard } from "./Dashboard";

export const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <div className="main-content">
        <Navbar />
        <Dashboard />
      </div>
    </div>
  );
};

export default HomePage;
