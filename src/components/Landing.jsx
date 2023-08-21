function Landing() {
  return (
    <>
      <section className="landing-text">
        <img className="landing-circle" src="/img/circle.png" />
        <p>BIENVENID@, MI NOMBRE ES</p>
        <h4>GONZALO ACOSTA</h4>
        <span>Y SOY...</span>
        <h1>WEB DEVELOPER</h1>
        <div className="landing-buttons">
          <button className="linkedin-button">
            <img src="/img/linkedin-logo.png" alt="LinkedIn Logo" />
          </button>
          <button className="github-button">
            <img src="/img/github-logo.png" alt="GitHub Logo" />
          </button>
          <button className="download-button">
            Descargar CV <img src="/img/download.png" alt="Descargar CV" />
          </button>
        </div>
      </section>
      <img className="arrow" src="/img/arrow.png" alt="flecha hacia abajo" />
    </>
  );
}

export default Landing;
