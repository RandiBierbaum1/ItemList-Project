import React, {Component} from "react";
import {Link} from "@reach/router";

class Footer extends Component {

    render() {
        return (
            <React.Fragment>
                <Link to="/">Go back</Link>
                <h4>Footer</h4>
                <p>Made by Randi Bierbaum</p>
            </React.Fragment> // <Link> above is a link the user can click on to navigate to the front page
        );
    }
}

export default Footer;