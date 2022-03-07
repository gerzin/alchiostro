import React from "react";
import './MenuSection.css'
import { MenuItem } from "./MenuItem"
import Container from "react-bootstrap/esm/Container";
import { Divider } from "./Divider";
export type DishInterface = { name: string, descr: string, price: string }

export type MenuSectionProps = { name: string, dishes: DishInterface[] }

export class MenuSection extends React.Component<MenuSectionProps> {
    render() {
        const { name, dishes } = this.props
        const ndishes = dishes.length
        return (
            <div className="menu-section">
                <div className="menu-section-header"><h1 id={name}>{name}</h1></div>
                <Container className="menu-section-dishes">
                    {
                        dishes.map((dish, index) => (
                            <Container>
                                <MenuItem name={dish.name} descr={dish.descr} price={dish.price}></MenuItem>
                                {(index != (ndishes - 1)) ? (
                                    <Divider></Divider>
                                ) : (
                                    <div></div>
                                )}

                            </Container>
                        ))
                    }
                </Container>
            </div>
        );
    }
}