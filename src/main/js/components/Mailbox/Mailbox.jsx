import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar.jsx';

export default class Mailbox extends React.Component {
 
    render(){
        
        
     var divStyle = {
         margin:'30px'
            };
        var serchStyle={
            marginTop: '-4px',
            marginRight: '-10px'

        }
        var borderStyle={
            borderTopColor: '#72a603'
        }
        
        return(
            <div>
            <NavigationBar />
            <div style={divStyle}>
            <div>
  <div className="box box-primary" style={borderStyle}>
    <div className="box-header with-border">
      <h3 className="box-title">Inbox</h3>

      <div className="box-tools pull-right">
        <div style ={serchStyle} className="has-feedback">
          <input type="text" className="form-control input-sm" placeholder="Search Mail"/>
          <span className="glyphicon glyphicon-search form-control-feedback"></span>
        </div>
      </div>
  
    </div>

    <div className="box-body no-padding">
    
      <div className="table-responsive mailbox-messages">
        <table className="table table-hover table-striped">
          <tbody>
          <tr>
            <td><input type="checkbox"/></td>
            <td className="mailbox-star"><a href="#"><i className="fa fa-star text-yellow"></i></a></td>
            <td className="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
            <td className="mailbox-subject"><b>test test</b> - Trying to test the website
            </td>
            <td className="mailbox-attachment"></td>
            <td className="mailbox-date">5 mins ago</td>
          </tr>

          </tbody>
        </table>
      
      </div>
    
    </div>
    
    <div className="box-footer no-padding">
      
    </div>
  </div>

</div>
                </div>
                </div>
        
        
        
        
        
        
        )
    }
    
    
    
    
}