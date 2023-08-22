import "./App.css";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Project from "./components/Project";

function App() {
  return (
    <section className="app">
      <article className="landing-frame">
        <Header></Header>
        <Landing></Landing>
      </article>
      <div className="title right">
        <h3>./SOBREMI</h3>
        <h2>Una breve descripción de mi persona</h2>
      </div>
      <AboutMe></AboutMe>
      <div className="title left">
        <h3>./PROYECTOS</h3>

        <h2>Dónde las ideas cobran vida</h2>
      </div>
      <Project
        nombre="Sportit Project"
        lenguajes={["html", "css"]}
        imagen="/img/test-project-image.png"
        linkGithub="https://github.com/nastacosta/Sportit-Project"
        linkDeploy="https://nastacosta.github.io/Sportit-Project/"
        direction="normal"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex incidunt
        eveniet blanditiis fuga hic ducimus consequuntur, voluptate sapiente
        ullam? Eveniet perferendis repellat accusamus totam minima illo non
        voluptatem aliquam debitis.
      </Project>
      <Project
        nombre="Sportit Project"
        lenguajes={["html", "css"]}
        imagen="/img/test-project-image.png"
        linkGithub="https://github.com/nastacosta/Sportit-Project"
        linkDeploy="https://nastacosta.github.io/Sportit-Project/"
        direction="alternative"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex incidunt
        eveniet blanditiis fuga hic ducimus consequuntur, voluptate sapiente
        ullam? Eveniet perferendis repellat accusamus totam minima illo non
        voluptatem aliquam debitis.
      </Project>
      <Project
        nombre="Sportit Project"
        lenguajes={["html", "css"]}
        imagen="/img/test-project-image.png"
        linkGithub="https://github.com/nastacosta/Sportit-Project"
        linkDeploy="https://nastacosta.github.io/Sportit-Project/"
        direction="normal"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex incidunt
        eveniet blanditiis fuga hic ducimus consequuntur, voluptate sapiente
        ullam? Eveniet perferendis repellat accusamus totam minima illo non
        voluptatem aliquam debitis.
      </Project>
    </section>
  );
}

export default App;
