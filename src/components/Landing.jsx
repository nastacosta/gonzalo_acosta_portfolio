function Landing() {
  return (
    <>
      <section className="landing-main">
        <p>BIENVENID@, MI NOMBRE ES</p>
        <h4>GONZALO ACOSTA</h4>
        <span>Y SOY...</span>
        <h1>WEB DEVELOPER</h1>
        <div className="landing-buttons">
          <a href="https://www.linkedin.com/in/goacosta/" target="_blank">
            <button className="linkedin-button hover-effect">
              <img src="/img/linkedin-logo.png" alt="logo linkedin" />
            </button>
          </a>

          <a href="https://github.com/nastacosta" target="_blank">
            <button className="github-button hover-effect">
              <img src="/img/github-logo.png" alt="logo github" />
            </button>
          </a>
          <a href="../Gonzalo_Acosta_CV.pdf" download>
            <button className="download-button hover-effect">
              Descargar CV <img src="/img/download.png" alt="descargar cv" />
            </button>
          </a>
        </div>
        <img className="landing-circle" src="/img/circle.png" />
      </section>
      <img className="arrow" src="/img/arrow.png" alt="flecha hacia abajo" />
    </>
  );
}

export default Landing;
