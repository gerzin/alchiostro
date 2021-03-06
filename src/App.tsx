import React from 'react';
import logo from './logo.svg';
import './styles/App.scss';
import Menu from './Menu';
import { Route, Routes, Link } from "react-router-dom";
import Home from './Home';
import ScrollerTop from './ScrollerTop';

class App extends React.Component {

  render() {
    return (

      <div className="App" >
        <ScrollerTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="menu" element={<Menu section="antipasti" />} />
            <Route path="antipasti" element={<Menu section="antipasti" />} />
            <Route path="primi" element={<Menu section="primi" />} />
            <Route path="secondi" element={<Menu section="secondi" />} />
            <Route path="contorni" element={<Menu section="contorni" />} />
            <Route path="pizze" element={<Menu section="pizze" />} />
            <Route path="bevande" element={<Menu section="bevande" />} />
            <Route path="dolci" element={<Menu section="dolci" />} />
            <Route path="pizzecalzoni" element={<Menu section="pizzecalzoni" />} />
            <Route path="pizzebianche" element={<Menu section="pizzebianche" />} />
            <Route path="pizzerosse" element={<Menu section="pizzerosse" />} />
            <Route path="pizzealchiostro" element={<Menu section="pizzealchiostro" />} />
          </Routes>
        </ScrollerTop>
      </div >

    );
  }

}

export default App;
