import React from 'react';

import SectionHeader from './SectionHeader.jsx';

export default class SocialSection extends React.Component {
    render() {
        return (
            <section id="social-section">
            <SectionHeader header="Join Us" subtitle="Follow us on social networks" />
               <div className="container">
                   <ul className="social-list">
                       <li> <a className="rotate-box-1 square-icon text-center wow zoomIn" data-wow-delay="0.3s"><span className="rotate-box-icon"><i className="fa fa-facebook"></i></span></a></li>
                       <li> <a className="rotate-box-1 square-icon text-center wow zoomIn" data-wow-delay="0.4s"><span className="rotate-box-icon"><i className="fa fa-twitter"></i></span></a></li>
                       <li> <a className="rotate-box-1 square-icon text-center wow zoomIn" data-wow-delay="0.5s"><span className="rotate-box-icon"><i className="fa fa-google-plus"></i></span></a></li>
                       <li> <a className="rotate-box-1 square-icon text-center wow zoomIn" data-wow-delay="0.6s"><span className="rotate-box-icon"><i className="fa fa-pinterest-p"></i></span></a></li>
                       <li> <a className="rotate-box-1 square-icon text-center wow zoomIn" data-wow-delay="0.7s"><span className="rotate-box-icon"><i className="fa fa-tumblr"></i></span></a></li>
                       <li> <a className="rotate-box-1 square-icon text-center wow zoomIn" data-wow-delay="0.8s"><span className="rotate-box-icon"><i className="fa fa-dribbble"></i></span></a></li>                      
                   </ul>
               </div>               
           </section>
       )
    }
}