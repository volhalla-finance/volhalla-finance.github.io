import logo from './volhalla-logo.svg';
import './App.css';

import NavBar from './components/NavBar';
import Splash from './components/Splash';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Splash/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
