import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import RecuperarPassword from "./components/RecuperarPassword";
import CodigoVerificacion from "./components/CodigoVerificacion";
import Homepage from "./components/HomePage";
import Layout from "./components/Layout";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/recuperar-password" element={<RecuperarPassword/>}/>
                <Route path="/codigo-verificacion" element={<CodigoVerificacion/>}/>
                
                {/* Wrapping Homepage with layout to manage the slidebar */}
                <Route path="/home" element={<Layout><Homepage /></Layout>}/>
            </Routes>
        </Router>
    )
}

export default App;