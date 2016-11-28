import React from 'react';
import NavLogo from './NavLogo.jsx';
import NavTabs from './NavTabs.jsx';

export default class NavigationBar extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container">
                        <NavLogo />
                        <NavTabs />
                    </div>
                </nav>
            </div>
        )
    }
}