

import React from "react";
import {
  Container,
  Box,
  Heading,
  Link,Divider,
  IconButton,
  useDisclosure,
  VStack,
  Spacer,
  Button,
} from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";
import { DownloadIcon, HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { getDisclosureProps, getButtonProps } = useDisclosure();

  const buttonProps = getButtonProps();
  const disclosureProps = getDisclosureProps();
  const links = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Statistics",
    "Contacts",
  ];
    const classes=[
    "nav-link home",
    "nav-link about",
    "nav-link skills",
    "nav-link projects",
    "nav-link-stat",
    "nav-link contact",
  ];
  const toLink=[
    "home","about","skills",
    "projects","statistics","contact"
  ]
  
<<<<<<< HEAD
=======
  const onClickhandler = () => {
    return window.open(
      "https://drive.google.com/file/d/1jEsvQa8I4JQwZzc7XmSjWZ94s6Umq-W7/view?usp=drive_link",
      "_blank"
    );
  };

>>>>>>> 176c626ac5fc63c21c27f8a770851847a590e351
  return (
    <Container
    id="nav-menu"
      h="80px"
      marginBottom="50px"
      pos="fixed"
      zIndex="2"
      padding="20px"
<<<<<<< HEAD
      maxW="100%"
      
=======
       maxW="100%"
>>>>>>> 176c626ac5fc63c21c27f8a770851847a590e351
      display="flex"
      justifyContent="space-between"
      bg="gray.800"
      borderRadius="20px"
      color="black"
      shadow="base"
    >
      <Box
        as={ScrollLink}
        to="home"
        spy={true}
        smooth={true}
        offset={-80}
        color="#fa4a6f"
        duration={400}
      >
        <Heading marginTop={0} fontFamily="cursive" 
      
         cursor="pointer" >
         Deepshikha 
        </Heading>
      </Box>
      <Spacer />
      <Box
        display={["none", "none", "none", "flex", "flex"]}
        w="50%"
        justifyContent="space-evenly"
      >
        {links.map((navlink, i) => {
          return (
            <Link
              as={ScrollLink}
              key={i}
              to= {toLink[i]}
              spy={true}
              smooth={true}
              offset={-80}
              duration={400}
              p="5px"
              m="auto"
              className={classes[i]}
              fontSize={["10px","17px","16px","18px"]}
              color="#fa4a6f"
              cursor="pointer"
              // w="100px"
              _hover={{ bg:"#fa4a6f",color:"#333", borderRadius: "10px" ,textDecoration:"underline" }}
            >
              {navlink}
            </Link>
          );
        })}
      </Box>  
        <Link class="nav-link resume">
        <Button
<<<<<<< HEAD
          display={["none", "none", "none", "flex", "flex"]}
          borderRadius=".8rem"
          id="resume-button-1"
          size={["md", "md"]}
          margin="auto"
          as={Link}
          target="_blank"
          bg="white"
          color="#fa4a6f"
          _hover={{ bg: "#fa4a6f", color: "black" }}
          href="./Deepshikha_jain_Resume.pdf"
          download={true}
        
        >
          <DownloadIcon id="resume-link-1" marginRight="5px" />
          Resume
        </Button>
=======
  display={["none", "none", "none", "flex", "flex"]}
  borderRadius=".8rem"
  id="resume-button-1"
  size={["md", "md"]}
  margin="auto"
  as={Link}
  target="_blank"
  bg="white"
  color="#fa4a6f"
  _hover={{ bg: "#fa4a6f", color: "black" }}
  //  href="/Deepshikha_jain_Resume.pdf"
  download={true} // Add the download attribute to trigger the download
  onClick={onClickhandler}
>
  <DownloadIcon id="resume-link-1" marginRight="5px" />
  Resume
</Button>
>>>>>>> 176c626ac5fc63c21c27f8a770851847a590e351
      </Link>
      <Box 
        paddingRight={"10px"}
        >
        <IconButton
          float="right"
          variant="outline"
          colorScheme="#fa4a6f"
          color={"#fa4a6f"}
        
          {...buttonProps}
          display={["flex", "flex", "flex", "none", "none"]}
        >
          <HamburgerIcon />
        </IconButton>
        <VStack
          marginTop="40px"
          {...disclosureProps}
          bg="#fa4a6f"
          padding="5px"
          borderRadius="5px"
          display={["flex", "flex", "flex", "none", "none"]}
        >
          {links.map((navlink, i) => {
            return (
              <Link
                as={ScrollLink}
                key={i}
                {...buttonProps}
                width="100%"
                color="#333"
                borderRadius="5px"
                fontSize={["18px"]}
                to= {toLink[i]}
                spy={true}
                mt="5px" mb="10px"
                smooth={true}
             
                offset={-80}
                duration={400}
                cursor="pointer"
              >
                {navlink}
              
           
                <Box w="100px" 
                margin={"auto"} 
                 borderTop={"2px solid black"}></Box>
              </Link>
            );
          })}
         <Button
            margin="auto"
            as={Link}
            target="_blank"    
            fontSize={"3xl"}
            variant="outline"
            color="#fa4a6f"
            bg="white"
            p="15px"
            border="1px"
            borderRadius="15px"
<<<<<<< HEAD
            href="./Deepshikha_jain_Resume.pdf"
            download={true} 
=======
            href="/Deepshikha_jain_Resume.pdf"
            download={true} 
            onClick={onClickhandler}
>>>>>>> 176c626ac5fc63c21c27f8a770851847a590e351
          >
            <DownloadIcon marginRight="5px" 
             />
            Resume
          </Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default Navbar;

// remove all commentys






