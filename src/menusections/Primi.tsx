import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import primi from '../data/primipiatti.json'
import MenuItem from './MenuItem';
import '../styles/CommonSections.scss'



function Primi() {

    return (
        <Container>
            <Container fluid className='menu-section-name'>Primi</Container>
            <Container fluid>
                {primi.map(
                    (dish, index) => (
                        <MenuItem {...dish}>
                        </MenuItem>
                    )
                )}
            </Container>
        </Container>

    )
}

export default Primi;