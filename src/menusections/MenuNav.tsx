import React from "react";
import '../styles/MenuItem.scss'
import { Col, Nav, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'


export default class MenuNav extends React.Component {
    render() {

        return (
            <Nav fill >

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

                <Nav.Item>
                    <LinkContainer to="/pizze">
                        <Nav.Link>Pizze</Nav.Link>
                    </LinkContainer>
                </Nav.Item>

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
            </Nav>
        )
    }
}