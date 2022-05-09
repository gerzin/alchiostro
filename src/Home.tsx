import React from 'react';
import './styles/Home.scss';
import Container from 'react-bootstrap/Container'
import CommonNavbar from './common/CommonNavbar';
import CommonFooter from './common/CommonFooter';
import Carousel from 'react-bootstrap/Carousel'

import photo0 from './photos/foto0.jpeg'
import photo1 from './photos/foto1.jpeg'
import photo2 from './photos/foto2.jpeg'
import photo3 from './photos/foto3.jpeg'
import photoX from './photos/fotoX.jpeg'
import logo from './styles/logo2.png'
import { Button, OverlayTrigger, Popover, Table } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const popover = (
    <Popover id="popover-basic">
        <Popover.Header as="h3">Orari di Apertura</Popover.Header>
        <Popover.Body>
            <Table>
                <tbody>
                    <tr>
                        <td>Lun</td>
                        <td colSpan={2}>19-23:30</td>
                    </tr>
                    <tr>
                        <td>Mar</td>
                        <td colSpan={2}>Chiuso</td>
                    </tr>
                    <tr>
                        <td>Mer</td>
                        <td colSpan={2}>19-23:30</td>
                    </tr>
                    <tr>
                        <td>Gio</td>
                        <td colSpan={2}>19-23:30</td>
                    </tr>
                    <tr>
                        <td>Ven</td>
                        <td colSpan={2}>19-23:30</td>
                    </tr>
                    <tr>
                        <td>Sab</td>
                        <td colSpan={2}>19-23:30</td>
                    </tr>
                    <tr>
                        <td>Dom</td>
                        <td>12:30-15</td>
                        <td>19-23:30</td>
                    </tr>

                </tbody>

            </Table>
        </Popover.Body>
    </Popover>
);

const Timetable = () => (
    <OverlayTrigger trigger="click" placement="top" overlay={popover}>
        <Button id='custom-button-2'>Orari di Apertura</Button>
    </OverlayTrigger>
);

export type HomeState = {
    contatore: number
    banner: string
    carousel_imgs: string[]
}


class Home extends React.Component<{}, HomeState> {

    constructor(props: any) {
        super(props);
        this.state = {
            contatore: 0,
            banner: 'Da "Al Chiostro" potrai gustare un menù che lega tradizione e novità.',
            carousel_imgs: [photo0, photo1, photo2, photo3]
        };
    }

    imageClick() {
        this.setState({ contatore: this.state.contatore + 1 });
        let easterEgg = "Buon Appetito & Viva Aldo Catone"
        if (this.state.contatore === 9) {
            let newBanner: string = easterEgg
            let newImgs: string[] = this.state.carousel_imgs

            if (this.state.banner === easterEgg) {
                newBanner = 'Da "Al Chiostro" potrai gustare un menù che lega tradizione e novità.'
                newImgs.pop()

            }
            else {
                newImgs.push(photoX)
            }
            this.setState({ contatore: 0, banner: newBanner, carousel_imgs: newImgs })
        }

    }

    render() {



        return (

            <Container fluid className='p-0'>
                <CommonNavbar></CommonNavbar>
                <Container fluid className='home-content p-0'>
                    <Container fluid className='upper-images p-0' id='upper-images-div'>
                        <Carousel>
                            {this.state.carousel_imgs.map((img) => (
                                <Carousel.Item>
                                    <img className="img-responsive w-100 cim" src={img} alt="" />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </Container>

                    <Container fluid className='open-times alt p-0'>
                        <p id="#messaggio">
                            {this.state.banner}
                        </p>
                    </Container>

                    <Container fluid className='home-bottom-container p-0'>
                        <section className='infos-section'>
                            <Container className='logo-img'>
                                <figure style={{ marginTop: "30px", marginBottom: "30px" }} onClick={() => this.imageClick()}>
                                    <img src={logo} width={300} height={150} alt="" />
                                </figure>
                            </Container>
                            <br />
                            <LinkContainer to="menu">
                                <Button id='custom-button'>Vai al Menù</Button>
                            </LinkContainer>
                            <br />
                            <br />
                            <Container>
                                <Timetable></Timetable>
                            </Container>

                        </section>
                    </Container>
                </Container >
                <CommonFooter></CommonFooter>
            </Container >
        );
    }

}

export default Home;
