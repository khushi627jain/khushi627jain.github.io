import { Box, Center } from '@chakra-ui/react';
import React, { useEffect } from 'react';

import GitHubCalendar from 'react-github-calendar';




const Calendar = () => {
 
  return (
    <>
       <Box id="statistics">
       <h1  data-aos="fade-down" data-aos-duration="1000" className="tagName">
              {/* Discovering Me/ */}
            Statistics
              </h1>
              <Box mt="20px"></Box>
              <Center>
              <GitHubCalendar m="auto" username= "Khushi627jain" responsive={true} />
              </Center>
             
       </Box>
    </>
    
   
  );
};

export default Calendar;















