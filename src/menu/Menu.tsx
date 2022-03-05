import React from "react";
import { MenuSection } from "./MenuSection";
import { Coperto } from "./Coperto"
import primi from "../data/primi.json"
import secondi from "../data/secondi.json"
import pizze from "../data/pizze.json";
import bevande from "../data/bevande.json"
import antipasti from "../data/antipasti.json";
import Container from "react-bootstrap/Container";

import './Menu.css'

export class Menu extends React.Component {
    render() {
        //let primi = [{ name: "", descr: "", price: "" }]
        return (
            <Container fluid>
                <div className="restaurant-menu">
                    <div className="menu-header" id="menu-header-id"><h1>Menu</h1></div>
                    <MenuSection name="Antipasti" dishes={antipasti}></MenuSection>
                    <MenuSection name="Primi" dishes={primi}></MenuSection>
                    <MenuSection name="Secondi" dishes={secondi}></MenuSection>
                    <MenuSection name="Pizze" dishes={pizze}></MenuSection>
                    <MenuSection name="Bevande" dishes={bevande}></MenuSection>
                </div>
                <Coperto ></Coperto>
            </Container>

        );
    }
}