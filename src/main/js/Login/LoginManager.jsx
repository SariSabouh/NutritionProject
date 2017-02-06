import React from 'react'

import Login from './Login.jsx'
import Register from './Register.jsx'

let loginView;

export default class LoginManager extends React.Component{
    
    constructor(props){
        super(props);
        this.setLoginView = this.setLoginView.bind(this);
        loginView = <Login setLoginView = {this.setLoginView}/>;
    }
    
    setLoginView(buttonPressed){
        if(buttonPressed == "register"){
            loginView = <Register setLoginView = {this.setLoginView}/>;
        }
        else{
            loginView = <Login setLoginView = {this.setLoginView}/>;
        }
        this.forceUpdate();
    }
        
    render() {
        return (
                <div>
                    {loginView}
                </div>
        )
    }
}