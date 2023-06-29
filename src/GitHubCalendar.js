import React, { Component } from 'react';
import GitHubCalendar from 'github-calendar';
import PropTypes from 'prop-types';

import './style.css';
import { Container, Heading } from '@chakra-ui/react';

export default class GithubCalendar extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    
  };
  componentDidMount() {
    GitHubCalendar(this.refs.container, this.props.name,{responsive:true});
  }
  render() {
    return (
        <div  id="statistics">

        <h1 className='tagName' data-aos="fade-down" data-aos-duration="1000">Statistics</h1>
      <Container 
      data-aos="fade-right" data-aos-duration="1000"
      maxW={['full','80%']} 
      bg='#fa4a6f'
      mt='30px'
      color="#333"
      fontWeight={"600"}
      fontSize={"3xl"}
borderRadius='20px'
className="react-activity-calendar"
      >
<Heading>My GitHub Calendar</Heading>
      <Container
      maxW='full' marginTop={"10px"} p="10px" 
      className={
        'calendar' + (this.props.className ? ' ' + this.props.className : '')
      }
      {...this.props}
      ref="container"
      />
      </Container>
      </div>
    );
  }
}