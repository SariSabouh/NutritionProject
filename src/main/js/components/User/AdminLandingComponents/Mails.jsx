import React from 'react';



export default class Mails extends React.Component{
    
    render(){
        
        var faStyle = {
            padding: "20px"
        };
        
        return(
            
            <div>     
                <div className="col-lg-3 col-xs-6">

                  <div className="small-box bg-red">
                    <div className="inner">
                      <h3>65</h3>

                      <h4>Mails</h4>
                    </div>
                    <div className="icon">
                      <i className="fa fa-envelope" style ={faStyle}></i>
                    </div>
                    <a href="/admin/inbox" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
                  </div>
                </div> 
            </div>
        )
    }
}