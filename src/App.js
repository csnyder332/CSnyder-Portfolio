import React, { useState } from "react";
import NavList from "./components/NavList/navlist";
import About from "./components/About/about";
import ContactForm from "./components/Contact/contact";
import Projects from "./components/Projects/projects";
import Footer from "./components/Footer/footer";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/App'

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
        <NavList />
        <About />
        <Projects />
        <ContactForm />
        <Footer />
    </main>
  );
}

export default App;
