import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Form, Button, Container } from 'react-bootstrap';

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    alert('Message Sent!');
    e.preventDefault();
    

    emailjs.sendForm('service_a7wj21a', 'template_rq3ji47', form.current, 'CmYYLvsw8CRtZIQR0')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
   <Container > 
      <Form className='w-75 mx-auto mt-4' ref={form} onSubmit={sendEmail}>
        <h1>Contact Me</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Name" name="name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" name="email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Message</Form.Label>
    <Form.Control type="textarea" rows="8" placeholder="Enter text" name="message"  />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    </Container>
  );
}

export default ContactForm;