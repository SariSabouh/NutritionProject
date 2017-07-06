import React from 'react';

export default class Landing extends React.Component {
    render() {
        const role = $( '#user-role' ).text()

        if ( role === '[ROLE_USER]' ) {
            return (
                <div id='user'>
                    Welcome User
                </div>
            )
        } else if ( role === '[ROLE_COACH]' ) {
            return (
                <div id='coach'>
                    Welcome Coach
                </div>
            )
        } else {
            return (
                <div id='admin'>
                    Welcome Admin
                </div>
            )
        }
    }
}