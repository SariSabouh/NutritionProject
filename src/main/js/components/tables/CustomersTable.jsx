import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar.jsx';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

export default class CustomersTable extends React.Component{
    constructor(props) {
        super(props)
        this.getCustomersData = this.getCustomersData.bind(this)
    }

    componentDidMount() {
        this.getCustomersData();
    }

    getCustomersData() {
        fetch('/api/auth/user-list')
            .then((response) => response.json()) 
            .then((responseJSON) => { 
                this.setState({ 
                    customers: responseJSON, 
                }); 
            });   
    }

    render() {
        
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
        <BootstrapTable data={this.state ? this.state.customers : []} selectRow={ selectRowProp } search={ true }>
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