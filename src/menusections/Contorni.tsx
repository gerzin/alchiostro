import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import MenuItem from './MenuItem';

import contorni from '../data/contorni.json'
import '../styles/CommonSections.scss'


function Contorni() {

    return (
        <Container fluid>
            <Container fluid className='menu-section-name'>Contorni</Container>
            <Container fluid>
                {contorni.map(
                    (dish, index) => (
                        <MenuItem {...dish}>
                        </MenuItem>
                    )
                )}
            </Container>
        </Container>


    )
}

export default Contorni;