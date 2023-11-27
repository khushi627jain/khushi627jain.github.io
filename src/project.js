import React from "react";
import { Container } from "@chakra-ui/react";
import { SiChakraui, SiReact, SiJavascript, SiCss3, } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import MyProjectCard from "./MyProjectCard";
import quikr from "./quikrbazaar.png";
import famous from "./famousfootwear.png"
import travel from "./travellious.png"
import { DiMongodb } from "react-icons/di"
import { FaNodeJs } from "react-icons/fa"
import meghkhush from "./meghkhush.png"

const Projects = () => {
  const projects = [
    {
      id: 4,
      livelink: "https://meghkhushcreation.netlify.app/",
      github: "https://github.com/khushi627jain/travellious-clone",
      techStack: [{ id: 1, skill: 'HTML5', img: <AiFillHtml5 size='20px' color='rgb(233,89,35)' /> },
      { id: 2, skill: 'CSS3', img: <SiCss3 size='20px' color='blue' /> },
      { id: 3, skill: 'JavaScript', img: <SiJavascript size='20px' color='orange' /> },
      { id: 4, skill: 'React JS', img: <SiReact size='20px' color='skyblue' /> },
      { id: 5, skill: 'Node JS', img: <FaNodeJs size='20px' color='rgb(78,201,196)' /> },
      { id: 6, skill: 'Mongo DB', img: <DiMongodb size='20px' color='rgb(78,201,196)' /> },
      ],
      description:
        "Dreams Turned Reality: My Special Gift and Decor Endeavor.This website belongs to my own online business",
      features: [],
      images: meghkhush,
      gif: "",
      projectTitle: "MeghKhush_Creation",
    },
    {
      id: 1,
      livelink: "https://merry-cupcake-642e8f.netlify.app/",
      github: "https://github.com/pankajsbisht143/famousfootwear",
      techStack: [{ id: 1, skill: 'HTML', img: <AiFillHtml5 size='20px' color='#e2660f' /> },
      { id: 2, skill: 'Javascript', img: <SiJavascript size='20px' color='orange' /> },
      { id: 3, skill: 'Css', img: <SiCss3 size='20px' color='rgb(78,201,196)' /> },

      ],
      description:
        "This is the exact clone of website Famous Footwear which is one of the leading Ecommerce websites for shopping of footwear ",
      features: [],
      images: famous,
      gif: "",
      projectTitle: "Famous Footwear",
    },
    {
      id: 2,
      livelink: "https://travellious-clone-frontend.vercel.app/",
      github: "https://github.com/khushi627jain/travellious-clone-frontend",
      techStack: [{ id: 1, skill: 'HTML5', img: <AiFillHtml5 size='20px' color='rgb(233,89,35)' /> },
      { id: 2, skill: 'CSS3', img: <SiCss3 size='20px' color='blue' /> },
      { id: 3, skill: 'JavaScript', img: <SiJavascript size='20px' color='orange' /> },
      { id: 4, skill: 'React JS', img: <SiReact size='20px' color='skyblue' /> },

      { id: 5, skill: 'Node JS', img: <FaNodeJs size='20px' color='rgb(78,201,196)' /> },
      { id: 6, skill: 'Mongo DB', img: <DiMongodb size='20px' color='rgb(78,201,196)' /> },
      ],
      description:
        "Travellious is a premier travel website that offers a wide array of tour packages to destinations all over the world.",
      features: [],
      images: travel,
      gif: "",
      projectTitle: "Travellious",
    },
    {
      id: 3,
      livelink: "https://bright-taffy-2146bc.netlify.app/home",
      github: "https://github.com/khushi627jain/Quikr-Bazar",
      techStack: [{ id: 1, skill: 'HTML', img: <AiFillHtml5 size='20px' color='#e2660f' /> },
      { id: 2, skill: 'Javascript', img: <SiJavascript size='20px' color='orange' /> },
      { id: 3, skill: 'Css', img: <SiCss3 size='20px' color='rgb(78,201,196)' /> },

      ],
      description:
        "QuikrBazaar is a popular online platform for buying and selling a wide range of products and services.",
      features: [],
      images: quikr,
      gif: "",
      projectTitle: "QuikrBazaar",
    },
    // {
    //   id: 4,
    //   livelink: "https://bright-taffy-2146bc.netlify.app/home",
    //   github: "https://github.com/khushi627jain/Quikr-Bazar",
    //   techStack: [  {id:1,skill:'HTML',img:<AiFillHtml5 size='20px' color='#e2660f' />},
    //   {id:2,skill:'Javascript',img:<SiJavascript size='20px' color='orange' />},
    //   {id:3,skill:'Css',img:<SiCss3 size='20px' color='rgb(78,201,196)' />},

    // ],
    //   description:
    //     "QuikrBazaar is a popular online platform for buying and selling a wide range of products and services.",
    //   features: [],
    //   images: quikr,
    //   gif: "",
    //   projectTitle: "QuikrBazaar",
    // },

  ];

  return (
    <Container id="projects" maxW="85%" margin='auto' padding='0px'
    marginTop='50px' mb={["50px", "100px"]}>

      <h1 data-aos="fade-down" data-aos-duration="1000" className="tagName">Projects</h1>
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
