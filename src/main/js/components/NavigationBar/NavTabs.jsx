import React from 'react';

export default class NavTabs extends React.Component {
    render() {
        return (
            <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="#why">WHY</a></li>
                    <li><a href="#services">SERVICES</a></li>
                    <li><a href="#testimonials">TESTIMONIALS</a></li>
                    <li><a href="#apply">APPLY</a></li>
                    <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#">US
                            <span className="caret"></span></a>
                        <ul className="dropdown-menu">
                            <li><a href="#contact" className="dropdown-nav">CONTACT US</a></li>
                            <li><a href="#about" className="dropdown-nav">ABOUT US</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}