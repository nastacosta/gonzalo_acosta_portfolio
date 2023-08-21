import './App.css';
import Header from './components/Header';
import Landing from './components/Landing';

function App() {
  return (
    <body className="app">
      <section className='landing-frame'>
        <Header></Header>
        <Landing></Landing>
      </section>
    </body>
  );
}

export default App;
