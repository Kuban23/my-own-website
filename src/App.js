import './scss/App.scss';
import Navbar from './components/NavBar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';

function App() {
   return (
      <div>
         <Navbar />
         <Home />
         <About />
         <Skills />
      </div>
   );
}

export default App;