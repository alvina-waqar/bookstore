import React from 'react'
import { Container, Nav, Navbar,  } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function MyNavbar() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to={"/home"} >Home</Nav.Link>
                            <Nav.Link as={Link} to={"/addbook"}>AddBook</Nav.Link>
                            <Nav.Link as={Link} to={"/book"}>Books</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default MyNavbar
