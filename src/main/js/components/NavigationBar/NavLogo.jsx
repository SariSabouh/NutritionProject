import React from 'react';


let homeButton = "body";
export default class NavLogo extends React.Component {
   
    render() {
        
         if(window.location.pathname == "/login"){
            homeButton = "/";
        }
// Actual logo set in CSS
        return (
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand page-scroll" href="body">Rijeemak</a>
            </div>
        )
    }
}