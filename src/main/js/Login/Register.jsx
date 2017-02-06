import React from 'react'
import follow from '../follow';
import client from '../client';

export default class Register extends React.Component{
    
    constructor(props){
        super(props);
        this.createAccount = this.createAccount.bind(this);
    }
        
    render() {
        
        $(document).ready(function() {
            $("#registrationForm").submit(function(e) {
                e.preventDefault();
            });
        });
        
        return (
                <div>
                    <form id="registrationForm">
                        <div className="form-group">
                            <label htmlFor="username">Username:</label>
                            <input type="text" className="form-control" id="username" placeholder="Enter username" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter password" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter email" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name:</label>
                            <input type="text" className="form-control" id="firstName" placeholder="Enter first name" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name:</label>
                            <input type="text" className="form-control" id="lastName" placeholder="Enter last name" required/>
                        </div>
                        <button type="submit" onClick={() =>{this.createAccount()}} className="btn btn-success">Create Account</button>
                        <button type="button" onClick={() =>{this.props.setLoginView("login")}} className="btn btn-warning">Already have an account? Login!</button>
                    </form>
                </div>
        )
    }
    
    createAccount(){
        if($('#firstName').val().length > 0 && $('#lastName').val().length > 0 && $('#username').val().length > 0 && $('#password').val().length > 0 && $('#email').val().length > 0){
            let newAccount =  {username: $("#username").val(), password: $("#password").val(), email: $("#email").val(), firstName: $("#firstName").val(), lastName: $("#lastName").val()};
            follow(client, '/api', ['accounts']).then(reminderCollection => {
                return client({
                    method: 'POST',
                    path: reminderCollection.entity._links.self.href,
                    entity: newAccount,
                    headers: {'Content-Type': 'application/json'}
                })
            });
            this.props.setStatus(true);
            this.props.setLoginView("login");
        }
    }
}