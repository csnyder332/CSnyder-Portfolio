import React, { useState } from "react";
import Header from "./components/Header/header";
import About from "./components/About/about";
import ContactForm from "./components/Contact/contact";
import Projects from "./components/Projects/projects";
import Resume from "./components/Resume/resume"
import Footer from "./components/Footer/footer";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/App';
import '../src/custom.scss';



function App() {
  const [currentTab, setCurrentTab] = useState("about");

	const renderTab = () => {
		switch (currentTab) {
			case "about":
				return <About />;
			case "projects":
				return <Projects />;
			case "contact":
				return <ContactForm />;
				case "resume":
				return <Resume />;
			default:
				return null;
		}
	};


  return (
		<div>
			<Container fluid className="app">
				<Header currentTab={currentTab} setCurrentTab={setCurrentTab} className="p-0 m-0"></Header>
			</Container>
			<Container fluid>
				<main>{renderTab()}</main>
			</Container>
			<Container fluid>
				<section className="split"></section>
			</Container>
			<Footer />
			
		</div>
	);
}
  
export default App;

