import React from 'react';
import ReactDOM from 'react-dom';

export default class Login extends React.Component {
    render() {        
        return (
        
        
       
       
        <div className="top-content">
        	
            <div className="inner-bg">
                <div className="container">
                	
                  
                    
                    <div className="row">
                        <div className="col-sm-5">
                        	
                        	<div className="form-box">
	                        	<div className="form-top">
	                        		<div className="form-top-left">
	                        			<h3>Login to our site</h3>
	                            		
	                        		</div>
	                        		<div className="form-top-right">
	                        			<i className="fa fa-key"></i>
	                        		</div>
	                            </div>
	                            <div className="form-bottom">
				                    <form  className="login-form">
				                    	<div className="form-group">
				                    		<label className="sr-only" >Username</label>
				                        	<input type="text"  placeholder="Username..." className="form-username form-control"  />
				                        </div>
				                        <div className="form-group">
				                        	<label className="sr-only" >Password</label>
				                        	<input type="password"  placeholder="Password..." className="form-password form-control"  />
				                        </div>
				                        <button type="submit" className="btn">Sign in!</button>
				                    </form>
				                   
			                    </div>
		                    </div>
		                
		                   
	                        
                        </div>
                        
                    
                        	
                       
                    </div>
                    
                </div>
            </div>
            
        </div>
        

        
        
        
        
        
        );
    
    }


}