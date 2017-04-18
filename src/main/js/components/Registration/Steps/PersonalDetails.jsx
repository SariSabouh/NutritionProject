import React, { Component, PropTypes } from 'react'

const store = { firstName: '', lastName: '' }

const PersonalDetails = React.createClass( {
    getInitialState() {
        return store
    },

    handleFirstNameChanged( event ) {
        store.firstName = event.target.value
        this.setState( store )
    },

    handleLastNameChanged( event ) {
        store.lastName = event.target.value
        this.setState( store )
    },

    render() {
        return (
            <div id="register">
                <div className="row">
                    <div>
                        <label className="control-label" htmlFor="firstName">First Name</label>
                        <input id="firstName" className="u-full-width form-control" placeholder="First Name"
                            type="text"
                            onChange={this.handleFirstNameChanged}
                            value={this.state.firstName}
                            autoFocus
                            required/>
                    </div>
                </div>
                <div className="row">
                    <div>
                        <label className="control-label" htmlFor="lastName">Last Name</label>
                        <input id="lastName" className="u-full-width form-control" placeholder="Last Name"
                            type="text"
                            onChange={this.handleLastNameChanged}
                            value={this.state.lastName}
                            required/>
                    </div>
                </div>
                <div className="row">
                    <div>
                        <label className="control-label" htmlFor="email">E-Mail</label>
                        <input id="email" className="u-full-width form-control" placeholder="example@email.com"
                            type="email"
                            onChange={this.handleEmailChanged}
                            value={this.state.email}
                            autoFocus
                            required/>
                    </div>
                </div>
                <div className="row">
                    <div>
                        <label className="control-label" htmlFor="password">Password</label>
                        <input id="password" className="u-full-width form-control" placeholder="$trongPa55word"
                            type="password"
                            onChange={this.handlePasswordChanged}
                            value={this.state.password}
                            minLength="6"
                            autoFocus
                            required/>
                    </div>
                </div>
                <div className="row">
                    <div>
                        <label className="control-label" htmlFor="confrimPassword">Confirm Password</label>
                        <input id="confirmPassword" className="u-full-width form-control" placeholder="$trongPa55word"
                            type="password"
                            minLength="6"
                            autoFocus
                            required/>
                    </div>
                </div>
                <div className="row">
                    <div>
                        <label className="control-label" htmlFor="dob">Age</label>
                        <input id="dob" className="u-full-width form-control" placeholder="21"
                            type="date"
                            onChange={this.handleAgeChanged}
                            value={this.state.age}
                            autoFocus
                            required/>
                    </div>
                </div>
            </div>
        )
    }
})

export { PersonalDetails }