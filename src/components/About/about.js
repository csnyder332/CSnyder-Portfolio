import React from 'react';
import { Container, Image } from 'react-bootstrap';
import './about';
import image from './me1.jpg'


function About() {
    return (
      
      
        <Container>
            <br></br>
            <h2 id='about'>Hi, I'm Chris Snyder. I am a new full stack developer with 8+ years of experience with software testing, and 5+ years with project management and analysis. I am excited to begin a career in development, creating content and solutions while utilizing my skills from other portions of the development cycle. I believe being able to connect and communicate with all types of team members, knowing where they come from, is a great asset.</h2>
            <Image src={image} style={{height:'25%',width:'25%'}} responsive className="img-fluid rounded-circle"/>
        </Container>
      
        
    
    );
    
}

export default About;
