import { Box, Icon } from '@chakra-ui/react';
import React from 'react';

const ProjectStack = ({techStack}) => {
    return (
        <Box className="project-tech-stack"
          display="grid"
          w={['100px','150px']}
          m='auto'
          gridTemplateColumns={[
            "repeat(3,1fr)",
            "repeat(3,1fr)",
            "repeat(3,1fr)",
            "repeat(3,1fr)",
            "repeat(3,1fr)",
          ]}
          gap={['5px',"10px"]}
        >
            
          {techStack?.map(({id,img,skill}) => {
            return (
              <Box
                key={id}
                borderRadius={['.5em',".8em"]}
                w={['30px',"40px"]}
                h={['30px',"40px"]}
                bg="white"
                textAlign="center"
                p={['5px',"8px"]}
                boxShadow="base"
              >
                <Icon  data-aos="zoom-out" data-aos-duration="5000"  boxSize={['20px',"30px"]}>{img}</Icon>
              </Box>
            );
          })}
        </Box>
    );
};

export default ProjectStack;