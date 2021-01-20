import React from 'react'; 
import {Navbar, Form, FormControl, Button, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation() {
    return (
      <>
        <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
      </>
    )
}

export default Navigation