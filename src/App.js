import logo from './volhalla-logo.svg';
import './App.css';

import NavBar from './components/NavBar';
import Splash from './components/Splash';
import Volatile from './components/Volatile';
import StartEarning from './components/StartEarning';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Splash/>
      <Volatile/>
      <StartEarning/>
      <Footer />
    </div>
  );
}

export default App;
