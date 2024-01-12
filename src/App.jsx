import logo from './logo.svg';
import './App.css';

function App() {
  const apponclick= () => {
    window.adobeDataLayer.push({ "event": "App On Click Start" });
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola sitio en React para probar el Data Layer
        </p>
        

        <button onClick={apponclick}>App On Click Start</button>

      </header>
     
    </div>
    
  );
}

export default App;
