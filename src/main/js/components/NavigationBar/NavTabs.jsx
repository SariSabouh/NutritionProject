import React from 'react';

import RegisterModal from './RegisterModal.jsx';

export default class NavTabs extends React.Component {
    render() {
        
        
        
        return (
            <div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li><a className="page-scroll" href="body">Home</a></li>
                    <li><a className="page-scroll" href="#rijeemak-section">Rijeemak</a></li>
                    <li><a className="page-scroll" href="#services-section">Services</a></li>
                    <li><a className="page-scroll" href="#prices-section">Prices</a></li>
                    <li><a className="page-scroll" href="#team-section">Team</a></li>                            
                    <li><a className="page-scroll" href="#contact-section">Contact</a></li>
                       
                    <li className="dropdown">
                        <a class="dropdown-toggle" data-toggle="dropdown">Log In | Register <span className="caret"></span></a>
                        <ul className="dropdown-menu dropdown-lr animated lightSpeedIn" role="menu">
                            <div className="col-lg-12">
                                <div className="text-center"><h3><b>Log In</b></h3></div>
                                <form>
                                    
                                    <div className="form-group">
                                        <label for="Email">Email</label>
                                        <input type="Email" name="Email" id="Email" tabindex="2" className="form-control" placeholder="Email" autocomplete="off" />
                                    </div>

                                    <div className="form-group">
                                        <label for="password">Password</label>
                                        <input type="" name="" id="Email" tabindex="2" className="form-control" placeholder="Password" autocomplete="off" />
                                    </div>

                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-xs-7">
                                                <input type="checkbox" tabindex="3" name="remember" id="remember" />
                                                <label for="remember" id="remembermargin">Remember Me</label>
                                            </div>
                                            <div className="col-xs-5 pull-right">
                                                <input type="submit" name="login-submit" id="login-submit" tabindex="4" className="form-control btn btn-success" value="Log In" />
                                            </div>
                                            
                                            
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="text-center">
                                                    <a tabindex="5" className="forgot-password">Forgot Password?</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                   
                                    <input type="hidden" className="hide" name="token" id="token" value="a465a2791ae0bae853cf4bf485dbe1b6" />
                                </form>
                               <RegisterModal modalText="Register" id="btnregister" /> 
                            </div>
                            
                        </ul>
                    </li>
                </ul>
            </div>
            

            </div>
        );
    }
}