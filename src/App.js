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
import Miniprojects from './Components/Miniprojects';



function App() {
  useEffect(() => { document.body.style.backgroundColor = 'rgb(26, 32, 44)' }, []) 
  return (
    <div className="App">
     {/* <h1>Jai Shree Ram !!</h1> */}
     <Navbar />
     <HomeSection />
     <AboutSection/>
     <ProjectSection  />
     <Miniprojects/>
     <GithubSection/>
     <SkillSection />
     <ContactSection />

     {/* <AllRoutes/> */}
    </div>
  );
}

export default App;
