import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu';
import Container from 'react-bootstrap/Container'
import Footer from './Footer'
import { Route, Routes, Link } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import Home from './Home';



class App extends React.Component {

  render() {
    return (

      <div className="App" >
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="menu" element={<Menu />} />
          </Routes>
        </div>
      </div >

    );
  }

}

export default App;
