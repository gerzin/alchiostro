import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import MenuItem from './MenuItem';

import dolci from '../data/dolci.json'


function Dolci() {

    return (

        <Container fluid>
            {dolci.map(
                (dish, index) => (
                    <MenuItem {...dish}>
                    </MenuItem>
                )
            )}
        </Container>

    )
}

export default Dolci;