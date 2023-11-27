import { Container, Divider, Heading, Img, Text,Box } from "@chakra-ui/react";
import React from "react";
import ProjectLinkButtons from "./ProjectLinkButtons";
import ProjectStack from "./ProjectStack";
const MyProjectCard = ({
  projectTitle,
  images,
  description,
  github,
  livelink,
  techStack,
}) => {
  return (
    <Container className="project-card" data-aos="fade-up" data-aos-duration="1000"
      maxW={["full", "full", "full", "full", "90%"]}
      mt="100px"
      display={["block", "block", "block", "flex", "flex"]}  
    >
      <Container
    
        transform="rotate(45deg)"
        borderRadius={["2em", "3em"]}
        height={["240px", "320px"]}
        w={["240px", "320px"]}
        margin="auto"
        zIndex={1}
        backgroundColor="#2d2c2c"
        border=" 0.25rem solid  #fa4a6f"
        _hover={{boxShadow:'5px 5px 20px  #fa4a6f'}}
      >
        <Container
          transform="rotate(-45deg)"
          color="#fa4a6f"
          height={["240px", "320px"]}
          w={["240px", "320px"]}
          marginLeft="-15px"
          py={["30px", "50px"]}
        >
          <Heading data-aos="fade-right" data-aos-duration="5000" className="project-title" fontFamily={"cursive"} fontWeight="bold" fontSize={["17px","19px","20px","20px", "20px"]}>
            {projectTitle}
          </Heading>
          <Box display="hidden" visibility={["hidden","hidden","hidden",,"hidden","inherit"]} > 
          <Divider borderColor="#fa4a6f" mt={["5%","4%","4%","5%","2%"]} /></Box>
         

          {" "}
          <Img
            src={images}
            // width={"100px"}
            // boxSize={"-moz-initial"}
            boxSize="border-box"
            width={"90%"}
            margin={"auto"} 
            _hover={[
              { transform: "scale(1.5)" },
              { transform: "scale(1.5)" },
              { transform: "scale(2)" },
              { transform: "scale(2.5)", ml: "150px" },
              { transform: "scale(2.5)", ml: "150px" },
            ]}
            borderRadius="10px"
          />
        </Container>
      </Container>

      <Container
     
        transform="rotate(45deg)"
        borderRadius={["2em", "3em"]}
        height={["200px", "280px"]}
        w={["200px", "280px"]}
        margin="auto"
        backgroundColor="#fa4a6f"
        border="0.25rem solid  #fa4a6f"
        _hover={{boxShadow:'5px 5px 20px  #fa4a6f'}}
      >
        {" "}
        <Container
          transform="rotate(-45deg)"
          height={["200px", "280px"]}
          w={["200px", "280px"]}
          px={["10px", "20px"]}
          
        >
          {" "}
          <Heading fontWeight="semibold" fontSize={["17px", "29px"]} margin="7px" data-aos="fade-down" data-aos-duration="5000">
            Summary
          </Heading>
          <Divider borderColor="#fa4a6f" w='100px' m='auto' />
          <Text data-aos="fade-up" data-aos-duration="5000" 
          className="project-description" margin={["2px","10px", "20px"]} 
          fontSize={["14px","17px","17px","18px","18px"]} h="100px">
            {description}
          </Text>
        </Container>
      </Container>

      <Container
  
        transform="rotate(45deg)"
        borderRadius={["2em", "3em"]}
        height={["150px", "250px"]}
        w={["150px", "250px"]}
        margin="auto"
        backgroundColor="#2d2c2c"
        border=" 0.25rem solid  #fa4a6f"
        _hover={{boxShadow:'5px 5px 20px  #fa4a6f'}}
      >
        {" "}
        <Container
          transform="rotate(-45deg)"
          color="#fa4a6f"
          marginLeft="-15px"
          height={["150px", "250px"]}
          w={["150px", "250px"]}
          p="0px"
          paddingTop={[".1em", "2em"]}
      
        >
          {" "}
          <Text
            fontWeight="semibold"
            w={["10em", "10em"]}
            ml={["4.5em", "3em"]}
       
            mb="-1px"
            // mt={["10px","0px","0px","0px","0px"]}
            fontSize={["8px", "17px"]}
            textAlign={"center"}
            justifyContent={"center"}
            data-aos="fade-down" data-aos-duration="5000"
          >
            Tech Stack Used:
          </Text>
          <ProjectStack techStack={techStack} />
          <ProjectLinkButtons livelink={livelink} github={github} />
        </Container>
      </Container>
      
    </Container>
  );
};

export default MyProjectCard;
