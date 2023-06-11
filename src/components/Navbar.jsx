import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavDropdown } from "react-bootstrap";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" id="nav">
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="/projects/react">React</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/projects/HTML-CSS">
                HTML/CSS
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/projects/typescript">
                TypeScript
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/projects/ssr">SSR</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link eventKey={2} href="/experience">
              Experience
            </Nav.Link>
            <Nav.Link eventKey={2} href="/contact">
              Contact
            </Nav.Link>
            <Nav.Link eventKey={2} href="/">
              About
            </Nav.Link>
            <Nav.Link eventKey={2} href="/testimonials">
              Testimonials
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
