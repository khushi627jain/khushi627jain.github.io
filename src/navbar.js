import react,{Component} from "react"
import {Box, Button,  Spacer, Text} from "@chakra-ui/react"
import styles from "./style.css"
import { animateScroll as scroll } from 'react-scroll';
import { Link } from "react-scroll"
export function Navbar(){
    
      
    return(
        <div id="home">
<header className="header" id="header">
    <a href="#"  className="logo">Deepshikha </a>
    <nav className="navbar">
        <Link className="navbarA" activeclass="active" to="home" spy={"true"} smooth={"true"}>Home</Link>
        <Link  className="navbarA" to="about" spy={"true"} smooth={"true"}>About</Link>
        <Link className="navbarA" to="skills" spy={"true"} smooth={"true"}>Skills</Link>
        <Link className="navbarA" to="Projects" spy={"true"} smooth={"true"}>Projects</Link>   
        <Link className="navbarA" to="satistics" spy={"true"} smooth={"true"}>Satistics</Link>
        <Link className="navbarA" to="Contacts" spy={"true"} smooth={"true"}>Contacts</Link>
     
    </nav>
    {/* <div className="bx bx-moon" id="darkMode-icon" ></div> */}
</header>









</div>
    )
} 