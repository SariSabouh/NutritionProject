import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar.jsx';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';


const data = [
      {name: 'Jan', Customers: 0, amt: 2400},
      {name: 'Feb', Customers: 3000, amt: 2210},
      {name: 'Mar', Customers: 2000, amt: 2290},
      {name: 'Apr', Customers: 2780, amt: 2000},
      {name: 'May', Customers: 1890, amt: 2181},
      {name: 'Jun', Customers: 2390, amt: 2500},
      {name: 'Jul', Customers: 3490, amt: 2100},
      {name: 'Aug', Customers: 3490, amt: 2100},
      {name: 'Sep', Customers: 3490, amt: 2100},
      {name: 'Oct', Customers: 3490, amt: 2100},
      {name: 'Nov', Customers: 3490, amt: 2100},
      {name: 'Dec', Customers: 5000, amt: 2100}
];




export default class AdminLanding extends React.Component {


    render(){
        
       var boxStyle = {
        padding: "20px",
        marginTop: "80px"
        };
        
        var faStyle = {
            padding: "20px"
        };
        
        var texturaStyle = {
            
            width: "100%",
            height: "125px",
            fontSize: "14px",
            lineHeight: "18px",
            border: "1px solid #dddddd; padding: 10px"            
        };
 

        return(
            <div>
            <NavigationBar />
            
           <div className="wrapper">
               
            <section className="content">

              <div className="row" style={boxStyle}>
                <div className="col-lg-3 col-xs-6">

                  <div className="small-box bg-aqua">
                    <div className="inner">
                      <h3>150</h3>

                      <h4>Customers</h4>
                    </div>
                    <div className="icon">
                      <i className="fa fa-users" style ={faStyle}></i>
                    </div>
                    <a href="/admin/customers" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
                  </div>
                </div>

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
            </section>
  
        </div>
                <LineChart width={600} height={300} data={data}
                        margin={{top: 5, right: 30, left: 10, bottom: 5}}>
                   <XAxis dataKey="name"/>
                   <YAxis/>
                   <CartesianGrid strokeDasharray="3 3"/>
                   <Tooltip/>
                   <Legend />
                   <Line type="monotone" dataKey="Customers" stroke="#82ca9d" />
                </LineChart>
                
                      
          </div>
 
        )
    }

}
