import React from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from '../components/NavigationBar/NavigationBar.jsx';


export default class Login extends React.Component {
    render() {        
        return (
            <div>
                <NavigationBar />
                <div className="wrapper">
                    <form action="/login" method="post" className="login">
                        <p className="title">Log in</p>
                        <input className="form-control" type="email" placeholder="Email address" id="email" name="email" autoFocus="autofocus" required/>
                        <i className="fa fa-user"></i>
                        <input className="form-control" type="password" placeholder="Password" id="password" name="password" required/>
                        <i className="fa fa-key"></i>
                        <a href="#">Forgot your password?</a>
                        <button id="test" type="submit">
                            <i className="spinner"></i>
                            <span className="state">Log in</span>
                        </button>
                    </form>
                    <p><a href="/index" href="/index">Back to home page</a></p>
                </div >
            </div >
        );
    }
}

