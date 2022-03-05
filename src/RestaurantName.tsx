import React from "react";
import './RestaurantName.css'
export type RestaurantNameProps = {}

export class RestaurantName extends React.Component<RestaurantNameProps> {
    render() {

        return (
            <div className="restaurant-name">
                <div>
                    Ristorante Pizzeria "Il Chiostro"
                </div>
                <div>
                    di Giovanni Gonzalez
                </div>
            </div>
        );
    }
}