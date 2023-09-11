import { useState } from "react";

function Header() {
  const [state, menuIsOpened] = useState(false);
  return (
    <header className="header">
      <a className="header-name" tabIndex="-1" href="index.html">
        <button>[goacosta]</button>
      </a>
      <nav className={state ? "navbar open" : "navbar"}>
        <a tabIndex="-1" href="#inicio">
          <button onClick={() => menuIsOpened(false)}>INICIO</button>
        </a>
        <a tabIndex="-1" href="#sobre-mi">
          <button onClick={() => menuIsOpened(false)}>SOBRE MI</button>
        </a>
        <a tabIndex="-1" href="#proyectos">
          <button onClick={() => menuIsOpened(false)}>PROYECTOS</button>
        </a>
        <a tabIndex="-1" href="#footer">
          <button onClick={() => menuIsOpened(false)}>CONTACTO</button>
        </a>
      </nav>
      <button
        className={state ? "hamburguer spin" : "hamburguer"}
        onClick={() => menuIsOpened(!state)}
      >
        <img
          src={state ? "/img/close.png" : "/img/hamburguer.png"}
          alt="menu"
        />
      </button>
    </header>
  );
}

export default Header;
