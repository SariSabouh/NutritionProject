import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar.jsx';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

   var Reviews = [{
      coachName: "tima@gmail.com",
      coachRate: "Tima",
      moreInfo: "Pina"

  }];
export default class ReviewsTable extends React.Component{
    
    
    
    render(){
        
        
 
     var divStyle = {
         margin:'30px'
            };
        
        return(
            
            <div>
        
        <NavigationBar />
            <div style={divStyle}>
            <BootstrapTable data={Reviews} search={ true }>
            <TableHeaderColumn  isKey dataField='coachName'>Coach Name</TableHeaderColumn>
            <TableHeaderColumn dataField='coachRate'>Coach Rate</TableHeaderColumn>
            <TableHeaderColumn dataField='moreInfo'>More Info</TableHeaderColumn>
        </BootstrapTable>
                </div>
        </div>
        
        
        )
    }
}
