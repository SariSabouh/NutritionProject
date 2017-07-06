import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Landing from './components/User/Landing.jsx';

if ( window.location.href.includes( '/user/' ) ) ReactDOM.render( <Landing />, document.getElementById( 'app' ) )
else ReactDOM.render( <App />, document.getElementById( 'app' ) )
