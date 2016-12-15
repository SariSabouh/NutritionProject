import React from 'react';

import SectionHeader from './SectionHeader.jsx';

export default class ServicesSection extends React.Component {
    render() {
        
        const whatsAppStyle = {
                width: '30px',
        };

        return (
            <section id="services-section" className="page text-center">
                <SectionHeader header="Services" subtitle="All of this for you!" />
                <div className="rotate-box-2-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-6">
                                <a className="rotate-box-2 square-icon text-center wow zoomIn" data-wow-delay="0">
                                    <span className="rotate-box-icon"><i className="fa fa-heart"></i></span>
                                    <div className="rotate-box-info">
                                        <h4>Love</h4>
                                        <p><strong>Love</strong> yourself, just like we <strong>Love you</strong>. Let's become <strong>better together</strong></p>
                                    </div>
                                </a>
                            </div>
            
                            <div className="col-md-3 col-sm-6">
                                <a className="rotate-box-2 square-icon text-center wow zoomIn" data-wow-delay="0.2s">
                                    <span className="rotate-box-icon"><i className="fa fa-book"></i></span>
                                    <div className="rotate-box-info">
                                        <h4>Experts</h4>
                                        <p>Your <strong>Request</strong> is their <strong>Promise</strong>. They read the book, mastered the trait, and <strong>WILL</strong> succeed.</p>
                                    </div>
                                </a>
                            </div>
            
                            <div className="col-md-3 col-sm-6">
                                <a className="rotate-box-2 square-icon text-center wow zoomIn" data-wow-delay="0.4s">
                                    <span className="rotate-box-icon"><i className="fa fa-mobile"></i></span>
                                    <div className="rotate-box-info">
                                        <h4>Convenience</h4>
                                        <p>Get your coffee break and <img src="img/icons/whatsapp.png" style={whatsAppStyle} alt="WhatsApp"/> with us.</p>
                                    </div>
                                </a>
                            </div>
                            
                            <div className="col-md-3 col-sm-6">
                                <a className="rotate-box-2 square-icon text-center wow zoomIn" data-wow-delay="0.6s">
                                    <span className="rotate-box-icon"><i className="fa fa-pagelines"></i></span>
                                    <div className="rotate-box-info">
                                        <h4>Eco Friendly</h4>
                                        <p><strong>Papreless!</strong> Saving the trees by refusing to handle applications with papers.</p>
                                    </div>
                                </a>
                            </div>
                            
                        </div>
                    </div>
                    
                    <div className="container">
                        <div className="extra-space-l"></div>
                        <div className="text-center">
                            <a className="btn btn-default btn-lg-xl page-scroll" href="#prices-section">Apply Now!</a>
                        </div>
                    </div>                       
                </div>
            </section>
       )
    }
}