import React, { Component } from 'react';
import { Link } from "@reach/router";

class Item extends Component {
    constructor(props) {
        super(props);

        this.state = {
            item: this.props.loadItem(this.props.id)
        }
    }

    render() {
        let title = "Item not found";

        let description = " ";
        let colorsItems = " ";
        let steps = " ";
        let price = " ";

        let priceValue;

        if (this.state.item) {
            title = this.state.item.title;
            description = this.state.item.description;
            colorsItems = this.state.item.colors.map((color, id) =>
                <li key={id}>{color}</li>);

            steps = this.state.item.steps.map((step, id) =>
                <li key={id}>{step}</li>);

            price = this.state.item.price;
            if (price >= 500) {
                priceValue = "Very expensive";
            }
            else {
                priceValue = "Cheap";
            }

        }
        return (
            <React.Fragment>
                <h1>Item: {title}</h1>
                <ul>
                    <p>{description}</p>
                    <h3>How to use {title}</h3>
                    <h4>{steps}</h4>
                    <div>
                        <h3>Possible colors: </h3>
                        <ol>
                            <Link to={`/item/with/${colorsItems}`}>{colorsItems}</Link>
                        </ol>
                    </div>
                    <p>Cost: {price} dkk</p>
                    <p> So the Item is: {priceValue}</p>
                </ul>

                <Link to="/itemList">Go Back</Link>

            </React.Fragment>
        );
    }
}

export default Item;