import "./App.css";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Project from "./components/Project";
import Footer from "./components/Footer";
import { motion } from "framer-motion";

function App() {
  const simpleAnimation = {
    variants: {
      initial: {
        opacity: 0,
        y: 50,
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
    <section className="app">
      <article id="inicio" className="landing-frame">
        <Header />
        <Landing />
      </article>
      <div id="sobre-mi" className="title right">
        <motion.h3 {...simpleAnimation} transition={{ delay: 0.1 }}>
          ./SOBREMI
        </motion.h3>
        <motion.h2 {...simpleAnimation} transition={{ delay: 0.05 }}>
          Una breve descripción de mi persona
        </motion.h2>
      </div>
      <AboutMe />
      <div id="proyectos" className="title left">
        <motion.h3 {...simpleAnimation} transition={{ delay: 0.1 }}>
          ./PROYECTOS
        </motion.h3>

        <motion.h2 {...simpleAnimation} transition={{ delay: 0.15 }}>
          Dónde las ideas cobran vida
        </motion.h2>
      </div>
      <Project
        nombre="Portovinos"
        lenguajes={["php", "js", "html", "css"]}
        imagen="/img/portovinos.jpg"
        linkGithub=""
        linkDeploy="https://portovinos.000webhostapp.com/"
        direction="normal"
      >
        Proyecto E-Commerce de fin de curso retomado y renovado, con más
        funciones, mejor presentación y por sobre todas las cosas, preparado
        para salir al mercado. Ofrece variedad de productos, registro de
        usuarios, panel de administración y más.
      </Project>
      <Project
        nombre="Sportit"
        lenguajes={["html", "css"]}
        imagen="/img/sportit.jpg"
        linkGithub="https://github.com/nastacosta/Sportit-Project"
        linkDeploy="https://nastacosta.github.io/Sportit-Project/"
        direction="alternative"
      >
        Proyecto sencillo realizado con un diseño definido con el objetivo de
        replicarlo fielmente. Se evaluaron las buenas prácticas en el maquetado
        y en los estilos, así como en el buen uso de flexbox y diseño
        responsive. Nota: 10
      </Project>
      <Footer />
    </section>
  );
}

export default App;
