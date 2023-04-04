import React from 'react';
import './styles/App.scss';
import Container from 'react-bootstrap/Container'
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
                <div className='coperto-div unselectable'>Coperto: 2€</div>
                <CommonFooter></CommonFooter>
            </div >

        );
    }

}

export default Menu;
