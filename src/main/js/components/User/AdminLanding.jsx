import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar.jsx';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import Customers from './AdminLandingComponents/Customers.jsx';
import Coaches from './AdminLandingComponents/Coaches.jsx';
import Reviews from './AdminLandingComponents/Reviews.jsx';
import Mails from './AdminLandingComponents/Mails.jsx';
import CustomersTable from '../tables/CustomersTable.jsx';


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
                  
               <Customers />
               <Coaches />
               <Reviews />
               <Mails />
                  
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
