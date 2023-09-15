import { motion } from "framer-motion";

function Project({
  nombre,
  lenguajes,
  imagen,
  linkGithub,
  linkDeploy,
  direction,
  children,
}) {
  const directionInt = direction == "alternative" ? 200 : -200;

  const simpleZoomIn = {
    variants: {
      initial: {
        opacity: 0,
        scale: 0.3,
        x: directionInt,
      },
      animate: {
        opacity: 1,
        scale: 1,
        x: 0,
      },
    },
    initial: "initial",
    whileInView: "animate",
    viewport: { once: true },
  };

  return (
    <motion.article
      className="project-article"
      {...simpleZoomIn}
      transition={{ delay: 0.15, duration: 0.4 }}
      custom={direction}
    >
      <div
        className={
          direction == "alternative" ? "project-image alter" : "project-image"
        }
      >
        <a
          className="project-image-cover"
          tabIndex="-1"
          href={linkDeploy}
          target="_blank"
        ></a>
        <h4 className="project-image-link">
          Ver en línea <img src="/img/link.png" alt="" />
        </h4>
        <img src={imagen} alt="imagen del proyecto" />
      </div>

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
            <img src="/img/github-logo.png" alt="github link" />
          </a>
          <a tabIndex="-1" href={linkDeploy} target="_blank">
            <img src="/img/link.png" alt="project link" />
          </a>
        </div>
      </section>
    </motion.article>
  );
}

export default Project;
