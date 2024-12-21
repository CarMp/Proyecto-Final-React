import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import Recomendado from "./componentes/Recomendado.jsx";
import Conocenos from "./componentes/Conocenos.jsx";
import Encuentranos from "./componentes/Encuentranos.jsx";
import estilos from "./css/index.module.css";
import Tarjeta from "./componentes/Tarjeta.jsx";
import Formulario from "./componentes/Formulario.jsx";

export default function App() {
  const arrayImg = [
    "/ImgCarrusel/guitarra1.jpg",
    "/ImgCarrusel/guitarra2.jpg",
    "/ImgCarrusel/bajo1.jpg",
    "/ImgCarrusel/bateria.jpg",
    "/ImgCarrusel/violin1.jpg",
  ];

  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <Router>
      <>
        {/* Encabezado */}
        <header className={estilos.header}>
          {/* Navegacion */}
          <nav>
            <ul className={estilos.navbar}>
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/conocenos">Conocenos</Link>
              </li>
              <li>
                <Link to="/encuentranos">Encuentranos</Link>
              </li>
            </ul>
          </nav>
          {/* Logo */}
          <h1>eMusic</h1>
          {/* Usuario */}
          <div className={estilos.usuario}>
            <div onClick={toggleMenu} className={estilos.usuario}>
              <img width="30" src="\iconos\sojiunn.jpg" />
              <span>Usuario</span>
              {menuVisible && (
                <div className={estilos.menu}>
                  <Link to="/formulario">Iniciar Sesión</Link>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Contenido */}
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Recomendado imagenes={arrayImg} />
                  {/* Articulos */}
                  <Tarjeta />
                </>
              }
            />
            <Route path="/conocenos" element={<Conocenos />} />
            <Route path="/encuentranos" element={<Encuentranos />} />
            <Route path="/formulario" element={<Formulario />} />
          </Routes>
        </main>

        {/* Pie de la pagina */}
        <footer className={estilos.footer}>
          <div>
            <a href="/">Contactanos</a>
            <a href="/">Soporte</a>
          </div>
          <div>
            <p>© 2024 eMusic</p>
            <a href="/">Terminos y condiciones</a>
            <a href="/">Politicas de privacidad</a>
          </div>
          <div>
            <a href="/">
              <img src="/iconos/fcbk.png" alt="Facebook" />
              Facebook
            </a>
            <a href="/">
              <img src="/iconos/X.png" alt="X" />
              Twitter
            </a>
            <a href="/">
              <img src="/iconos/insta.png" alt="Insta" />
              Instagram
            </a>
          </div>
        </footer>
      </>
    </Router>
  );
}
