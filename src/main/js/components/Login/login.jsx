import React from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from './components/NavigationBar/NavigationBar.jsx';


class Login extends React.Component {  
  
    
    render() {
    
    return(
        
<div> 
    
    <NavigationBar />
    
    
    <div className="wrapper">
            
  

    <form th:action="/login" method="post" className="login">
        
    <p className="title">Log in</p>
    <input type="text" placeholder="Email" autofocus/>
    <i className="fa fa-user"></i>
    <input type="password" placeholder="Password" />
    <i className="fa fa-key"></i>
    <a href="#">Forgot your password?</a>
    <button>
      <i className="spinner"></i>
      <span className="state">Log in</span>
    </button>
  </form>
    <p><a href="/index" th:href="/index">Back to home page</a></p> 
        
</div>
      
 </div>     
      
);  
   
  }
}

