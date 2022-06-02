import React from "react";
import { Card, Button, CardGroup, Container } from "react-bootstrap";
import pic from "../Projects/bootlegss.png";
import pic1 from "../Projects/calorie-counter.png";
import pic2 from "../Projects/ConstServices.png";
import pic3 from "../Projects/photo-port.png";
import "bootstrap/dist/css/bootstrap.min.css";

function Projects() {
  return (
    <Container className="prosection">
      <h1>Projects</h1>
      <CardGroup >
        <Card className="card-deck">
          <Card.Img src={pic1} className="img-fluid" alt="Card image" />
          <Card.Body>
            <Card.Title>Calorie Counter</Card.Title>
            <Card.Text>Calorie Counter</Card.Text>
            <Button
              variant="primary p-1 p-sm-2"
              href="https://csnyder332.github.io/Calorie-counter/"
              title="Bootleg"
            >
              Open page
            </Button>
          </Card.Body>
        </Card>

        <Card className="card-deck">
          <Card.Img src={pic2} className="img-fluid" alt="Card image" />
          <Card.Body>
            <Card.Title>Construction Services</Card.Title>
            <Card.Text>A full service painting/remodeling company. (In Progress)</Card.Text>
            <Button
              variant="primary p-1 p-sm-2"
              href="https://csnyder332.github.io/Jaqueline-site/"
              title="Bootleg"
            >
              Open page
            </Button>
          </Card.Body>
        </Card>

        {/* <div class="w-100 d-none d-md-block"></div> */}

        <Card className="card-deck">
          <Card.Img src={pic} className="img-fluid" alt="Card image" />
          <Card.Body>
            <Card.Title>bootleg</Card.Title>
            <Card.Text>A photo sharing app.</Card.Text>
            <Button
              variant="primary p-1 p-sm-2"
              href="https://group-project-bootleg.herokuapp.com/"
              title="Bootleg"
            >
              Open page
            </Button>
          </Card.Body>
        </Card>

        <Card className="card-deck">
          <Card.Img src={pic3} className="img-fluid" alt="Card image" />
          <Card.Body>
            <Card.Title>GeekTutors</Card.Title>
            <Card.Text>A React tutor finding app.</Card.Text>
            <Button
            variant="primary p-1 p-sm-2"
              href="https://geektutor-123.herokuapp.com/"
              title="GeekTutors"
            >
              Open page
            </Button>
          </Card.Body>
        </Card>
      </CardGroup>
    </Container>
  );
}
export default Projects;
