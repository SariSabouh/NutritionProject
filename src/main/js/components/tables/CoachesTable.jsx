import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar.jsx';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import AddCoachModal from './AddCoachModal.jsx';


export default class CoachesTable extends React.Component{
    
       constructor(props) {
        super(props)
        this.getCoachesData = this.getCoachesData.bind(this)
    }

    componentDidMount() {
        this.getCoachesData();
    }

    getCoachesData() {
        fetch('/api/auth/coach-list')
            .then((response) => response.json()) 
            .then((responseJSON) => { 
                this.setState({ 
                    coaches: responseJSON, 
                }); 
            });   
    }
    
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
        var RemoveCoachButtonStyle ={
         backgroundColor: 'rgba(218, 22, 22, 0.77)',
          color: 'aliceblue',
            borderColor:'#e34c4c'
        }
         var AddCoachButtonStyle ={
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
                                <button style={RemoveCoachButtonStyle} type="button" className = "btn btn-primary">
                                <span><i className="glyphicon glyphicon-minus"></i> Remove Coach </span>
                                </button>
                    
                                <button style={AddCoachButtonStyle} type="button" className = "btn btn-primary"  >
                                <span><i className="glyphicon glyphicon-plus"></i> Add Coach !</span>  
                                </button>
                            </div>
                            </div>
                        </div>
                </div>
               
        <BootstrapTable data={this.state ? this.state.coaches : []} selectRow={ selectRowProp } search={ true }>
            <TableHeaderColumn  isKey dataField='email'>email</TableHeaderColumn>
            <TableHeaderColumn dataField='firstName'>First Name</TableHeaderColumn>
            <TableHeaderColumn dataField='lastName'>Last Name</TableHeaderColumn>
            <TableHeaderColumn dataField='phone'>Phone</TableHeaderColumn>
        </BootstrapTable>
                
                   
                </div>
                </div>
        
        
         )
    }
    
}