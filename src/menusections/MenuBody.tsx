import React from 'react';
import Container from 'react-bootstrap/Container'
import Bevande from './Bevande';
import Calzoni from './Calzoni';
import PizzeBianche from './PizzeBianche'
import PizzeRosse from './PizzeRosse'
import PizzeAlChiostro from './PizzeAlChiostro'

import Contorni from './Contorni';
import Dolci from './Dolci';
import Pizze from './Pizze';
// Import all the data
import Primi from './Primi';
import Secondi from './Secondi';
import Antipasti from './Antipasti';


export type MenuBodyProps = { section?: string }

class MenuBody extends React.Component<MenuBodyProps> {

    render() {
        const { section } = this.props;

        let sectionObject;

        switch (section) {
            case "antipasti":
                sectionObject = <Antipasti></Antipasti>
                break;
            case "primi":
                sectionObject = <Primi></Primi>
                break;
            case "secondi":
                sectionObject = <Secondi></Secondi>
                break;
            case "bevande":
                sectionObject = <Bevande></Bevande>
                break;
            case "contorni":
                sectionObject = <Contorni></Contorni>
                break;
            case "dolci":
                sectionObject = <Dolci></Dolci>
                break;
            case "pizze":
                sectionObject = <Pizze></Pizze>
                break;
            case "pizzecalzoni":
                sectionObject = <Calzoni></Calzoni>
                break;
            case "pizzebianche":
                sectionObject = <PizzeBianche></PizzeBianche>
                break;
            case "pizzerosse":
                sectionObject = <PizzeRosse></PizzeRosse>
                break;
            case "pizzealchiostro":
                sectionObject = <PizzeAlChiostro></PizzeAlChiostro>
                break;

            default:
                break;
        }


        return (
            <Container fluid>
                <Container fluid>
                    {sectionObject}
                </Container>
            </Container>

        );
    }

}

export default MenuBody;
