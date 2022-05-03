import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import '../styles/CommonFooter.scss'

const CommonFooter = () => (
    <footer className="common-footer">
        <Container fluid>
            <Container className="social-div unselectable" id="social-slogan">
                Seguici sui nostri Social
            </Container>
            <Container fluid className="social pt-4">
                <Row>
                    <Col>
                        <a href="https://wa.me/+393757445080"><i className="fa fa-2xl fa-whatsapp"></i></a>
                    </Col>
                    <Col>
                        <a href="https://www.facebook.com/profile.php?id=100080751397631"><i className="fa fa-2xl fa-facebook"></i></a>
                    </Col>
                    <Col>
                        <a href="https://www.instagram.com/al_chiostro_buccino/"><i className="fa fa-2xl fa-instagram"></i></a>
                    </Col>
                </Row>


            </Container>
            <br />
            <div className="unselectable">Piazza  Municipio, 84021 Buccino SA</div>
            <br />

            <Col style={{ paddingTop: "5px" }}>
                <a href="https://www.google.it/maps/place/Al+Chiostro+Buccino/@40.6329099,15.370092,17z/data=!4m12!1m6!3m5!1s0x13396b9bb99067b9:0xe294947984f80194!2sAl+Chiostro+Buccino!8m2!3d40.632475!4d15.3705335!3m4!1s0x13396b9bb99067b9:0xe294947984f80194!8m2!3d40.632475!4d15.3705335"><i className="fa fa-2xl fa-map-marker" aria-hidden="true"></i></a>
            </Col>
        </Container>
    </footer >
);

export default CommonFooter;