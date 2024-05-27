import { Image ,Text} from "@chakra-ui/react"
import styles from "./style.css"



export function Contact(){
    return(
        <div id="contact">      
           <Text mt={"4%"} fontWeight={"1000"} 
            fontSize={["2xl","3xl","4xl","4xl","4xl"]}
            data-aos="fade-down" data-aos-duration="1000"
            >Feel free to connect with me</Text>
           <a href="https://www.animatedimages.org/cat-lines-562.htm">
           <Image className="line-style"
     
           w={["sm","md","xl","2xl","3xl"]}
           m="auto"
           h={["3px","5px"]}
           mt="-10px"
           mb="10px"
           
             src="https://www.animatedimages.org/data/media/562/animated-line-image-0447.gif" border="0" alt="animated-line-image-0447" /></a>   
    <div className="nav-link contact">
    <div className="contact-form-inner">
    <a   href="mailto:deepshikha2764@gmail.com"><i class="fas fa-envelope"></i></a>
<Text data-aos="fade-right" data-aos-duration="1000" id="contact-email" textOverflow={"unset"} fontSize={["md","md","xl","xl","xl"]}>deepshikha2764@gmail.com</Text>
    </div>
    <div className="contact-form-inner">
    <a   href="https://www.google.com/maps?q=Kota,+Rajasthan"> <i class="fas fa-map-marker-alt"></i></a>
<Text data-aos="fade-left" data-aos-duration="1000" id="contact-location"  fontSize={["md","md","xl","xl","xl"]}>Kota,Rajasthan</Text>
    </div>
    <div className="contact-form-inner">
    <a   href="https://api.whatsapp.com/send?phone=9057589580"><i class="fas fa-phone"></i></a>
<Text data-aos="fade-right" data-aos-duration="1000" id="contact-phone" fontSize={["md","md","xl","xl","xl"]}>9057589580</Text>
    </div>
    <div className="contact-form-inner">
    <a href="https://github.com/khushi627jain" id="contact-github"><i class="fab fa-github"></i></a> 
<Text data-aos="fade-left" data-aos-duration="1000" fontSize={["md","md","xl","xl","xl"]}>khushi627jain</Text>
    </div>
    <div className="contact-form-inner">
    <a id="contact-linkedin" href="https://www.linkedin.com/in/deepshikha-jain-936640256/"><i class="bx bxl-linkedin"></i></a>
<Text  fontSize={["md","md","xl","xl","xl"]}>Deepshikha jain</Text>
    </div>
   

    </div>
    <div id="last">
      <Text fontSize={["xl","xl","xl","xl","xl"]}>  Created by : Deepshikha jain</Text>
    </div>
        </div>
    )
}