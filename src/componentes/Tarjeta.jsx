import React, { useEffect, useState } from "react";
import estilos from "../css/index.module.css";

export default function Tarjeta() {
  const [Instrumentos, setInstrumentos] = useState([]);

  useEffect(() => {
    fetch("/Instrumentos.json")
      .then((response) => response.json())
      .then((data) => setInstrumentos(data));
  }, []);

  return (
    <>
      <h3>Instrumentos</h3>
      <p>Seleccione para comprar</p>
      <div className={estilos.tarjetas}>
        {Instrumentos.map((instrumento) => (
          <div key={instrumento.id}>
            <img
              src={instrumento.imagen}
              alt={instrumento.nombre}
              className={
                instrumento.id == 3 ? estilos.Fender : estilos.tarjetas_img
              }
            />
            <h4>{instrumento.nombre}</h4>
            <strong>MXN {instrumento.precio}</strong>
          </div>
        ))}
      </div>
    </>
  );
}
