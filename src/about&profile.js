
<<<<<<< HEAD
import { Button,  Text} from "@chakra-ui/react"
import styles from "./style.css"
=======
import { Button, Box, Text, Image,Link} from "@chakra-ui/react"
>>>>>>> 176c626ac5fc63c21c27f8a770851847a590e351
import "./style.css"
import {FaWhatsapp} from "react-icons/fa"

export function AboutAndProfile(){
<<<<<<< HEAD
    return(
        <section id="home" className="home" >
   <div  className="home-content" >
    <Text fontSize={"3xl"} fontWeight={"500"} align={["center","center","left"]}>Hello, I am</Text>
    <Text id="user-detail-name" fontSize={"4xl"} fontWeight={"800"} align={["center","center","left"]}>Deepshikha Jain</Text>
    <Text id="user-detail-intro" 
    w={["350px","80%","80%","80%","80%"]}
     mt="2%"
      align={["center","center","left"]}
      fontSize={["20px","20px","19px","20px","18px"]}
     
       >
   I'm a passionate full-stack web developer 🕸️ with expertise in front-end and back-end technologies 💡. 
    Experienced in developing user-friendly interfaces 🫂 and collaborating in cross-functional teams.
    I love to explore new technologies and use them to solve real-life problems 🤓 .
    Always excited 😎 to take on new challenges and willing to make myself more productive each day ✨✨</Text>
    <div className="social-media" >
=======

  const onClickhandler = () => {
    return window.open(
      "https://drive.google.com/file/d/1jEsvQa8I4JQwZzc7XmSjWZ94s6Umq-W7/view?usp=drive_link",
      "_blank"
    );
  };

    return(
        <Box p="10rem 7% 2rem" m="auto" justifyContent={"center"}
         display={["grid","grid","grid","flex","flex"]} alignItems={"center"} id="home" className="home"  >
   <Box  className="home-content" >
    <Text fontSize={"3xl"} fontWeight={"500"} align={["center","center","left"]}>Hello, I am</Text>
    <Text id="user-detail-name" fontSize={"4xl"} fontWeight={"800"} align={["center","center","left"]}>Deepshikha Jain</Text>
    <Text id="user-detail-intro" 
    w={["100%","100%","100%","90%","80%"]}
      mt="2%"
      align={["center","center","left"]}
      fontSize={["3vw", "3.5vw", "3vw", "2vw", "1.3vw"]}
    
       >
   I'm a passionate MERN Stack Developer 🕸️ with expertise in front-end and back-end technologies 💡. 
    Experienced in developing user-friendly interfaces 🫂 and collaborating in cross-functional teams.
    I love to explore new technologies and use them to solve real-life problems 🤓 .
    Always excited 😎 to take on new challenges and willing to make myself more productive each day ✨✨
    </Text>
    <Box className="social-media" >
>>>>>>> 176c626ac5fc63c21c27f8a770851847a590e351
        <a href="https://api.whatsapp.com/send?phone=9057589580" ><FaWhatsapp/></a>
        <a href="mailto:deepshikha2764@gmail.com"><i class="fas fa-envelope"></i></a>
        <a href="https://www.instagram.com/khushi_jain627/"><i className="bx bxl-instagram-alt"></i></a>
        <a  href="https://www.linkedin.com/in/deepshikha-jain-936640256/"><i className="bx bxl-linkedin"></i></a>
<<<<<<< HEAD
    </div>      
    {/* //resume */}
    <a href="./Deepshikha_jain_Resume.pdf" target="_blank" download id="resume-link-2">
    <Button 
    mt="-4%"  _hover={{color:"#fa4a6f",bg:"white",border:"3px solid #fa4a6f"}} 
     bg="#fa4a6f" w="25%" h="3rem" fontSize={"xl"} fontFamily={"heading"}
      color="white" id="resume-button-2" mb={["4%","0px"]}
     >Resume
     </Button>
     </a>
    
   </div>
  <div className="home-img-1" >
    <img className="home-img" alt="deepshikha" src="https://i.imgur.com/nmWp3fH.jpg" />
</div>

  
</section>
=======
    </Box>      
    {/* //resume */}
   
  <Button
    mt="-4%"
    _hover={{ color: "#fa4a6f", bg: "white", border: "3px solid #fa4a6f" }}
    bg="#fa4a6f"
    w="25%"
    h="3rem"
    fontSize={["3vw", "3.5vw", "3vw", "2vw", "1.5vw"]}
    fontFamily={"heading"}
    color="white"
    id="resume-button-2"
    mb={["4%", "0px"]}
    download={true} 
            onClick={onClickhandler}
  >
    Resume
  </Button>



   </Box>
  <Box  className="home-img-1" >
    <Image 
   
    m="auto" justifyContent={"center"} borderRadius={"50%"} 

boxSize={["50%","60%","50%","90%","70%"]}
     className="home-img" alt="deepshikha" src="https://i.imgur.com/VHgEE3j.jpg" />
</Box>

  
</Box>
>>>>>>> 176c626ac5fc63c21c27f8a770851847a590e351

    )
}