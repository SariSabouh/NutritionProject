import React from 'react';

import Login from '../Login/Login.jsx';

export default class NavTabs extends React.Component {
    render() {
          if ( window.location.href.includes( '/admin/' ) || window.location.href.includes( '/user/' ) )
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
                    </ul>
                </div>
            </div>
        );
        
          else
                
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
                            <a className="dropdown-toggle login-dropdown" data-toggle="dropdown">Log In | Register <span className="caret"></span></a>
                            <Login />
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}