import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SocialIcon } from 'react-social-icons';

function Footer() {
  return (
    
      <Container className="footer text-center fixed-bottom">
        <Row id="social-icons">
          <Col>
          <SocialIcon url="https://github.com/csnyder332" target="_blank" rel="noopener noreferrer" /> <SocialIcon url="https://www.linkedin.com/in/chris-snyder-642192227/" target="_blank" rel="noopener noreferrer" />
         <br></br>
        </Col>
        <h4>© 2022 Chris Snyder</h4>
        </Row>
      </Container>
    );
  }
export default Footer;
