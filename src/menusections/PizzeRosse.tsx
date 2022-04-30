import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import MenuItem from './MenuItem';

import pizzerosse from '../data/pizzerosse.json'
import '../styles/CommonSections.scss'




function PizzeRosse() {

    return (
        <Container fluid>
            <Container fluid className='menu-section-name'>Pizze Rosse</Container>
            <Container fluid>
                {pizzerosse.map(
                    (dish, index) => (
                        <MenuItem {...dish}>
                        </MenuItem>
                    )
                )}
            </Container>

        </Container>
    )
}

export default PizzeRosse;