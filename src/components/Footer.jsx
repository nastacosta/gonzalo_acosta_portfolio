function Footer() {
  return (
    <footer>
      <article className="footer-frame">
        <section className="footer-text">
          <h3 className="primary-subheading">¿Te interesó mi portafolio?</h3>
          <h4 className="primary-subheading">¡Pongámonos en contacto!</h4>
          <a href="https://www.linkedin.com/in/goacosta/" target="_blank">
            <button>
              <img src="/img/linkedin-logo.png" alt="" />
            </button>
          </a>
          <p>
            <a href="mailto:go.acosta3@gmail.com">go.acosta3@gmail.com</a>
          </p>
        </section>
        <div className="footer-photos">
          <img src="/img/polaroid-2.png" alt="foto de gonzalo y charly" />
          <img src="/img/polaroid-1.png" alt="foto de gonzalo" />
        </div>
      </article>
      <div className="footer-copy">GONZALO ACOSTA © 2023</div>
    </footer>
  );
}

export default Footer;
