import React from "react";
import { Nav, Navbar, NavDropdown, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./NavBar.css";

function NavBar() {
	const goodbye = () => toast("See You Soon!!", { theme: "dark" });
	const route = useNavigate();
	const handleLogout = () => {
		localStorage.removeItem("token");
		route("/signin");
		goodbye();
	};
	return (
		<div className="NavDiv">
			<Navbar bg="lighgrey" color="white" className="Navbar">
				<Container>
					<Navbar.Brand href="#home">
						React-Bootstrap
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="#home">Home</Nav.Link>
							<Nav.Link href="#link">Link</Nav.Link>
							<NavDropdown
								title="Dropdown"
								id="basic-nav-dropdown"
							>
								<NavDropdown.Item href="#action/3.1">
									Action
								</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">
									Another action
								</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">
									Something
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">
									Separated link
								</NavDropdown.Item>
							</NavDropdown>
							<div className="logout">
								<Button onClick={handleLogout}>
									Logout
								</Button>
							</div>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}

export default NavBar;
