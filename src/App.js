import "./App.css";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Landing from "./components/Landing";

function App() {
  return (
    <body className="app">
      <section className="landing-frame">
        <Header></Header>
        <Landing></Landing>
      </section>
      <div className="title-box">
        <h3>./SOBREMI</h3>
        <h2>Una breve descripción de mi persona</h2>
      </div>
      <AboutMe></AboutMe>
    </body>
  );
}

export default App;
