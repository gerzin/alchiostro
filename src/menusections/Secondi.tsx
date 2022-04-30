import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import secondi from '../data/secondipiatti.json'
import MenuItem from './MenuItem';



function Secondi() {

    return (
        <Container fluid>
            {secondi.map(
                (dish, index) => (
                    <MenuItem {...dish}>
                    </MenuItem>
                )
            )}
        </Container>
    )
}

export default Secondi;