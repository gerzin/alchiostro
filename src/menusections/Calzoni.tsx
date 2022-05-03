import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import MenuItem from './MenuItem';

import calzoni from '../data/calzonialforno.json'
import '../styles/CommonSections.scss'




function Calzoni() {

    return (
        <Container fluid>
            <Container fluid className='menu-section-name'><div className='unselectable'>Calzoni</div></Container>
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

export default Calzoni;