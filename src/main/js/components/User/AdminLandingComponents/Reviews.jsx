import React from 'react';



export default class Reviews extends React.Component{
     
    render(){

        var faStyle = {
            padding: "20px"
        };
        
        return(
            
            <div>
                  <div className="col-lg-3 col-xs-6">
                  <div className="small-box bg-yellow">
                    <div className="inner">
                      <h3>44</h3>
                      <h4>Reviews</h4>
                    </div>
                    <div className="icon">
                      <i className="fa fa-star" style ={faStyle}></i>
                    </div>
                    <a href="/admin/reviews" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
                  </div>
                </div>   
            </div>
        )
    }
}