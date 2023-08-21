function AboutMe() {
  return (
    <section className="about-frame">
      <article className="about-article">
        <div className="about-introduction">
          <h4>Estudiante de Desarrollo de Software</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            quidem quos debitis voluptatibus modi consequuntur architecto quas
            qui totam ipsa aperiam voluptas eius laudantium, consectetur aliquid
            omnis doloribus eveniet quod? qui totam ipsa aperiam voluptas
          </p>
        </div>
        <img
          className="about-image"
          src="/img/desk.jpeg"
          alt="computadora en escritorio"
        />
        <div className="about-soft-skills">
          <h4>Habilidades blandas</h4>
          <section className="soft-skills-section">
            <h5>Adaptabilidad</h5>
            <h5>Trabajo en equipo</h5>
            <h5>Creatividad</h5>
          </section>
        </div>
        <div className="about-hard-skills">
          <h4>Habilidades duras</h4>
          <section className="hard-skills-section">
            <img src="/img/html-logo.png" alt="html" />
            <img src="/img/css-logo.png" alt="css" />
            <img src="/img/javascript-logo.png" alt="javascript" />
            <img src="/img/react-logo.png" alt="react" />
            <img src="/img/git-logo.png" alt="git" />
            <img src="/img/github-logo-black.png" alt="github" />
          </section>
        </div>
      </article>
    </section>
  );
}

export default AboutMe;
