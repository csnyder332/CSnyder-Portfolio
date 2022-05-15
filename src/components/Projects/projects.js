import React from "react";
import { Card, Button, CardGroup, Container } from "react-bootstrap";
import Image from "../../components/Projects/bootlegss.png";
import Image1 from "../../components/Projects/calorie-counter.png";
import Image2 from "../../components/Projects/ConstServices.png";
import Image3 from "../../components/Projects/Comingsoon2.png";
import "bootstrap/dist/css/bootstrap.min.css";

function Projects() {
  return (
    <Container>
      <h1>Projects</h1>
      <CardGroup>
        <Card>
          <Card.Img src={Image} className="img-fluid" alt="Card image" />
          <Card.Body>
            <Card.Title>bootleg</Card.Title>
            <Card.Text>A photo sharing app.</Card.Text>
            <Button>Close</Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img src={Image1} className="img-fluid" alt="Card image" />
          <Card.Body>
            <Card.Title>Calorie Counter</Card.Title>
            <Card.Text>Calorie Counter</Card.Text>
            <Button>Close</Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img src={Image2} className="img-fluid" alt="Card image" />
          <Card.Body>
            <Card.Title>Construction Services</Card.Title>
            <Card.Text>A full service painting/remodeling company.</Card.Text>
            <Button>Close</Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img src={Image3} className="img-fluid" alt="Card image" />
          <Card.Body>
            <Card.Title>Coming Soon</Card.Title>
            <Card.Text>Coming Soon.</Card.Text>
            <Button>Close</Button>
          </Card.Body>
        </Card>
      </CardGroup>
    </Container>
  );
}
export default Projects;
