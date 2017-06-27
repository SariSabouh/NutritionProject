import React from 'react';
import ReactDOM from 'react-dom';

import RegisterModal from '../Registration/RegisterModal.jsx';

export default class Login extends React.Component {
    render() {
        return (
            <ul className="dropdown-menu dropdown-lr animated flipInX" role="menu">
                <div className="col-lg-12">
                    <div className="text-center"><h3><b>Log In</b></h3></div>
                   <center> <h6 className="error" hidden>Please check the login information</h6></center>
                    <form className="login">
                        <div className="form-group">
                            <label htmlFor="Email">Email</label>
                            <input type="email" name="email" id="email" tabIndex="2" className="form-control" placeholder="Email" autoComplete="off" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" tabIndex="2" className="form-control" placeholder="Password" autoComplete="off" />
                        </div>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-xs-7">
                                    <input type="checkbox" tabIndex="3" name="remember" id="remember" />
                                    <label htmlFor="remember" id="remember">Remember Me</label>
                                </div>
                                <div className="col-xs-5 pull-right">
                                    <input type="submit" name="login-submit" id="login-submit" tabIndex="4" className="form-control btn btn-success" value="Log In" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="text-center">
                                        <a tabIndex="5" id="forget" className="forgot-password">Forgot Password?</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <RegisterModal modalText="Register" />
                </div>
            </ul>
        );
    }
}