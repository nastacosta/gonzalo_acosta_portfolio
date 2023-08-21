function Landing() {
  return (
    <>
      <section className="landing-text">
        <p>BIENVENID@, MI NOMBRE ES</p>
        <h4>GONZALO ACOSTA</h4>
        <span>Y SOY...</span>
        <h1>WEB DEVELOPER</h1>
        <div className="landing-buttons">
          <button className="linkedin-button">
            <img src="/img/linkedin-logo.png" alt="logo linkedin" />
          </button>
          <button className="github-button">
            <img src="/img/github-logo.png" alt="logo github" />
          </button>
          <button className="download-button">
            Descargar CV <img src="/img/download.png" alt="descargar cv" />
          </button>
        </div>
        <img className="landing-circle" src="/img/circle.png" />
      </section>
      <img className="arrow" src="/img/arrow.png" alt="flecha hacia abajo" />
    </>
  );
}

export default Landing;
