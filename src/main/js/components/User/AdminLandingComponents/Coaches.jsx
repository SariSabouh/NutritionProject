import React from 'react';



export default class Coaches extends React.Component{
    
    render(){
        
        var faStyle = {
            padding: "20px"
        };
        
        return(
            
            <div>              
                 <div className="col-lg-3 col-xs-6">
                  <div className="small-box bg-green">
                    <div className="inner">
                      <h3>1</h3>
                      <h4>Coaches</h4>
                    </div>
                    <div className="icon">
                      <i className="fa fa-users" style ={faStyle}></i>
                    </div>
                    <a href="/admin/coaches" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
                  </div>
                </div>
            </div>
        )
    }
}