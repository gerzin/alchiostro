import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import MenuItem from './MenuItem';

import pizzerosse from '../data/pizzerosse.json'
import pizzebianche from '../data/pizzebianche.json'
import pizzealchiostro from '../data/pizzealchiostro.json'
import calzoni from '../data/calzonialforno.json'
import '../styles/CommonSections.scss'




function Pizze() {

    return (
        <Container fluid>
            <Container fluid className='menu-section-name'>Pizze "Al Chiostro"</Container>
            <Container fluid>
                {pizzealchiostro.map(
                    (dish, index) => (
                        <MenuItem {...dish}>
                        </MenuItem>
                    )
                )}
            </Container>
            <Container fluid className='menu-section-name'>Pizze Rosse</Container>
            <Container fluid>
                {pizzerosse.map(
                    (dish, index) => (
                        <MenuItem {...dish}>
                        </MenuItem>
                    )
                )}
            </Container>
            <Container fluid className='menu-section-name'>Pizze Bianche</Container>
            <Container fluid>
                {pizzebianche.map(
                    (dish, index) => (
                        <MenuItem {...dish}>
                        </MenuItem>
                    )
                )}
            </Container>
            <Container fluid className='menu-section-name'>Calzoni</Container>
            <Container fluid>
                {calzoni.map(
                    (dish, index) => (
                        <MenuItem {...dish}>
                        </MenuItem>
                    )
                )}
            </Container>

        </Container>
    )
}

export default Pizze;