import React from 'react';
import Container from 'react-bootstrap/Container'
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
