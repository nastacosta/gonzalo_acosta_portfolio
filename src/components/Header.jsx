function Header() {
  return (
    <header className="header">
      <a tabIndex="-1" href="#inicio">
        <button>./INICIO</button>
      </a>
      <a tabIndex="-1" href="#sobre-mi">
        <button>./SOBREMI</button>
      </a>
      <a tabIndex="-1" href="#proyectos">
        <button>./PROYECTOS</button>
      </a>
    </header>
  );
}

export default Header;
