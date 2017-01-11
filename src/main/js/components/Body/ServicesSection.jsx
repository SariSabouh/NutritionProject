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
                                        <p>We will help you learn to love and care for your wellbeing.</p>
                                    </div>
                                </a>
                            </div>
            
                            <div className="col-md-3 col-sm-6">
                                <a className="rotate-box-2 square-icon text-center wow zoomIn" data-wow-delay="0.2s">
                                    <span className="rotate-box-icon"><i className="fa fa-book"></i></span>
                                    <div className="rotate-box-info">
                                        <h4>Experts</h4>
                                        <p>Our team is highly skilled and nationally renowned in the human nutrition and wellbeing field.</p>
                                    </div>
                                </a>
                            </div>
            
                            <div className="col-md-3 col-sm-6">
                                <a className="rotate-box-2 square-icon text-center wow zoomIn" data-wow-delay="0.4s">
                                    <span className="rotate-box-icon"><i className="fa fa-mobile"></i></span>
                                    <div className="rotate-box-info">
                                        <h4>Success</h4>
                                        <p>We do not believe in fad diets, or quick fix, we will guide to achieve a healthy lifestyle that you can enjoy and live with for the rest of your life.</p>
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