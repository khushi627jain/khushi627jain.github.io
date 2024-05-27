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
<<<<<<< HEAD
=======
import Calendar from './GitHubCalendar';

>>>>>>> 176c626ac5fc63c21c27f8a770851847a590e351



function App() {
  return (
    <div className="App" >
  <Navbar/>
    <AboutAndProfile/>
    <About/>
 <TechStackSkills/>
   <Projects/> 
<<<<<<< HEAD
   <GithubCalendar />
=======
<Calendar/>
>>>>>>> 176c626ac5fc63c21c27f8a770851847a590e351
   <Statistics/>
   <Contact/>
    </div>
  );
}

export default App;
