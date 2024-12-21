import React from "react";
import estilos from "../css/index.module.css";

export default function Recomendado({ imagenes }) {
  const [imagenActual, setImagenActual] = React.useState(0);

  const cantidadImagenes = imagenes?.length;

  if (!Array.isArray(imagenes) || cantidadImagenes === 0) {
    return null;
  }

  function siguienteImagen() {
    setImagenActual(
      imagenActual === cantidadImagenes - 1 ? 0 : imagenActual + 1
    );
  }

  function anteriorImagen() {
    setImagenActual(
      imagenActual === 0 ? cantidadImagenes - 1 : imagenActual - 1
    );
  }

  return (
    /* Carrusel con imagenes de los instrumentos recomendados */
    <section className={estilos.recomendados}>
      <h2>Recomendado</h2>
      <div>
        <button onClick={anteriorImagen}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 50 50"
          >
            <path d="M 11.957031 13.988281 C 11.699219 14.003906 11.457031 14.117188 11.28125 14.308594 L 1.015625 25 L 11.28125 35.691406 C 11.527344 35.953125 11.894531 36.0625 12.242188 35.976563 C 12.589844 35.890625 12.867188 35.625 12.964844 35.28125 C 13.066406 34.933594 12.972656 34.5625 12.71875 34.308594 L 4.746094 26 L 48 26 C 48.359375 26.003906 48.695313 25.816406 48.878906 25.503906 C 49.058594 25.191406 49.058594 24.808594 48.878906 24.496094 C 48.695313 24.183594 48.359375 23.996094 48 24 L 4.746094 24 L 12.71875 15.691406 C 13.011719 15.398438 13.09375 14.957031 12.921875 14.582031 C 12.753906 14.203125 12.371094 13.96875 11.957031 13.988281 Z"></path>
          </svg>
        </button>
        {imagenes.map((img, index) => {
          return (
            <div key={index}>
              {index === imagenActual && (
                <img src={img} alt="Instrumento recomendado" />
              )}
            </div>
          );
        })}
        <button onClick={siguienteImagen}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 50 50"
          >
            <path d="M 38.042969 13.988281 C 38.300781 14.003906 38.542969 14.117188 38.71875 14.308594 L 48.984375 25 L 38.71875 35.691406 C 38.472656 35.953125 38.105469 36.0625 37.757813 35.976563 C 37.410156 35.890625 37.132813 35.625 37.035156 35.28125 C 36.933594 34.933594 37.027344 34.5625 37.28125 34.308594 L 45.253906 26 L 2 26 C 1.640625 26.003906 1.304688 25.816406 1.121094 25.503906 C 0.941406 25.191406 0.941406 24.808594 1.121094 24.496094 C 1.304688 24.183594 1.640625 23.996094 2 24 L 45.253906 24 L 37.28125 15.691406 C 36.988281 15.398438 36.90625 14.957031 37.078125 14.582031 C 37.246094 14.203125 37.628906 13.96875 38.042969 13.988281 Z"></path>
          </svg>
        </button>
      </div>
      <div className={estilos.barras}>
        {imagenes.map((_, index) => (
          <span
            key={index}
            className={`${estilos.barra} ${
              index === imagenActual ? estilos.activa : ""
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
}
