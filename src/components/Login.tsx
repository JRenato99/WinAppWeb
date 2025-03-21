
import React from "react";
import "./../styles/Login.css"; // Importamos el archivo css
import {useNavigate} from "react-router-dom"; // Importamos el hook useNavigate

const Login: React.FC = () => {

    const navigate = useNavigate(); // Declaramos la variable navigate que contiene el hook useNavigate 

    return (
        <div className="login-container">
            <h1>Win - Login</h1>
            <h2>Iniciar Sesión</h2>
            <form className={"login-form"}>
                <div className="input-container">
                    <label>Usuario: </label>
                    <input 
                    type="text" placeholder="Ingrese su usuario"/>
                </div>
                <div className="input-container">
                    <label>Contraseña: </label>
                    <input 
                    type="password" id="password" 
                    placeholder="Ingrese su contraseña"/>
                </div>
                <button type="button" className="login-button" onClick={()=> navigate('/home')}>Iniciar Sesión</button>
                <p className="forgot-password" onClick={()=> navigate('/recuperar-password')}>
                    ¿Olvidaste tu contraseña?
                </p>
            </form>
        </div>
    );
};

export default Login;