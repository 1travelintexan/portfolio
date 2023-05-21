import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" id="nav">
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="/" className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link eventKey={2} href="/experience">
              Experience
            </Nav.Link>
            <Nav.Link eventKey={2} href="/contact">
              Contact
            </Nav.Link>
            <Nav.Link eventKey={2} href="/about">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
