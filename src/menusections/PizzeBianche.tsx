import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import MenuItem from './MenuItem';

import pizzebianche from '../data/pizzebianche.json'
import '../styles/CommonSections.scss'




function PizzeBianche() {

    return (
        <Container fluid>
            <Container fluid className='menu-section-name'><div className='unselectable'>Pizze Bianche</div></Container>
            <Container fluid>
                {pizzebianche.map(
                    (dish, index) => (
                        <MenuItem {...dish}>
                        </MenuItem>
                    )
                )}
            </Container>

        </Container>
    )
}

export default PizzeBianche;