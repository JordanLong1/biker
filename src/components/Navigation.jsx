import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function Navigation() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">All Bikes</Nav.Link>
          <Nav.Link href="#pricing">My Bikes</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}

export default Navigation;
