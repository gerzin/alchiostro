import React from 'react';
import Container from 'react-bootstrap/Container'
import Bevande from './Bevande';
import Contorni from './Contorni';
import Dolci from './Dolci';
import Pizze from './Pizze';
// Import all the data
import Primi from './Primi';
import Secondi from './Secondi';


export type MenuBodyProps = { section?: string }

class MenuBody extends React.Component<MenuBodyProps> {

    render() {
        const { section } = this.props;

        let sectionObject;

        switch (section) {
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

            default:
                break;
        }


        return (
            <Container>
                <Container>
                    {sectionObject}
                </Container>
            </Container>

        );
    }

}

export default MenuBody;
