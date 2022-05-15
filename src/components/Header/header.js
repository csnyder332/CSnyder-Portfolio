import React from "react";
import NavList from "../NavList/navlist";
import {Container, Row, Col} from "react-bootstrap";
import "./header.css";


function Header(props) {
	const {currentTab, setCurrentTab} = props;

	return (
		<Container fluid className="p-0">
			<Row>
            <header>
				<Col className=" header text-left" md={12}>
				<div>
					<h1>Chris Snyder</h1>
					</div>
				</Col>
                </header>
					<div>
						<NavList currentTab={currentTab} setCurrentTab={setCurrentTab}></NavList>
					</div>
			</Row>
		</Container>
	);
}

export default Header;