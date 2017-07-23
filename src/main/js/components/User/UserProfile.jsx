import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar.jsx';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';



export default class UserProfile extends React.Component{
    
    
    render(){
        
        var imageStyle = {
            width:'30%'
        }
        var bodyStyle = {
            marginTop:'100px',
            background: '#9fc906'
        }
        
        var nameStyle ={
            color:'white'
        }
        
        var tabStyle ={
            background: '#72a603'
        }
        return(
            
            <div>
            <NavigationBar />
                
                <div>

	<div id="fh5co-main" style={bodyStyle}>
        <Tabs>
		<div className="fh5co-tab-wrap">
            <TabList>
			<ul className="fh5co-tab-menu" >
                
				<Tab><li className="active"><a href="#" data-tab="1"><span className="icon icon-user"></span><span className="menu-text">Profile</span></a></li></Tab>
				<Tab><li><a href="#" data-tab="4" data-pie="yes"><span className="icon icon-edit"></span><span className="menu-text">Edit Info</span></a></li></Tab>
                 
			</ul>
                  </TabList> 
                  
            <TabPanel>
			<div className="fh5co-tab-content active" data-content="1">
				<div className="fh5co-content-inner text-center">
					<div className="row row-bottom-padded-sm">
						<div className="col-md-12">
							<figure>
									<img src="../img/MAYSARA.png" style={imageStyle}/>
							</figure>
							<h1 style={nameStyle}>Maysara Odeh</h1>

						</div>
					</div>
				</div>
			</div>
                </TabPanel>
               <TabPanel>
			<div className="fh5co-tab-content active" data-content="1">
				<div className="fh5co-content-inner text-center">
					<div className="row row-bottom-padded-sm">
						<div className="col-md-12">
							
							<h1 style={nameStyle}>edit info</h1>

						</div>
					</div>
				</div>
			</div>
                </TabPanel>
            
            
		</div>
            </Tabs>
	</div>
                    </div>
                
 

  
                </div>
  
            
            
        
                
                
                )
        
    }
    
    
}