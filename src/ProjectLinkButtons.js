import React from "react";
import { SiGithub } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
import { Button, Divider, Flex } from "@chakra-ui/react";
const ProjectLinkButtons = ({ livelink, github }) => {
  return (
    <Flex
    margin="auto"
    mt='.5em'
    w={['120px','200px']}
gap='5px'
>
      <Button
      className="project-deployed-link"
        as="a"
        target="_blank"
        bg="#fa4a6f"
        color="white"
        m="auto"
        size={['xs',"md"]}
        href={livelink}
        _hover={{boxShadow:'1px 1px 10px black'}}
        data-aos="fade-right" data-aos-duration="5000"
      >
        <FiExternalLink     data-aos="fade-right" data-aos-duration="5000" /> Live
      </Button>
<Divider orientation="vertical" />
      <Button
      className="project-github-link"
        as="a"
        target="_blank"
        bg="blackAlpha.700"
        color="white"
        m="auto"
        size={['xs',"md"]}
        href={github}
        data-aos="fade-left" data-aos-duration="5000"
        _hover={{bg: "blackAlpha.900" , boxShadow:'1px 1px 10px  #fa4a6f' }}
      >
        <SiGithub  data-aos="fade-left" data-aos-duration="5000" />
         Code
      </Button>
    </Flex>
  );
};

export default ProjectLinkButtons;
