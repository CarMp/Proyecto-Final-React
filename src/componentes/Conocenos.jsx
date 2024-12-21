import React from "react";
import estilos from "../css/index.module.css";

export default function Conocenos() {
  return (
    <div className={estilos.conocenos}>
      <h2>Conocenos</h2>
      <p>
        Somos una empresa dedicada a la música, apasionados por crear
        experiencias sonoras únicas y memorables. Desde nuestros inicios, hemos
        trabajado incansablemente para ofrecer productos y servicios de la más
        alta calidad, siempre con el objetivo de satisfacer las necesidades y
        expectativas de nuestros clientes. <br /> <br />
        Nuestro equipo está compuesto por profesionales talentosos y
        comprometidos, que comparten una visión común: llevar la música a todos
        los rincones del mundo y hacerla accesible para todos. Nos
        especializamos en la producción, distribución y promoción de música, así
        como en la organización de eventos y conciertos que celebran la
        diversidad y riqueza de este arte. En nuestra empresa, creemos
        firmemente en el poder transformador de la música y su capacidad para
        unir a las personas. <br /> <br />
        Por eso, nos esforzamos por fomentar la creatividad y la innovación en
        todo lo que hacemos, siempre con un enfoque en la excelencia y la mejora
        continua. Te invitamos a conocernos y a ser parte de nuestra comunidad
        musical. Juntos, podemos seguir construyendo un futuro lleno de melodías
        y armonías que inspiren y emocionen a generaciones enteras. <br />
        ¡Únete a nosotros y descubre el maravilloso mundo de la música!
      </p>
      <img src="/Imgs/bajo.jpg" alt="Bajo" />
    </div>
  );
}
