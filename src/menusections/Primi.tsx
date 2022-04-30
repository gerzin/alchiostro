import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import primi from '../data/primipiatti.json'
import MenuItem from './MenuItem';



function Primi() {

    return (
        <Container fluid>
            {primi.map(
                (dish, index) => (
                    <MenuItem {...dish}>
                    </MenuItem>
                )
            )}
        </Container>
    )
}

export default Primi;