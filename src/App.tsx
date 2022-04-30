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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="menu" element={<Menu section="primi" />} />
          <Route path="primi" element={<Menu section="primi" />} />
          <Route path="secondi" element={<Menu section="secondi" />} />
          <Route path="contorni" element={<Menu section="contorni" />} />
          <Route path="pizze" element={<Menu section="pizze" />} />
          <Route path="bevande" element={<Menu section="bevande" />} />
          <Route path="dolci" element={<Menu section="dolci" />} />
        </Routes>
      </div >

    );
  }

}

export default App;
