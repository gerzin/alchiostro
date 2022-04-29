import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container'
import Footer from './Footer'
import { Route, Routes, Link } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import CommonNavbar from './common/CommonNavbar';



class Menu extends React.Component {

    render() {
        return (
            <div className="App" >
                <CommonNavbar></CommonNavbar>
                <Container fluid className="menu-container">
                    Menu In Allestimento
                </Container>
            </div >

        );
    }

}

export default Menu;
