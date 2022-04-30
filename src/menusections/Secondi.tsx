import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import secondi from '../data/secondipiatti.json'
import MenuItem from './MenuItem';
import '../styles/CommonSections.scss'



function Secondi() {

    return (
        <Container fluid>
            <Container fluid className='menu-section-name'>Secondi</Container>
            <Container fluid>
                {secondi.map(
                    (dish, index) => (
                        <MenuItem {...dish}>
                        </MenuItem>
                    )
                )}
            </Container>
        </Container>

    )
}

export default Secondi;