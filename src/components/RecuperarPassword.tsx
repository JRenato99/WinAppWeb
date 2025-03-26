import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importamos el hook useNavigate

const RecuperarPassword: React.FC = () => {
  const navigate = useNavigate();
  const [numero, setNumero] = useState<string>("");

  const handleEnviarCodigo = (event: React.FormEvent) => {
    event.preventDefault();
    alert(`Código enviado a ${numero}`);
    navigate("/codigo-verificacion");
  };

  return (
    <div className="login">
      <div className="login-container">
        <h1>Win - Recuperar Contraseña</h1>
        <h2>Ingresa tu número de celular</h2>
        <form className={"login-form"} onSubmit={handleEnviarCodigo}>
          <div className="input-container">
            <label>Número de celular: </label>
            <input
              type="tel"
              placeholder="9876544321"
              value={numero}
              onChange={(event) => setNumero(event.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">
            Enviar Código
          </button>
        </form>
      </div>
    </div>
  );
};
export default RecuperarPassword;
