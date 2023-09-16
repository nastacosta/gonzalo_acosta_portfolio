import { motion } from "framer-motion";

function Footer() {
  const simpleAnimation = {
    variants: {
      initial: (num) => ({
        opacity: 0,
        y: num,
      }),
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
    <footer>
      <article id="footer" className="footer-frame">
        <section className="footer-text">
          <motion.h3
            className="primary-subheading"
            {...simpleAnimation}
            transition={{ delay: 0.05 }}
            custom={50}
          >
            ¿Te interesó mi portafolio?
          </motion.h3>
          <motion.h4
            className="primary-subheading"
            {...simpleAnimation}
            transition={{ delay: 0.1 }}
            custom={50}
          >
            ¡Pongámonos en contacto!
          </motion.h4>
          <motion.span
            {...simpleAnimation}
            transition={{ delay: 0.1 }}
            custom={20}
          >
            <a
              className="footer-link"
              tabIndex="-1"
              href="https://www.linkedin.com/in/goacosta/"
              target="_blank"
            >
              <button className="hover-effect">
                <img src="/img/linkedin-logo.png" alt="" />
              </button>
            </a>
            <a className="footer-mail" href="mailto:go.acosta3@gmail.com">
              go.acosta3@gmail.com
            </a>
          </motion.span>
        </section>
        <div className="footer-photos">
          <img
            className="footer-photo hover-effect"
            src="/img/polaroid-2.png"
            alt="foto de gonzalo y charly"
          />
          <img
            className="footer-photo hover-effect"
            src="/img/polaroid-1.png"
            alt="foto de gonzalo"
          />
        </div>
      </article>
      <div className="footer-copy">Design by: GONZALO ACOSTA © 2023</div>
    </footer>
  );
}

export default Footer;
