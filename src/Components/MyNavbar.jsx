import React from "react"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"

const MyNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">
          {" "}
          <img
            className="img-fluid "
            src="https://www.recyclehero.de/assets/logo.png"
            alt=""
            style={{ width: "200px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#deets">Customers</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Help
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Support
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNavbar
