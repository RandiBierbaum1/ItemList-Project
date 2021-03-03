import React, {Component} from 'react';

export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleLogin(event) {
        this.props.login(this.state.username, this.state.password);
    }

    render() {
        return (
            <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form>
              <label>
                <p>Username</p>
                <input onChange={event => this.handleChange(event)} type="text" name="username"/>
              </label>
              <label>
                <p>Password</p>
                <input onChange={event => this.handleChange(event)} type="password" name="password"/>
              </label>
              <div>
              <button onClick={_ => this.handleLogin()}>Login</button>
              </div>
            </form>
          </div>
        )
    };
}