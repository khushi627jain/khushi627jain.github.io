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
        <div className='satistics' id="satistics">

        <h1 className='tagName'>SATISTICS</h1>
      <Container 
      maxW={['full','80%']} 
      bg='#fa4a6f'
      my='60px'
      color="#333"
      fontWeight={"600"}
borderRadius='20px'
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