import React, { Component } from 'react';
import { Router } from '@reach/router';

import Item from './Item';
import ItemList from './ItemList';
import Nav from "./Component/Nav";
import Home from "./Component/Home";
import Login from "./Component/Login";
import AuthService from './AuthService';

class App extends Component {

    constructor(props) {
        super(props);

        this.Auth = new AuthService(`${this.API_URL}/users/authenticate`);

        //Actual data
        this.state = {
            itemlist: [
                {
                    id: 1,
                    title: "Item 1",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    colors: ["Blue", "Green", "Purple"],
                    steps: ["step1", "step2", "step3"],
                    price: 10
                },
                {
                    id: 2,
                    title: "Item 2",
                    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    colors: ["Yellow", "Red", "Blue", "Black"],
                    steps: ["step1", "step2", "step3"],
                    price: 150
                },
                {
                    id: 3,
                    title: "Item 3",
                    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                    colors: ["Grey", "White", "Gold", "Silver"],
                    steps: ["step1", "step2", "step3"],
                    price: 2500
                },
            ],
            userCredentials: {
                username: "randi",
                password: "1234"
            }
        }
    }

    getItem(id) {
        return this.state.itemlist.find(e => e.id === Number(id));
    }

    login(username, password) {
        try {
            const resp = this.Auth.login(username, password);
            console.log("Authentication:", resp.msg);
            this.getData();
        } catch (e) {
            console.log("Login", e);
        }
    }

    logout(event) {
        event.preventDefault();
        this.Auth.logout();
        this.setState({
            userCredentials: {},
        });
    }


    render() {
        return (
            <React.Fragment>
                <h1>Carswip itemlist</h1>

                <div>
                    {this.Auth.getUsername() ?
                        <small>Logged in: {this.Auth.getUsername()}. 
                        <button onClick={(event) => { this.logout(event) }}>Logout.</button></small>
                        : <Login login={(username, password) => this.login(username, password)} />
                    }
                </div>

                <Nav />

                <Router>
                    <Home path="/"></Home>
                    <ItemList path="/itemList" data={this.state.itemlist} />
                    <ItemList path="/item/with/:filter" data={this.state.itemlist} />
                    <Item path="/item/:id" loadItem={(id) => this.getItem(id)} />
                </Router>
            </React.Fragment>
        )
    }
}

export default App;

