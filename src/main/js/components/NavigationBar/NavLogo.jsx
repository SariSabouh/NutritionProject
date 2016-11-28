import React from 'react';

export default class NavLogo extends React.Component {
    render() {

        const logoStyle = {
            marginTop: '-7px',
            maxWidth: '200%',
            maxHeight: '200%',
        };

        return (
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#myPage"><img style={logoStyle} src="images/itg.png"/></a>
            </div>

        )
    }
}