import { Container, Divider, Heading, Img, Text } from "@chakra-ui/react";
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
    <Container
      maxW={["full", "full", "full", "full", "70%"]}
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
          <Heading fontWeight="bold" size={["sm", "md"]}>
            {projectTitle}
          </Heading>
          <Divider borderColor="#fa4a6f" my='10px' />

          {" "}
          <Img
            src={images}
            boxSize="border-box"
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
          <Heading fontWeight="semibold" fontSize={["17px", "29px"]} margin="7px">
            Summary
          </Heading>
          <Divider borderColor="#fa4a6f" w='100px' m='auto' />
          <Text margin={["10px", "20px"]} fontSize={["15px","18px"]} h="100px">
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
            ml={["2.3em", "3em"]}
            mb="6px"
            fontSize={["10px", "17px"]}
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
