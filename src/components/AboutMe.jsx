import { motion } from "framer-motion";
function AboutMe() {
  const tech = ["html", "css", "js", "react", "git", "github"];
  const viewportWidth = window.innerWidth;

  const simpleAnimation = {
    variants: {
      initial: {
        opacity: 0,
        y: 20,
      },
      animate: {
        opacity: 1,
        y: 0,
      },
    },
    initial: "initial",
    whileInView: "animate",
    viewport: { once: true },
  };

  const delayAnimation = {
    variants: {
      initial: {
        scale: 1.5,
        opacity: 0,
        y: 40,
      },
      animate: (index) => ({
        scale: 1,
        opacity: 1,
        y: 0,
        transition: {
          ease: "easeInOut",
          delay: 0.1 * index + 0.35,
        },
      }),
    },
    initial: "initial",
    whileInView: "animate",
    viewport: { once: true },
  };

  const simpleZoomOut = {
    variants: {
      initial: {
        opacity: 0,
        scale: 1.3,
      },
      animate: {
        opacity: 1,
        scale: 1,
      },
    },
    initial: "initial",
    whileInView: "animate",
    viewport: { once: true },
  };

  return (
    <section className="about-frame">
      <article className="about-article">
        <div className="about-introduction">
          <motion.h4
            className="primary-subheading"
            {...simpleAnimation}
            transition={{ delay: 0.05 }}
          >
            Estudiante de Desarrollo de Software,
          </motion.h4>
          <motion.p
            className="primary-text"
            {...simpleAnimation}
            transition={{ delay: 0.15 }}
          >
            amante de la música y perfeccionista sin remedio, me encanta diseñar
            y programar cosas. Poseo una gran abanico de habilidades del
            desarrollo web y en mis proyectos la prioridad es darle al usuario
            una experiencia que supere sus expectativas. Actualmente estoy
            abierto a oportunidades laborales, no dudes en escribirme.
          </motion.p>
        </div>
        <motion.img
          className="about-image"
          src="/img/desk.png"
          alt="computadora en escritorio"
          {...simpleZoomOut}
          transition={{ delay: 0.25, duration: 0.5 }}
        />
        <div className="about-soft-skills">
          <motion.h4 {...simpleAnimation} transition={{ delay: 0.1 }}>
            Habilidades blandas
          </motion.h4>
          <section className="soft-skills-section">
            <motion.h5 {...simpleAnimation} transition={{ delay: 0.2 }}>
              Adaptabilidad
            </motion.h5>
            <motion.h5 {...simpleAnimation} transition={{ delay: 0.3 }}>
              Trabajo en equipo
            </motion.h5>
            <motion.h5 {...simpleAnimation} transition={{ delay: 0.4 }}>
              Creatividad
            </motion.h5>
          </section>
        </div>
        <div className="about-hard-skills">
          <motion.h4 {...simpleAnimation} transition={{ delay: 0.25 }}>
            Habilidades duras
          </motion.h4>
          <section className="hard-skills-section">
            {tech.map((lenguaje, index) => (
              <motion.img
                src={(lenguaje = "/img/" + lenguaje + "-logo.png")}
                alt={lenguaje}
                key={lenguaje + index}
                {...delayAnimation}
                custom={index}
                whileTap={{ cursor: "grabbing", scale: 1.2 }}
                drag
                dragConstraints={{
                  bottom: 1825,
                }}
              />
            ))}
          </section>
        </div>
      </article>
    </section>
  );
}

export default AboutMe;
