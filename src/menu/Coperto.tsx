import React from "react";
import './Coperto.css'
import { OverlayTrigger } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Popover } from "react-bootstrap";

export class Coperto extends React.Component {



    render() {

        const popover = (
            <Popover id="popover-basic">
                <Popover.Header as="h3">Legenda Allergeni</Popover.Header>
                <Popover.Body>
                    blah blah blah
                    <ul>
                        <li>A.I. : AAAAA IIIII</li>
                    </ul>
                </Popover.Body>
            </Popover>
        );

        return (
            <div className="coperto-section">
                <div>
                    <OverlayTrigger trigger="click" placement="top" overlay={popover}>
                        <Button variant="success">Allergeni</Button>
                    </OverlayTrigger>
                </div>
                <div className="coperto-string">
                    Pane e coperto: 2€ a persona
                </div>

            </div>
        );
    }
}