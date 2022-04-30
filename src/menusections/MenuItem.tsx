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
                <div className="allergy-div">Allergeni: {allergies}</div>
            );
        }

        if (descr) {
            description_ = (
                <p>{descr}</p>
            );
        }


        return (
            <Col className='col-sm-8'>
                <div className='menu-item'>
                    <h4>{name}</h4>
                    <span>{price}€</span>
                    {description_}
                    {allergies_}
                </div>
            </Col>
        );
    }
}