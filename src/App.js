import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import { AboutAndProfile } from './about&profile';

// import styles from "./style.css"
import Projects from './project';
import { Statistics } from './statistics';
import GithubCalendar from './GitHubCalendar';

import { Contact } from './contact';
import Navbar from './navbar';
import About from './about';
import './style.css'; 
import TechStackSkills from './TechSkillsStack';
import Calendar from './GitHubCalendar';




function App() {
  return (
    <div className="App" >
  <Navbar/>
    <AboutAndProfile/>
    <About/>
 <TechStackSkills/>
   <Projects/> 
<Calendar/>
   <Statistics/>
   <Contact/>
    </div>
  );
}

export default App;
