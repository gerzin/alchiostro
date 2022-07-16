import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import MenuItem from './MenuItem';

import bibite from '../data/bibite.json'
import vinibianchi from '../data/vinobianco.json'
import vinirossi from '../data/vinorosso.json'
import birre from '../data/birre.json'
import prosecchi from '../data/prosecco.json'
import '../styles/CommonSections.scss'


function Bevande() {

    return (
        <Container fluid>
            <Container fluid className='menu-section-name'><div className='unselectable'>Bibite</div></Container>
            <Container fluid>
                {bibite.map(
                    (dish, index) => (
                        <MenuItem {...dish}>
                        </MenuItem>
                    )
                )}
            </Container>
            <Container fluid className='menu-section-name'><div className='unselectable'>Vini Bianchi</div></Container>
            <Container fluid>
                {vinibianchi.map(
                    (dish, index) => (
                        <MenuItem {...dish}>
                        </MenuItem>
                    )
                )}
            </Container>
            <Container fluid className='menu-section-name'><div className='unselectable'>Vini Rossi</div></Container>
            <Container fluid>
                {vinirossi.map(
                    (dish, index) => (
                        <MenuItem {...dish}>
                        </MenuItem>
                    )
                )}
            </Container>
            <Container fluid className='menu-section-name'><div className='unselectable'>Prosecchi</div></Container>
            <Container fluid>
                {prosecchi.map(
                    (dish, index) => (
                        <MenuItem {...dish}>
                        </MenuItem>
                    )
                )}
            </Container>
            <Container fluid className='menu-section-name'><div className='unselectable'>Birre</div></Container>
            <Container fluid>
                {birre.map(
                    (dish, index) => (
                        <MenuItem {...dish}>
                        </MenuItem>
                    )
                )}
            </Container>


        </Container>
    )
}

export default Bevande;