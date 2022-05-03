import React from 'react';
import './styles/App.scss';
import Container from 'react-bootstrap/Container'
import { Route, Routes, Link } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap'
import CommonNavbar from './common/CommonNavbar';
import CommonFooter from './common/CommonFooter';
import './styles/Menu.scss'
import MenuNav from './menusections/MenuNav';
import MenuBody from './menusections/MenuBody';
export type MenuProps = { section?: string }


class Menu extends React.Component<MenuProps> {

    render() {
        const { section } = this.props;

        return (
            <div className="App" >
                <CommonNavbar></CommonNavbar>

                <Container fluid className="menu-container">
                    <Container fluid >
                        <MenuNav></MenuNav>
                    </Container>

                    <MenuBody section={section}></MenuBody>
                </Container>
                <div className='coperto-div'>Coperto: 1.5€ (include caffè o liquore a fine pasto)</div>
                <CommonFooter></CommonFooter>
            </div >

        );
    }

}

export default Menu;
