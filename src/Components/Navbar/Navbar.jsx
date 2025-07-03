import About from '../About/About';
import Contact from '../Contact/Contact';
import Files from '../Files/Files';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import './Navbar.css';

function Navbar({ iconClicked, setIconClicked }) {


  return (

        <div class="navbar">
            <Files iconActive={iconClicked} onClick={() => {console.log("Click en FILES"); setIconClicked("FILES")}}></Files>            
            <Projects iconActive={iconClicked} onClick={() => setIconClicked("PROJECTS")}></Projects>
            <Skills iconActive={iconClicked} onClick={() => setIconClicked("SKILLS")}></Skills>       
            <Contact iconActive={iconClicked} onClick={() => setIconClicked("CONTACT")}></Contact>
            <About iconActive={iconClicked} onClick={() => setIconClicked("ABOUT")}></About>
        </div>

  );
}

export default Navbar;