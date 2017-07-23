import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar.jsx';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

var Customers = [{
      email: "maysara@ieee.org",
      firstName: "ahmad",
      lastName: "saleem",
      plan: "premium",
      phone:"0592305432",
      trial: "no",
      blocked:"no"
  }, {
      email: "mohammad@gmail.com",
      firstName: "mohammad",
      lastName:"Odeh",
      plan: "basic",
      phone:"059830543212",
      trial: "yes",
      blocked:"no"
  }];
export default class CustomersTable extends React.Component{
    

    
    render(){
        
        var divStyle = {
         margin:'30px'
            };
        var culomnHeadStyle ={
            fontSize:'14px'
        }
        const selectRowProp = {
            mode: 'checkbox'
            };
        var deactivateButtonStyle ={
         backgroundColor: 'rgba(218, 22, 22, 0.77)',
          color: 'aliceblue',
            borderColor:'#e34c4c'
        }
         var activateButtonStyle ={
         backgroundColor: 'rgba(22, 218, 118, 0.77)',
          color: 'aliceblue',
            borderColor:'rgba(22, 218, 118, 0.77)'
        }
            
        return(
            
            <div>
            <NavigationBar />
        
       
            <div style={divStyle}>
                <div className="react-bs-table-tool-bar ">
                    <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-8">
                            <div className="btn-group btn-group-sm">
                                <button style={deactivateButtonStyle} type="button" className = "btn btn-primary">
                                <span><i className="glyphicon glyphicon-minus"></i> Deactivate</span>
                                </button>
                    
                                <button style={activateButtonStyle} type="button" className = "btn btn-primary">
                                <span><i className="glyphicon glyphicon-check"></i> Activate</span>
                                </button>
                            </div>
                            </div>
                        </div>
                </div>
        <BootstrapTable data={Customers} selectRow={ selectRowProp } search={ true }>
            <TableHeaderColumn  isKey dataField='email'>email</TableHeaderColumn>
            <TableHeaderColumn dataField='firstName'>First Name</TableHeaderColumn>
            <TableHeaderColumn dataField='lastName'>Last Name</TableHeaderColumn>
            <TableHeaderColumn dataField='plan'>plan</TableHeaderColumn>
            <TableHeaderColumn dataField='phone'>Phone</TableHeaderColumn>
            <TableHeaderColumn dataField='trial'>is Trial?</TableHeaderColumn>
            <TableHeaderColumn dataField='blocked'>is Blocked?</TableHeaderColumn>
        </BootstrapTable>
                
                   
                </div>
                </div>
        
        
         )
    }
    
}