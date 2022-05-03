import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import MenuItem from './MenuItem';

import dolci from '../data/dolci.json'
import '../styles/CommonSections.scss'


function Dolci() {

    return (
        <Container fluid>
            <Container fluid className='menu-section-name'><div className='unselectable'>Dolci</div></Container>
            <Container fluid>
                {dolci.map(
                    (dish, index) => (
                        <MenuItem {...dish}>
                        </MenuItem>
                    )
                )}
            </Container>
        </Container>


    )
}

export default Dolci;