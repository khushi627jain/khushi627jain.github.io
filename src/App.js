import logo from './logo.svg';
import './App.css';
import { Navbar } from './navbar';
import { AboutAndProfile } from './about&profile';
import { TechSkills } from './tech-skills';
import styles from "./style.css"
import Projects from './project';
import { Statistics } from './statistics';
import GithubCalendar from './GitHubCalendar';
import { color } from '@chakra-ui/react';



function App() {
  return (
    <div className="App" 
    // style={{backgroundColor:"black",color:"white"}}
     >
    <Navbar/>
    <AboutAndProfile/>
    <TechSkills/>
   <Projects/> 
   <GithubCalendar name="khushi627jain"/>
   <Statistics/>
    </div>
  );
}

export default App;
