import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu';
import { Route, Routes, Link } from "react-router-dom";
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
