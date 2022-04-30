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
                                <NavDropdown.Item href="tel:+393757445080">tel: 3757445080</NavDropdown.Item>
                                <NavDropdown.Item href="https://wa.me/+393757445080">whatsapp</NavDropdown.Item>
                                <NavDropdown.Item href="mailto:alchiostrobuccino@gmail.com">e-mail</NavDropdown.Item>
                                <NavDropdown.Item href="https://www.google.it/maps/place/Al+Chiostro+Buccino/@40.6329099,15.370092,17z/data=!4m12!1m6!3m5!1s0x13396b9bb99067b9:0xe294947984f80194!2sAl+Chiostro+Buccino!8m2!3d40.632475!4d15.3705335!3m4!1s0x13396b9bb99067b9:0xe294947984f80194!8m2!3d40.632475!4d15.3705335">raggiungici</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }

}

export default CommonNavbar;
