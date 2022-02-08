import TopBar from './components/Topper/TopBar.jsx'
import Intro from './components/Intro/Intro.jsx'
import Portfolio from './components/Portfolio/Portfolio.jsx'
import Works from './components/Works/Works.jsx'
import Testimonials from './components/Testimonials/Testimonials.jsx'
import Contact from './components/Contact/Contact.jsx'
import './App.scss';
import {useState} from "react";
import Menu from './components/Menu/Menu.jsx';

function App() {

  const [menuOpen, setmenuOpen] = useState(false)
  return (
    <div className="app">
     <TopBar menuOpen={menuOpen} setmenuOpen={setmenuOpen}/>
     <Menu menuOpen={menuOpen} setmenuOpen={setmenuOpen}/>
     <div className="sections">
     <Intro />  
     <Portfolio />
     <Works />
     <Testimonials />
     <Contact />
     </div>
    </div>
  );
}

export default App;
