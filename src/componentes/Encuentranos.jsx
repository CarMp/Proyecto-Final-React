import React from "react";

export default function Encuentranos() {
  return (
    <div>
      <h2>Encuéntranos</h2>
      <p>Información sobre cómo encontrarnos.</p>
      <img src="/Imgs/croquis.png" alt="croquis" />
      <h3>Nuestras ubicaciones:</h3>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-around",
          listStyle: "none",
          padding: 0,
        }}
      >
        <li>
          <strong>Dirección 1:</strong> Calle de los Pinos 123, Colonia Jardines
          del Valle, Ciudad de México, CDMX, C.P. 01234
        </li>
        <li>
          <strong>Dirección 2:</strong> Av. Las Flores 456, Fraccionamiento Los
          Olivos, Monterrey, Nuevo León, C.P. 67890
        </li>
        <li>
          <strong>Dirección 3:</strong> Boulevard del Sol 789, Residencial La
          Aurora, Guadalajara, Jalisco, C.P. 54321
        </li>
      </ul>
    </div>
  );
}
