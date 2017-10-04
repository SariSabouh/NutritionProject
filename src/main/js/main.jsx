import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Landing from './components/User/Landing.jsx';
import CustomersTable from './components/tables/CustomersTable.jsx';
import CoachesTable from './components/tables/CoachesTable.jsx';
import UserProfile from './components/User/UserProfile.jsx';
import ReviewsTable from './components/tables/ReviewsTable.jsx';
import Mailbox from './components/Mailbox/Mailbox.jsx';

if ( window.location.href.includes( '/user/landing' ) ) ReactDOM.render( <Landing />, document.getElementById( 'app' ) )
else if (window.location.href.includes('/admin/customers'))ReactDOM.render(<CustomersTable />,
document.getElementById( 'app' ))
else if (window.location.href.includes('/admin/coaches'))ReactDOM.render(<CoachesTable />,
document.getElementById( 'app' ))
else if (window.location.href.includes('/user/user-profile'))ReactDOM.render(<UserProfile />,
document.getElementById( 'app' ))
else if (window.location.href.includes('/admin/reviews'))ReactDOM.render(<ReviewsTable />,
document.getElementById( 'app' ))
else if (window.location.href.includes('/admin/inbox'))ReactDOM.render(<Mailbox />,
document.getElementById( 'app' ))
else ReactDOM.render( <App />, document.getElementById( 'app' ) )
