function Project() {
  return (
    <article className="project-article">
      <img
        className="project-image"
        src="/img/test-project-image.png"
        alt="imagen del proyecto"
      />
      <section className="project-about">
        <h3 className="primary-subheading">Sportit Project</h3>
        <div className="project-tech-used">
          <img src="/img/html-logo.png" alt="" />
          <img src="/img/css-logo.png" alt="" />
          <img src="/img/react-logo.png" alt="" />
        </div>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          quidem quos debitis voluptatibus modi consequuntur architecto quas qui
          totam ipsa aperiam voluptas eius laudantium, consectetur aliquid omnis
          eius laudantium,
        </p>
        <div className="project-links">
          <img src="/img/github-logo-black.png" alt="github link" />
          <img src="/img/link.png" alt="project link" />
        </div>
      </section>
    </article>
  );
}

export default Project;
