import { motion } from "framer-motion";

function Landing() {
  const simpleAnimation = {
    variants: {
      initial: {
        opacity: 0,
        y: 40,
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

  return (
    <>
      <motion.section
        className="landing-main"
        {...simpleAnimation}
        transition={{ delay: 0 }}
      >
        <p>BIENVENID@, MI NOMBRE ES</p>
        <h4>
          GONZALO ACOSTA<span>Y SOY...</span>
        </h4>
        <h1>WEB DEVELOPER</h1>
        <motion.div
          className="landing-buttons"
          {...simpleAnimation}
          transition={{ delay: 1.3 }}
        >
          <a
            tabIndex="-1"
            href="https://www.linkedin.com/in/goacosta/"
            target="_blank"
          >
            <button className="linkedin-button hover-effect">
              <img src="/img/linkedin-logo.png" alt="logo linkedin" />
            </button>
          </a>

          <a tabIndex="-1" href="https://github.com/nastacosta" target="_blank">
            <button className="github-button hover-effect">
              <img src="/img/github-logo-white.png" alt="logo github" />
            </button>
          </a>
          <a tabIndex="-1" href="../CV_Gonzalo_Acosta.pdf" download>
            <button className="download-button hover-effect">
              Descargar CV <img src="/img/download.png" alt="descargar cv" />
            </button>
          </a>
        </motion.div>
        <img className="landing-circle" src="/img/circle.png" />
      </motion.section>
      <img className="arrow" src="/img/arrow.png" alt="flecha hacia abajo" />
    </>
  );
}

export default Landing;
