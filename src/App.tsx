import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Menu } from './menu/Menu';
import { RestaurantName } from './RestaurantName';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Footer from './Footer'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Container>
          <RestaurantName></RestaurantName>
        </Container>



        <Container>
          <ButtonToolbar className="justify-content-center">

            <Button className="btn-space" href="#menu-header-id" variant='primary'>Menu</Button>{' '}


            <DropdownButton as={ButtonGroup} variant="primary" id="dropdown-basic-button" title="Contattaci">
              <Dropdown.Item href="tel:3312486953">3312486953</Dropdown.Item>
              <Dropdown.Item href="https://wa.me/393312486953">whatsapp</Dropdown.Item>
              <Dropdown.Item href="#/action-3">indirizzo email</Dropdown.Item>
            </DropdownButton>{' '}


          </ButtonToolbar>
        </Container>

      </header>
      <Menu></Menu>
      <br></br>
      <Footer></Footer>
    </div >


  );
}

export default App;
