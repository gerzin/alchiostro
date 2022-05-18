import React from "react";
import '../styles/MenuItem.scss'
import { Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'


export default class MenuNav extends React.Component {
    render() {

        return (
            <Navbar bg="transparent" expand="lg" className="justify-content-center">

                <Nav.Item>
                    <LinkContainer to="/antipasti">
                        <Nav.Link><div className="menu-link">Antipasti</div></Nav.Link>
                    </LinkContainer>
                </Nav.Item>

                <Nav.Item>
                    <LinkContainer to="/primi">
                        <Nav.Link><div className="menu-link">Primi</div></Nav.Link>
                    </LinkContainer>
                </Nav.Item>

                <Nav.Item>
                    <LinkContainer to="/secondi">
                        <Nav.Link><div className="menu-link">Secondi</div></Nav.Link>
                    </LinkContainer>
                </Nav.Item>

                <Nav.Item>
                    <LinkContainer to="/contorni">
                        <Nav.Link><div className="menu-link">Contorni</div></Nav.Link>
                    </LinkContainer>
                </Nav.Item>


                <NavDropdown title="Pizze" id="basic-nav-dropdown" >
                    <LinkContainer to="/pizze">
                        <Nav.Link><div className="menu-link-dropdown">Tutte</div></Nav.Link>
                    </LinkContainer>
                    <NavDropdown.Divider></NavDropdown.Divider>
                    <LinkContainer to="/pizzealchiostro">
                        <Nav.Link><div className="menu-link-dropdown">Pizze "Al Chiostro"</div></Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/pizzerosse">
                        <Nav.Link><div className="menu-link-dropdown">Pizze Rosse</div></Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/pizzebianche">
                        <Nav.Link><div className="menu-link-dropdown">Pizze Bianche</div></Nav.Link>
                    </LinkContainer>

                    <LinkContainer to="/pizzecalzoni">
                        <Nav.Link><div className="menu-link-dropdown">Calzoni e Panuozzi</div></Nav.Link>
                    </LinkContainer>
                </NavDropdown>

                <Nav.Item>
                    <LinkContainer to="/dolci">
                        <Nav.Link><div className="menu-link">Dolci</div></Nav.Link>
                    </LinkContainer>
                </Nav.Item>

                <Nav.Item>
                    <LinkContainer to="/bevande">
                        <Nav.Link><div className="menu-link">Bevande</div></Nav.Link>
                    </LinkContainer>
                </Nav.Item>

            </Navbar>
        )
    }
}