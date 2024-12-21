import { useState } from "react";
import estilos from "../css/index.module.css";

function Formulario() {
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [correoElectronico, setCorreoElectronico] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confirmarContraseña, setConfirmarContraseña] = useState("");
  const [mensajeError, setMensajeError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar campos vacíos
    if (
      !nombreUsuario ||
      !correoElectronico ||
      !contraseña ||
      !confirmarContraseña
    ) {
      setMensajeError("Todos los campos deben ser llenados.");
      return;
    }

    // Validar longitud de la contraseña
    if (contraseña.length < 8) {
      setMensajeError("La contraseña debe contener al menos 8 caracteres.");
      return;
    }

    // Validar si las contraseñas coinciden
    if (contraseña !== confirmarContraseña) {
      setMensajeError("Las contraseñas no coinciden. Intente de nuevo.");
      return;
    }

    // Si todo es válido
    setMensajeError(""); // Limpia cualquier mensaje de error
    console.log("Formulario enviado con éxito:", {
      nombreUsuario,
      correoElectronico,
      contraseña,
    });
  };

  return (
    <form onSubmit={handleSubmit} className={estilos.form}>
      <h2>Registro de Usuario</h2>

      {mensajeError && <p style={{ color: "red" }}>{mensajeError}</p>}

      <div>
        <label htmlFor="nombreUsuario">Nombre de Usuario:</label>
        <input
          type="text"
          id="nombreUsuario"
          value={nombreUsuario}
          onChange={(e) => setNombreUsuario(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="correoElectronico">Correo Electrónico:</label>
        <input
          type="email"
          id="correoElectronico"
          value={correoElectronico}
          onChange={(e) => setCorreoElectronico(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="contraseña">Contraseña:</label>
        <input
          type="password"
          id="contraseña"
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="confirmarContraseña">Confirmar Contraseña:</label>
        <input
          type="password"
          id="confirmarContraseña"
          value={confirmarContraseña}
          onChange={(e) => setConfirmarContraseña(e.target.value)}
        />
      </div>

      <button type="submit">Registrar</button>
    </form>
  );
}

export default Formulario;
