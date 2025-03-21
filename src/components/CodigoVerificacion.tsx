import React, { useState } from "react";
import {useNavigate} from "react-router-dom"; // Importamos el hook useNavigate

const CodigoVerificacion: React.FC = () => {
    const navigate = useNavigate();
    const [codigo, setCodigo] = useState<string>("");

    const handleVerificarCodigo = (event: React.FormEvent) => {
        event.preventDefault();
        if (codigo === "123456") {
            alert("Código correcto. Redirigiendo...");
            navigate("/");
        } else {
            alert("Código incorrecto. Intente nuevamente.");
        }
    };

    return(
        <div className="login-container">
            <h1>Win - Código de Verificación</h1>
            <h2>Ingresa el código enviado a tu celular</h2>
            <form className="login-form" onSubmit={handleVerificarCodigo}>
                <div className="input-container">
                    <label>Código de seguridad: </label>
                    <input 
                    type="text" placeholder="Ej: 123456"
                    value={codigo}
                    onChange={(event) => setCodigo(event.target.value)}
                    required/>
                </div>
                <button type="submit" className="login-button">
                    Verificar Código
                </button>                
            </form>
        </div>
    );
};

export default CodigoVerificacion;