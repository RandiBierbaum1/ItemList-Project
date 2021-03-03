import React, { Component } from 'react';
import { Link } from "@reach/router";

class ItemList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: false
        }
    }

    handleChecke = (event) => {
        const { checked } = event.target
        this.setState({
            checked: checked
        })
    }

    handleButtonClick(event) {
        event.preventDefault();
        if (this.state.checked === true) {
            console.log('test')
        }
    }

    render() {
        let data = this.props.data;

        if (this.props.filter) {
            data = data.filter(e => e.colors.includes(this.props.filter));
        }

        const contentList = data.map(item =>
            <ul key={item => item.id}>
                <input type="checkbox"
                    onChange={event => this.handleChecke(event)}
                    defaultChecked={this.state.checked}
                />
                <Link to={`/item/${item.id}`}>{item.title}</Link>
            </ul>);


        return (
            <React.Fragment>
                <h1>Item list</h1>

                <ul>
                    {contentList}
                </ul>

                <button onClick={(event) => this.handleButtonClick(event)}>
                    Submit
                    </button>


                <br />
                <Link to="/">Go Back</Link>
            </React.Fragment>
        );
    }

}

export default ItemList;