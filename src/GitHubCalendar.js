<<<<<<< HEAD
import React, { useEffect } from 'react';
import GitHubCalendar from 'github-calendar';
=======
import { Box, Center } from '@chakra-ui/react';
import React, { useEffect } from 'react';

import GitHubCalendar from 'react-github-calendar';
>>>>>>> 176c626ac5fc63c21c27f8a770851847a590e351




<<<<<<< HEAD

const GithubCalendar = () => {
  useEffect(() => {
    
    const username = 'khushi627jain';




  
    GitHubCalendar(".calendar","khushi627jain");

   
    GitHubCalendar(".calendar", username, { responsive: true });
  }, []);

  return (
    <div className="calendar">
      {/* Loading stuff */}
      Loading the data just for you.
    </div>
  );
};

export default GithubCalendar;
=======
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
>>>>>>> 176c626ac5fc63c21c27f8a770851847a590e351















<<<<<<< HEAD

// import React, { Component, createRef } from 'react';
// import GitHubCalendar from 'github-calendar';
// import PropTypes from 'prop-types';

// import './style.css';
// import { Container, Heading } from '@chakra-ui/react';

// export default class GithubCalendar extends Component {
//   static propTypes = {
//     name: PropTypes.string.isRequired,
//   };

//   calendarContainerRef = createRef(); // Use React.createRef() to create a ref

//   componentDidMount() {
//     GitHubCalendar(this.calendarContainerRef.current, this.props.name, { responsive: true });
//   }

//   render() {
//     return (
//       <div id="statistics">
//         <h1 className='tagName' data-aos="fade-down" data-aos-duration="1000">Statistics</h1>
//         <Container
//           data-aos="fade-right" 
//           data-aos-duration="1000"
//           maxW={['full','80%']} 
//           bg='#fa4a6f'
//           mt='30px'
//           color="#333"
//           fontWeight={"600"}
//           fontSize={"3xl"}
//           borderRadius='20px'
//          className="react-activity-calendar"
//         >
//           <Heading>My GitHub Calendar</Heading>
//           <Container
//             maxW='full' marginTop={"10px"} p="10px" 
//             className={
//               'calendar' + (this.props.className ? ' ' + this.props.className : '')
//             }
//             {...this.props}
//             ref={this.calendarContainerRef} // Use the created ref here
//           />
//         </Container>
//       </div>
//     );
//   }
// }
=======
>>>>>>> 176c626ac5fc63c21c27f8a770851847a590e351
