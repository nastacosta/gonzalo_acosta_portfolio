// let ProjectProps = {
//   imagen,
//   nombre,
//   lenguajes,
//   children,
//   linkGithub,
//   linkDeploy,
// };

function Project({
  nombre,
  lenguajes,
  imagen,
  linkGithub,
  linkDeploy,
  direction,
  children,
}) {
  return (
    <article className="project-article">
      <img
        className={
          direction == "alternative" ? "project-image alter" : "project-image"
        }
        src="/img/test-project-image.png"
        alt="imagen del proyecto"
      />
      <section
        className={
          direction == "alternative" ? "project-about alter" : "project-about"
        }
      >
        <h3 className="primary-subheading">{nombre}</h3>
        <div className="project-tech-used">
          {
            lenguajes.map((item) => (
              <img
                src={(item = "/img/" + item + "-logo.png")}
                alt={item + " logo"}
                key={item}
              />
            ))
            // Iteramos por los elementos en el interior del prop lenguajes y mostramos una imagen con su logo
          }
        </div>
        <p className="primary-text">{children}</p>
        <div
          className={
            direction == "alternative" ? "project-links alter" : "project-links"
          }
        >
          <a tabIndex="-1" href={linkGithub} target="_blank">
            <img src="/img/github-logo-black.png" alt="github link" />
          </a>
          <a tabIndex="-1" href={linkDeploy} target="_blank">
            <img src="/img/link.png" alt="project link" />
          </a>
        </div>
      </section>
    </article>
  );
}

export default Project;
