import React from "react";
import '../styles/MenuItem.scss'
import { Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'


export default class MenuNav extends React.Component {
    render() {

        return (
            <Navbar bg="transparent" expand="lg" className="justify-content-center">
                <Nav.Item>
                    <LinkContainer to="/primi">
                        <Nav.Link>Primi</Nav.Link>
                    </LinkContainer>
                </Nav.Item>

                <Nav.Item>
                    <LinkContainer to="/secondi">
                        <Nav.Link>Secondi</Nav.Link>
                    </LinkContainer>
                </Nav.Item>

                <Nav.Item>
                    <LinkContainer to="/contorni">
                        <Nav.Link>Contorni</Nav.Link>
                    </LinkContainer>
                </Nav.Item>


                <NavDropdown title="Pizze" id="basic-nav-dropdown">
                    <LinkContainer to="/pizze">
                        <Nav.Link>Tutte</Nav.Link>
                    </LinkContainer>
                    <NavDropdown.Divider></NavDropdown.Divider>
                    <LinkContainer to="/pizzealchiostro">
                        <Nav.Link>Pizze "Al Chiostro"</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/pizzerosse">
                        <Nav.Link>Pizze Rosse</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/pizzebianche">
                        <Nav.Link>Pizze Bianche</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to="/pizzecalzoni">
                        <Nav.Link>Calzoni</Nav.Link>
                    </LinkContainer>
                </NavDropdown>

                <Nav.Item>
                    <LinkContainer to="/dolci">
                        <Nav.Link>Dolci</Nav.Link>
                    </LinkContainer>
                </Nav.Item>

                <Nav.Item>
                    <LinkContainer to="/bevande">
                        <Nav.Link>Bevande</Nav.Link>
                    </LinkContainer>
                </Nav.Item>

            </Navbar>
        )
    }
}