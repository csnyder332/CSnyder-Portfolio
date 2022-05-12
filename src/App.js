import React from "react";
import Nav from "./components/Nav/nav";
import About from "./components/About/about";
import ContactForm from "./components/Contact/contact";
import Projects from "./components/Projects/projects";
import Skills from "./components/Skills/skills";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
        <Nav />
        <About />
        <Projects />
        <Skills />
        <ContactForm />
        <Footer />
    </main>
  );
}

export default App;
