import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import AllRoutes from './Components/AllRoutes';
import HomeSection from './Components/HomeSection';
import AboutSection from './Components/AboutSection';
import SkillSection from './Components/SkillSection';
import ProjectSection from './Components/ProjectSection';
import ContactSection from './Components/ContactSection';
import { useEffect } from 'react';
import GithubSection from './Components/GithubSection';



function App() {
  useEffect(() => { document.body.style.backgroundColor = 'rgb(26, 32, 44)' }, []) 
  return (
    <div className="App">
     {/* <h1>Jai Shree Ram !!</h1> */}
     <Navbar id="nav-menu"/>
     <HomeSection id="home"/>
     <AboutSection id="about" class="about section"/>
     <ProjectSection  id="projects"/>
     <GithubSection/>
     <SkillSection id="skills"/>
     <ContactSection  id="contact"/>

     {/* <AllRoutes/> */}
    </div>
  );
}

export default App;
