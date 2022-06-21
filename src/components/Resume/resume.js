import React from "react";
import { Container } from "react-bootstrap";
import PDF from "../Resume/CSnyder052422.pdf";

const Resume = () => (
  <Container className="resume">
  <embed className='mt-4'
    src={PDF}
    type="application/pdf"
    height={800}
    width={800}
    
  />
  </Container>
);

export default Resume;
