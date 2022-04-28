import React from "react";
import { Carousel, Container } from "react-bootstrap";
import foto0 from './photos/foto0.jpeg'
import foto1 from './photos/foto1.jpeg'
import foto2 from './photos/foto2.jpeg'
import foto3 from './photos/foto3.jpeg'


import './Carousel2.css'

function Carousel2() {
    const photos = [foto0, foto1, foto2, foto3]

    return (

        <Container fluid >
            <Carousel>
                {photos.map(p => (
                    <Carousel.Item>
                        <img width={400} height={500} src={p}></img>
                    </Carousel.Item>
                ))}
            </Carousel>
        </Container>


    );
}


export default Carousel2;