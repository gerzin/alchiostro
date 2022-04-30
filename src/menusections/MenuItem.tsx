import React from "react";
import '../styles/MenuItem.scss'
import { Col, Row } from 'react-bootstrap';

export type MenuItemProps = { name: string, descr?: string, price: string, allergies?: string }

export default class MenuItem extends React.Component<MenuItemProps> {
    render() {
        const { name, descr, price, allergies } = this.props

        let allergies_;
        let description_;

        if (allergies) {
            allergies_ = (
                <div className="menu-item-allergy">Allergeni: {allergies}</div>
            );
        }

        if (descr) {
            description_ = (
                <p className="menu-item-description">{descr}</p>
            );
        }


        return (
            <Col className='col-sm-8'>
                <div className='menu-item'>
                    <h4 className="menu-item-name">{name}</h4>
                    {description_}
                    <div className="menu-item-price">{price}€</div>

                    {allergies_}
                </div>
            </Col>
        );
    }
}