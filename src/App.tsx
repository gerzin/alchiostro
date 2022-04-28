import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Menu } from './menu/Menu';
import Container from 'react-bootstrap/Container'
import Footer from './Footer'
import Carousel2 from './carousel/Carousel'


function App() {

  return (

    <div className="App">
      <Container fluid className="menu-container">
        <Menu></Menu>
      </Container>
      <Footer></Footer>
    </div >


  );
}

export default App;
