import './App.css';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Landing from './components/Landing';

function App() {
  return (
    <body className="app">
      <section className='landing-frame'>
        <Header></Header>
        <Landing></Landing>
      </section>
      <AboutMe></AboutMe>
    </body>
  );
}

export default App;
