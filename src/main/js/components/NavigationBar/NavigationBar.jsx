import React from 'react';
import NavLogo from './NavLogo.jsx';
import NavTabs from './NavTabs.jsx';

export default class NavigationBar extends React.Component {
    render() {
        return (
            <header id="header" className="header-main">
                <nav id="main-navbar" className="navbar navbar-default navbar-fixed-top" role="navigation">
                  <div className="container">
                    <NavLogo />
                    <NavTabs />
                  </div>
                </nav>
            </header>
        )
    }
}