import react from "react"
import {Box, Button,  Spacer,Text} from "@chakra-ui/react"
import styles from "./style.css"


export function AboutAndProfile(){
    return(
        <section className="home" id="about">
   <div className="home-content" >
    <Text fontSize={"3xl"} fontWeight={"500"} align={"left"}>Hello, I am</Text>
    <Text fontSize={"4xl"} fontWeight={"800"} align={"left"}>Deepshikha Jain</Text>
    <Text w="80%" mt="2%" align={"left"} fontSize={"18px"}>
    Passionate full stack web developer with expertise in front-end and back-end technologies. 
    Experienced in developing user-friendly interfaces and collaborating in cross-functional teams.
     Committed to continuous learning and staying up to date with the latest industry trends.
    Always excited to take new challenges and willing to make myself more productive each day</Text>
    <div className="social-media">
        <a href=""><i className="bx bxl-facebook"></i></a>
        <a href=""><i className="bx bxl-twitter"></i></a>
        <a href=""><i className="bx bxl-instagram-alt"></i></a>
        <a href=""><i className="bx bxl-linkedin"></i></a>
    </div>
    <a href="" id="" ><Button mt="-4%" _hover={{color:"#fa4a6f",bg:"white",border:"3px solid #fa4a6f"}} bg="#fa4a6f" w="25%" h="3rem" fontSize={"xl"} fontFamily={"heading"} color="white">Resume</Button></a>
    
   </div>
   <div className="proffesion-container">
    <div className="proffesion-box">
    <div className="proffesion" style={{ '--i':0 }}>
  <i className="bx bx-camera"></i>
  <h3>Backended Developer</h3>
</div>
<div className="proffesion" style={{ '--i': 1 }}>
  <i className="bx bx-camera"></i>
  <h3>Frontend Developer</h3>
</div>
<div className="proffesion" style={{ '--i': 2 }}>
  <i className="bx bx-camera"></i>
  <h3>Full-Stack Web Developer</h3>
</div>
<div className="proffesion" style={{ '--i': 3 }}>
  <i className="bx bx-camera"></i>
  <h3>Deepshikha</h3>
</div>

        <div className="circle"></div>

    </div>
     <div  className="overlay"></div>  
    <div className="home-img">
    <img src="https://i.imgur.com/nmWp3fH.jpg" />
</div>
  </div>
  
</section>

    )
}