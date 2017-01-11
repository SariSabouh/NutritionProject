import React from 'react';

export default class NavTabs extends React.Component {
    render() {
        return (
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li><a className="page-scroll" href="body">Home</a></li>
                    <li><a className="page-scroll" href="#rijeemak-section">Rijeemak</a></li>
                    <li><a className="page-scroll" href="#services-section">Services</a></li>
                    <li><a className="page-scroll" href="#prices-section">Prices</a></li>
                    <li><a className="page-scroll" href="#team-section">Team</a></li>                            
                    <li><a className="page-scroll" href="#contact-section">Contact</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </div>
        )
    }
}