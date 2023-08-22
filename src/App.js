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
      <Project></Project>
    </section>
  );
}

export default App;
