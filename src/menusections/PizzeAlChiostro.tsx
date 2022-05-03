import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import MenuItem from './MenuItem';

import pizzealchiostro from '../data/pizzealchiostro.json'
import '../styles/CommonSections.scss'




function PizzeAlChiostro() {

    return (
        <Container fluid>
            <Container fluid className='menu-section-name'><div className='unselectable'>Pizze "Al Chiostro"</div></Container>
            <Container fluid>
                {pizzealchiostro.map(
                    (dish, index) => (
                        <MenuItem {...dish}>
                        </MenuItem>
                    )
                )}
            </Container>

        </Container>
    )
}

export default PizzeAlChiostro;