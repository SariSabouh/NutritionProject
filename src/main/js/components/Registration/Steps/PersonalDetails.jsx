import React, { Component, PropTypes } from 'react'

const store = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '', dob: '', phoneNumber: '' }

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
    
    handleEmailChanged( event ) {
        store.email = event.target.value
        this.setState( store )
    },
    
    handlePasswordChanged( event ) {
        store.password = event.target.value
        this.setState( store )
    },
    
    handleConfirmPasswordChanged( event ) {
        store.confirmPassword = event.target.value
        this.setState( store )
    },
    
    handleDOBChanged( event ) {
        store.dob = event.target.value
        this.setState( store )
    },
    
    handlePhoneNumberChange( event ) {
        const phoneNumber = event.target
        if (phoneNumber.value.length > phoneNumber.maxLength) phoneNumber.value = phoneNumber.value.slice(0, phoneNumber.maxLength);
        store.phoneNumber = event.target.value
        this.setState( store )
    },

    render() {
        return (
            <div id="personalDetails">
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
                            onChange={this.handleConfirmPasswordChanged}
                            value={this.state.confirmPassword}
                            minLength="6"
                            autoFocus
                            required/>
                    </div>
                </div>
                <div className="row">
                    <div>
                        <label className="control-label" htmlFor="dob">Date of Birth</label>
                        <input id="dob" className="u-full-width form-control" placeholder="21"
                            type="date"
                            onChange={this.handleDOBChanged}
                            value={this.state.dob}
                            autoFocus
                            required/>
                    </div>
                </div>
                <div className="row">
                    <div>
                        <label className="control-label" htmlFor="phone-number">Phone Number</label>
                        <input id="phone-number" className="u-full-width form-control" placeholder="xxxx-xxx-xxx"
                            type="number"
                            minLength="10"
                            maxLength="10"
                            onChange={this.handlePhoneNumberChange}
                            value={this.state.phoneNumber}
                            autoFocus
                            required/>
                    </div>
                </div>
            </div>
        )
    }
})

export { PersonalDetails }