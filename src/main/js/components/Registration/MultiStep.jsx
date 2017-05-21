import React, { Component, PropTypes } from 'react';

export default class MultiStep extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            showPreviousBtn: false,
            showNextBtn: true,
            compState: 0,
            navState: this.getNavStates( 0, this.props.steps.length )
        };
        this.hidden = {
            display: 'none'
        };
        this.handleKeyDown = this.handleKeyDown.bind( this );
        this.next = this.next.bind( this );
        this.previous = this.previous.bind( this );
    }

    getNavStates( indx, length ) {
        let styles = [];
        for ( let i = 0; i < length; i++ ) {
            if ( i < indx ) {
                styles.push( 'done' )
            }
            else if ( i === indx ) {
                styles.push( 'doing' )
            }
            else {
                styles.push( 'todo' )
            }
        }
        return { current: indx, styles: styles }
    }

    checkNavState( currentStep ) {
        if ( currentStep > 0 && currentStep < this.props.steps.length - 1 ) {
            this.setState( {
                showPreviousBtn: true,
                showNextBtn: true
            })
        }
        else if ( currentStep === 0 ) {
            this.setState( {
                showPreviousBtn: false,
                showNextBtn: true
            })
        }
        else {
            this.setState( {
                showPreviousBtn: true,
                showNextBtn: false
            })
        }
    }

    setNavState( next ) {
        this.setState( { navState: this.getNavStates( next, this.props.steps.length ) })
        if ( next < this.props.steps.length ) {
            this.setState( { compState: next })
        }
        this.checkNavState( next );
    }

    handleKeyDown( evt ) {
        if ( evt.which === 13 ) {
            this.next()
        }
    }

    personalInputsValid() {
        let $inputs = $('.registrationModal .container input');
        let inputFlags = true;
        let passErrorMessage = ' (Passwords must match and be longer than 6 digits)';
        let $password = $('#personalDetails #password');
        let $confirmPassword = $('#personalDetails #confirmPassword');
        $inputs.each(function(id, el) {
            let $el = $(el);
            if ($el.val().trim() === '') {
                $el.parent().addClass('has-error');
                inputFlags = false;
            } else {
                $el.parent().addClass('has-success').removeClass('has-error');
            }
        });
        if (($password.val().length < 6 && $confirmPassword.val().length < 6) ||
                ($password.val() != $confirmPassword.val())) {
            inputFlags = false;
            if (!$password.prev().text().includes(passErrorMessage)) {
                $password.prev().text($password.prev().text() + passErrorMessage);
                $confirmPassword.prev().text($confirmPassword.prev().text() + passErrorMessage);
            }
            $password.parent().addClass('has-error');
            $confirmPassword.parent().addClass('has-error');
        } else {
            $password.prev().text('Password');
            $confirmPassword.prev().text('Confirm Password');
            $password.parent().addClass('has-success').removeClass('has-error');
            $confirmPassword.parent().addClass('has-success').removeClass('has-error');
        }
        if (!/(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test($('.registerForm #email').val())) {
            inputFlags = false;
            $('.registerForm #email').parent().addClass('has-error');
            $('.registerForm #email').prev().text('E-Mail (Enter valid email format. Like email@gmail.com)')
        }
        else {
            $('.registerForm #email').prev().text('E-Mail');
        }
        return inputFlags;
    }

    next() {
        if ( $('#personalDetails').length) {
            if (this.personalInputsValid() ) {
                this.setNavState( this.state.compState + 1 );
            }
            else {
                return;
            }
        }
        this.setNavState( this.state.compState + 1 );
    }

    previous() {
        if ( this.state.compState > 0 ) {
            this.setNavState( this.state.compState - 1 )
        }
    }

    getClassName( className, i ) {
        return className + "-" + this.state.navState.styles[i];
    }

    renderSteps() {
        return this.props.steps.map(( s, i ) => (
            <li className={this.getClassName( "progtrckr", i ) } key={i} value={i}>
                <em>{i + 1}</em>
                <span>{this.props.steps[i].name}</span>
            </li>
        ) );
    }

    render() {

        return (
            <div className="registrationModal" onKeyDown={this.handleKeyDown}>
                <ol className="progtrckr">
                    {this.renderSteps() }
                </ol>
                <div className="container">
                    <form className="form-horizontal registerForm">
                        {this.props.steps[this.state.compState].component}
                        <div style={this.props.showNavigation ? {} : this.hidden}>
                            <button style={this.state.showPreviousBtn ? {} : this.hidden}
                                className="multistep__btn--prev"
                                onClick={this.previous}>Previous</button>

                            <button style={this.state.showNextBtn ? {} : this.hidden}
                                className="multistep__btn--next"
                                onClick={this.next}
                                type="submit">Next</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

MultiStep.defaultProps = {
    showNavigation: true
};