import React from 'react';

import NavigationBar from '../components/NavigationBar/NavigationBar.jsx';

export default class Login extends React.Component {
    render() {
        return (
            <div>
                <h1>Login page</h1>
                <p>Example user: user / password</p>
                <p className="error">Wrong user or password</p>
                <form action="/login" method="post">
                    <label htmlFor="username">Username</label>:
                    <input type="text" id="username" name="username" autoFocus="autofocus" /> <br />
                    <label htmlFor="password">Password</label>:
                    <input type="password" id="password" name="password" /> <br />
                    <input type="submit" value="Log in" />
                </form>
                <p><a href="/index" href="/index">Back to home page</a></p>
                <button type="button" onClick={() =>{this.props.setLoginView("register")}} className="btn btn-warning">Do not have an account? Register!</button>
            </div>
        )
    }
}