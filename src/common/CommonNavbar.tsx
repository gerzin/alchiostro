import React from 'react';
import Container from 'react-bootstrap/Container'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'


/**
 * Navbar common to all sections
 */
class CommonNavbar extends React.Component {

    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/alchiostro">"Al Chiostro"</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">

                            <LinkContainer to="/">
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/menu">
                                <Nav.Link>Menu</Nav.Link>
                            </LinkContainer>

                            <NavDropdown title="Contattaci" id="basic-nav-dropdown">
                                <NavDropdown.Item href="tel:+393757445080">Tel: 3757445080</NavDropdown.Item>
                                <NavDropdown.Item href="https://wa.me/+393757445080">Whatsapp</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }

}

export default CommonNavbar;
