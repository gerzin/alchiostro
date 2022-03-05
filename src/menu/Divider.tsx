import React from "react";
import Container from "react-bootstrap/esm/Container";
import './Divider.css'

export class Divider extends React.Component {
    render() {
        return (
            <Container className="divider-container">
                <hr className="dish-divider"></hr>
            </Container>

        );
    }
}