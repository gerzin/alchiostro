import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import MenuItem from './MenuItem';

import contorni from '../data/contorni.json'


function Contorni() {

    return (

        <Container fluid>
            {contorni.map(
                (dish, index) => (
                    <MenuItem {...dish}>
                    </MenuItem>
                )
            )}
        </Container>

    )
}

export default Contorni;