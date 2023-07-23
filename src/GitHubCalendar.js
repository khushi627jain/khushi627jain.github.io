import React, { useEffect } from 'react';
import GitHubCalendar from 'github-calendar';





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
