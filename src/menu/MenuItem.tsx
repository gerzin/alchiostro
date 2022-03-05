import React from "react";
import './MenuItem.css'

export type MenuItemProps = { name: string, descr: string, price: string }

export class MenuItem extends React.Component<MenuItemProps> {
    render() {
        const { name, descr, price } = this.props

        return (
            <div className="menu-item">
                <div>
                    <div className="dish-name">{name}</div>
                    <div className="dish-descr">{descr}</div>
                    <div className="dish-price">{price}€</div>
                </div>
            </div>
        );
    }
}