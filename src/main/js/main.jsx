import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import LoginManager from './Login/LoginManager.jsx';


if (window.location.pathname == "/login") {
    ReactDOM.render(<LoginManager />, document.getElementById('Login'));
}

else{
    ReactDOM.render(<App />, document.getElementById('app'));
}