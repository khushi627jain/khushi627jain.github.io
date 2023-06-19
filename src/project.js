import React from "react";
import { Container, Heading } from "@chakra-ui/react";
import { SiChakraui,SiReact,SiRedux,SiJavascript,SiCss3, SiFirebase } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import MyProjectCard from "./MyProjectCard";


const Projects = () => {
  const projects = [
    {
      id: 1,
      livelink: "https://merry-cupcake-642e8f.netlify.app/",
      github: "https://github.com/pankajsbisht143/famousfootwear",
      techStack: [  {id:1,skill:'HTML',img:<AiFillHtml5 size='20px' color='#e2660f' />},
      {id:2,skill:'Javascript',img:<SiJavascript size='20px' color='orange' />},
      {id:3,skill:'Css',img:<SiCss3 size='20px' color='rgb(78,201,196)' />},
     
    ],
      description:
        "This is the exact clone of website Famous Footwear which is one of the leading Ecommerce websites for shopping of footwear ",
      features: [],
      images: "https://fahisayub.github.io/static/media/datesandnutsapp.cd3710cfe056e2789b80.png",
      gif: "",
      projectTitle: "Famous Footwear",
    },
    {
      id: 2,
      livelink: "https://spectacular-klepon-4f3a2c.netlify.app/",
      github: "https://github.com/pranshushuklagithub/travelious-clone",
      techStack: [ {id:1,skill:'HTML5',img:<AiFillHtml5 size='20px' color='rgb(233,89,35)' />},
      {id:2,skill:'CSS3',img:<SiCss3 size='20px' color='blue' />},
      {id:3,skill:'JavaScript',img:<SiJavascript size='20px' color='orange' />},
      {id:4,skill:'React JS',img:<SiReact size='20px' color='skyblue' />},
      {id:5,skill:'Chakra UI',img:<SiChakraui size='20px' color='rgb(78,201,196)' />}, 
    ],
      description:
        "Travellious is a premier travel website that offers a wide array of tour packages to destinations all over the world.",
      features: [],
      images: "https://fahisayub.github.io/static/media/datesandnutsapp.cd3710cfe056e2789b80.png",
      gif: "",
      projectTitle: "Travellious",
    },
    {
      id: 3,
      livelink: "https://bright-taffy-2146bc.netlify.app/home",
      github: "https://github.com/khushi627jain/Quikr-Bazar",
      techStack: [  {id:1,skill:'HTML',img:<AiFillHtml5 size='20px' color='#e2660f' />},
      {id:2,skill:'Javascript',img:<SiJavascript size='20px' color='orange' />},
      {id:3,skill:'Css',img:<SiCss3 size='20px' color='rgb(78,201,196)' />},
     
    ],
      description:
        "QuikrBazaar is a popular online platform for buying and selling a wide range of products and services.",
      features: [],
      images: "https://fahisayub.github.io/static/media/datesandnutsapp.cd3710cfe056e2789b80.png",
      gif: "",
      projectTitle: "QuikrBazaar",
    },
    // {
    //   id: 4,
    //   livelink: "https://chimerical-empanada-f4a3f8.netlify.app/",
    //   github: "https://github.com/fahisayub/BlueHeavenClone",
    //   techStack: [ {id:1,skill:'HTML5',img:<AiFillHtml5 size='20px' color='rgb(233,89,35)' />},
    //   {id:2,skill:'CSS3',img:<SiCss3 size='20px' color='blue' />},
    //   {id:3,skill:'JavaScript',img:<SiJavascript size='20px' color='orange' />},],
    //   description:
    //     "IndiaMART is an Indian e-commerce company that provides B2B and customer to customer sales services via its web portal. ",
    //   features: [],
    //   images: "https://fahisayub.github.io/static/media/datesandnutsapp.cd3710cfe056e2789b80.png",
    //   gif: "",
    //   projectTitle: "IndiaMART Clone",
    // },
  ];

  return (
    <Container id='Projects' maxW="90%"  margin='auto' padding='0px'  marginTop='50px'>

 <h1 className="tagName">PROJECTS</h1>
    <Container maxW="100%" 
      gap='20px' margin='auto' p='0px' marginTop='50px'>
      {projects.map((project) => {
        return <MyProjectCard key={project.id} {...project} />;
      })}
    </Container>
    </Container>
  );
};

export default Projects;
