import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import antipasti from '../data/antipasti.json'
import MenuItem from './MenuItem';
import '../styles/CommonSections.scss'



function Antipasti() {

    return (
        <Container>
            <Container fluid className='menu-section-name'><div className='unselectable'>Antipasti</div></Container>
            <Container fluid>
                {antipasti.map(
                    (dish, index) => (
                        <MenuItem {...dish}>
                        </MenuItem>
                    )
                )}
            </Container>
        </Container>

    )
}

export default Antipasti;