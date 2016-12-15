import React from 'react';

import SectionHeader from './SectionHeader.jsx';

export default class PricesSection extends React.Component {
    render() {
        return (
            <section id="prices-section" className="page">
                <SectionHeader header="Prices" subtitle="Cheaper While Still Convenient" />
                <div className="extra-space-l"></div>
                <div className="prices">
                    <div className="container">
                        <div className="row">
                            
                            <div className="price-box col-sm-6 col-md-4 wow flipInY" data-wow-delay="0.3s">
                                <div className="panel panel-default">
                                    <div className="panel-heading text-center">
                                        <i className="fa fa-plug fa-2x"></i>
                                        <h3>Basic</h3>
                                    </div>
                                    <div className="panel-body text-center">
                                        <p className="lead"><strong><i className="fa fa-ils"></i>100</strong></p>
                                    </div>
                                    <ul className="list-group text-center">
                                        <li className="list-group-item">Text on Viber</li>
                                        <li className="list-group-item">3 projects</li>
                                        <li className="list-group-item">1 GB Disk</li>
                                        <li className="list-group-item">Custom Domain</li>
                                        <li className="list-group-item">24/7 Support</li>
                                    </ul>
                                    <div className="panel-footer text-center">
                                        <a className="btn btn-default" href="#">Apply Now!</a>
                                    </div>
                                </div>                                      
                            </div>

                            <div className="price-box col-sm-6 col-md-4 wow flipInY" data-wow-delay="0.5s">
                                <div className="panel panel-default">
                                    <div className="panel-heading text-center">
                                        <i className="fa fa-cog fa-2x"></i>
                                        <h3>Motivated</h3>
                                    </div>
                                    <div className="panel-body text-center">
                                        <p className="lead"><strong><i className="fa fa-ils"></i>275</strong></p>
                                    </div>
                                    <ul className="list-group text-center">
                                        <li className="list-group-item">Text/Call on Viber and Skype</li>
                                        <li className="list-group-item">5 projects</li>
                                        <li className="list-group-item">5 GB Disk</li>
                                        <li className="list-group-item">Custom Domain</li>
                                        <li className="list-group-item">24/7 Support</li>
                                    </ul>
                                    <div className="panel-footer text-center">
                                        <a className="btn btn-default" href="#">Apply Now!</a>
                                    </div>
                                </div>                                      
                            </div>
                            
                            <div className="price-box col-sm-6 price-box-featured col-md-4 wow flipInY" data-wow-delay="0.7s">
                                <div className="panel panel-default">
                                    <div className="panel-heading text-center">
                                        <i className="fa fa-star fa-2x"></i>
                                        <h3>Dedicated</h3>
                                    </div>
                                    <div className="panel-body text-center">
                                        <p className="lead"><strong><i className="fa fa-ils"></i>520</strong></p>
                                    </div>
                                    <ul className="list-group text-center">
                                        <li className="list-group-item">Personal Use</li>
                                        <li className="list-group-item">20 Projects</li>
                                        <li className="list-group-item">20 GB Disk</li>
                                        <li className="list-group-item">Custom Domain</li>
                                        <li className="list-group-item">24/7 Support</li>
                                    </ul>
                                    <div className="panel-footer text-center">
                                        <a className="btn btn-default" href="#">Apply Now!</a>
                                    </div>
                                    <div className="price-box-ribbon"><strong>Best Offer!</strong></div>
                                </div>                                      
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="extra-space-l"></div>
            </section>
       )
    }
}