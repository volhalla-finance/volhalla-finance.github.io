import logo from './volhalla-logo.svg';
import './App.css';

import NavBar from './components/NavBar';
import Splash from './components/Splash';
import Volatile from './components/Volatile';
import Strategies from './components/Strategies';
import StartEarning from './components/StartEarning';
import Team from './components/Team';
import Footer from './components/Footer';
import Questions from './components/Questions';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Splash/>
      <Volatile/>
      <Strategies/>
      <StartEarning/>
      <Team/>
      <Questions/>
      <Footer />
    </div>
  );
}

export default App;
