import React from "react";
import { MenuSection } from "./MenuSection";
import { Coperto } from "./Coperto"
import antipasti from "../data/antipasti.json";
import primi from "../data/primipiatti.json"
import secondi from "../data/secondipiatti.json"
import dolci from "../data/dolci.json"
import contorni from "../data/contorni.json"
import pizzerosse from "../data/pizzerosse.json"
import pizzebianche from "../data/pizzebianche.json"
import pizzealchiostro from "../data/pizzealchiostro.json"
import bibite from "../data/bibite.json"
import birre from "../data/birre.json"
import vinobianco from "../data/vinobianco.json"
import vinorosso from "../data/vinorosso.json"
import calzoni from "../data/calzonialforno.json"

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
                    <MenuSection name="Primi Piatti" dishes={primi}></MenuSection>
                    <MenuSection name="Secondi Piatti" dishes={secondi}></MenuSection>
                    <MenuSection name="Contorni" dishes={contorni}></MenuSection>
                    <MenuSection name="Dolci" dishes={dolci}></MenuSection>
                    <MenuSection name="Pizze Rosse" dishes={pizzerosse}></MenuSection>
                    <MenuSection name="Pizze Bianche" dishes={pizzebianche}></MenuSection>
                    <MenuSection name="Calzoni al Forno" dishes={calzoni}></MenuSection>

                    <MenuSection name='Pizze "Al Ciostro"' dishes={pizzealchiostro}></MenuSection>
                    <MenuSection name="Bibite" dishes={bibite}></MenuSection>
                    <MenuSection name="Birre" dishes={birre}></MenuSection>
                    <MenuSection name="Vini Bianchi" dishes={vinobianco}></MenuSection>
                    <MenuSection name="Vini Rossi" dishes={vinorosso}></MenuSection>


                </div>
                <Coperto ></Coperto>
            </Container>

        );
    }
}