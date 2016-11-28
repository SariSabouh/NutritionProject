import React from 'react';
import NavigationBar from './components/NavigationBar/NavigationBar.jsx';
import Jumbotron from './components/Jumbotron/Jumbotron.jsx';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <NavigationBar />
                <Jumbotron />
            </div>
        )
    }
}