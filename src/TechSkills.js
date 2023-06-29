import React from "react";
import { Col, Row } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGithubBadge,
  DiBootstrap,
  DiHtml5,
  
} from "react-icons/di";
import {SiRedux,SiExpress,SiTailwindcss,
  SiChakraui,SiCss3,  } from "react-icons/si";
  import {FaJava} from "react-icons/fa"

function Techstack() {
  return (<div
   id="Skills" 
  style={{margin:"auto",justifyContent:"center",alignItems:"center"}}
    >
    <br/>
    <br/>
    <br/>
    <h1 data-aos="fade-down" data-aos-duration="5000" className="tagName">Skills</h1>
    <Row data-aos="fade-up" data-aos-duration="5000" style={{ justifyContent: "center", paddingBottom: "50px" }}>
     
    <Col xs={4} md={2} className="skills-card" data-aos="zoom-in" data-aos-duration="5000">
      <a href = "https://reactjs.org/" target={"_blank"}>  
        <DiReact className="skills-card-img" style={{margin:"auto",justifyContent:"center",alignItems:"center",fontSize:"50px"}} />
        <p className="skills-card-name" >React</p>
      </a>
      </Col>

    <Col xs={4} md={2} className="skills-card" data-aos="zoom-in" data-aos-duration="5000">
      <a href = "https://redux.js.org/" target={"_blank"}> 
        <SiRedux className="skills-card-img" style={{margin:"auto",justifyContent:"center",alignItems:"center",fontSize:"50px"}}  />
        <p className="skills-card-name">Redux</p>
      </a>
      </Col>

    <Col xs={4} md={2} className="skills-card" data-aos="zoom-in" data-aos-duration="5000">
      <a href = "https://expressjs.com/" target={"_blank"}>
        <SiExpress className="skills-card-img" style={{margin:"auto",justifyContent:"center",alignItems:"center",fontSize:"50px"}}/>
        <p className="skills-card-name">Express</p>
      </a>
      </Col>

    <Col xs={4} md={2} className="skills-card" data-aos="zoom-in" data-aos-duration="5000">
      <a href = "https://www.mongodb.com/" target={"_blank"}> 
        <DiMongodb className="skills-card-img" style={{margin:"auto",justifyContent:"center",alignItems:"center",fontSize:"50px"}}/>
        <p className="skills-card-name">Mongodb</p>
      </a>
      </Col>
      
    <Col xs={4} md={2} className="skills-card" data-aos="zoom-in" data-aos-duration="5000">
      <a href = "https://nodejs.org/en/" target={"_blank"}>
        <DiNodejs className="skills-card-img" style={{margin:"auto",justifyContent:"center",alignItems:"center",fontSize:"50px"}} />
        <p className="skills-card-name">Nodejs</p>
      </a>
      </Col>

    <Col xs={4} md={2} className="skills-card" data-aos="zoom-in" data-aos-duration="5000">
      <a href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript" target={"_blank"}>
        <DiJavascript1 className="skills-card-img" style={{margin:"auto",justifyContent:"center",alignItems:"center",fontSize:"50px"}}/>
        <p className="skills-card-name">Javascript</p>
      </a>
      </Col>
      <Col xs={4} md={2} className="skills-card" data-aos="zoom-in" data-aos-duration="5000">
      <a href = "https://reactjs.org/" target={"_blank"}>  
        <SiChakraui className="skills-card-img" style={{margin:"auto",justifyContent:"center",alignItems:"center",fontSize:"50px"}} />
        <p className="skills-card-name">Chakra UI</p>
      </a>
      </Col>

      <Col xs={4} md={2} className="skills-card" data-aos="zoom-in" data-aos-duration="5000">
      <a href = "https://reactjs.org/" target={"_blank"}>  
        <SiCss3 className="skills-card-img" style={{margin:"auto",justifyContent:"center",alignItems:"center",fontSize:"50px"}} />
        <p className="skills-card-name">CSS</p>
      </a>
      </Col>
      <Col xs={4} md={2} className="skills-card" data-aos="zoom-in" data-aos-duration="5000">
      <a href = "https://reactjs.org/" target={"_blank"}>  
        <FaJava className="skills-card-img" style={{margin:"auto",justifyContent:"center",alignItems:"center",fontSize:"50px"}} />
        <p className="skills-card-name">JAVA</p>
      </a>
      </Col>
  
      
      
      <Col xs={4} md={2} className="skills-card" data-aos="zoom-in" data-aos-duration="5000">
       <a href = "https://developer.mozilla.org/en-US/docs/Web/HTML" target={"_blank"}>
        <DiHtml5 className="skills-card-img" style={{margin:"auto",justifyContent:"center",alignItems:"center",fontSize:"50px"}}/>
        <p className="skills-card-name">Html5</p>
        </a>
      </Col>
      
     
     
    </Row>
    </div>
  );
}

export default Techstack;