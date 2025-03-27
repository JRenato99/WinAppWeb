import React from "react";
import "../styles/Dashboard.css";

export const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <h2 className="dashboard-title">Listing presets</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Canal</th>
              <th>Peso</th>
              <th>Horario</th>
              <th>Eventos</th>
              <th>Disposición</th>
              <th>Argumentos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>bootstrap</td>
              <td>bootstrap</td>
              <td>0</td>
              <td>-</td>
              <td>0 BOOTSTRAP</td>
              <td>
                <a href="#">Show</a>
              </td>
              <td>
                <a href="#">Show</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
