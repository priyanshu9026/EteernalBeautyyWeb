import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Navbar.css"

const Navbars = () => {
  return (
    <div>
    <Navbar expand="lg" bg='transparent' className="bg-body-transparent">
      <Container fluid className='navs' >
        <img className='logo' src="/assets/logo.png" alt='logo' />
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className='bg-drop' id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '150%' }}
            navbarScroll
          >
            <Nav.Link href="#action1">About</Nav.Link>
            <NavDropdown title="Services" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">My Beauty</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Beauty Things
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Properties
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action2">Contact</Nav.Link>
            <Nav.Link className='bg-primary card' href="#" >
              +919026897058
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbars
