import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar.jsx';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';


const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
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

                      <h4>Users</h4>
                    </div>
                    <div className="icon">
                      <i className="fa fa-users" style ={faStyle}></i>
                    </div>
                    <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
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
                    <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
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
                    <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
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
                    <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
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
                   <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
                   <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
                
                      
          </div>
 
        )
    }

}
