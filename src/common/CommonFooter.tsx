import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import '../styles/CommonFooter.scss'

const CommonFooter = () => (
    <footer className="common-footer">
        <Container fluid>
            <Container>
                Social
            </Container>
            <Container fluid className="social pt-4">
                <Row>
                    <Col>
                        <a href="https://wa.me/+393757445080"><i className="fa fa-2xl fa-whatsapp"></i></a>
                    </Col>

                    <Col>
                        <a href="https://www.instagram.com/al_chiostro_buccino/"><i className="fa fa-2xl fa-instagram"></i></a>
                    </Col>
                </Row>


            </Container>
            <br />
            Piazza  Municipio, 84021 Buccino SA
            <br />
        </Container>
    </footer>
);

export default CommonFooter;