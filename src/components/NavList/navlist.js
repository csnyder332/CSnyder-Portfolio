import React from "react";
import { NavLink, Nav, Navbar, Container} from 'react-bootstrap';
// import { BsLinkedin } from 'react-icons/fa';


function NavList() {
  return (
    <Navbar bg="dark" variant="dark" sticky="top">
    <Container>
    <Navbar.Brand>Chris Snyder</Navbar.Brand>
    
    <Nav className="me-auto">
      <NavLink href="#About">About</NavLink>
      <NavLink href="#Projects">Projects</NavLink>
      <NavLink href="#Skills">Skills</NavLink>
      <NavLink href="#Resume">Resume</NavLink>
      <NavLink href="#Contact">Contact</NavLink>
      {/* <NavLink src={BsLinkedin}></NavLink> */}

      
      
    </Nav>
    </Container>
  </Navbar>
  
  );
}
export default NavList;
