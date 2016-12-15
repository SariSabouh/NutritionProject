import React from 'react';

import SectionHeader from './SectionHeader.jsx';

export default class ContactSection extends React.Component {
    render() {
        
        const contactStyle = {
            backgroundImage: 'url(img/map-bg.jpg)',
        };

        return (
            <section id="contact-section" className="page text-white parallax" data-stellar-background-ratio="0.5" style={contactStyle}>
                <div className="cover"></div>
                <SectionHeader header="Contacts" subtitle="Reach Out!" />
                <div className="contact wow bounceInRight" data-wow-delay="0.4s">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="contact-info">
                                    <h4>Our Info</h4>
                                    <ul className="contact-address">
                                        <li><i className="fa fa-map-marker fa-lg"></i>&nbsp; Nablus/Ramallah ,<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; West Bank, Palestine</li>
                                        <li><i className="fa fa-map-marker fa-lg"></i>&nbsp; 332 Cahaba River Parc ,<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Birmingham, AL, 35243</li>
                                        <li><i className="fa fa-phone"></i>&nbsp; +972 -599 -361614</li>
                                        <li><i className="fa fa-phone"></i>&nbsp; +1 -256 -658 -7168</li>
                                        <li><i className="fa fa-envelope"></i> sari.sbouh@gmail.com</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="contact-form">
                                    <h4>Write to us</h4>
                                    <form role="form">
                                        <div className="form-group">
                                            <input type="text" className="form-control input-lg" placeholder="Your Name" required/>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control input-lg" placeholder="E-mail" required/>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control input-lg" placeholder="Subject" required/>
                                        </div>
                                        <div className="form-group">
                                            <textarea className="form-control input-lg" rows="5" placeholder="Message" required></textarea>
                                        </div>
                                        <button type="submit" className="btn wow bounceInRight" data-wow-delay="0.8s">Send</button>
                                    </form>
                                </div>  
                            </div>                                                  
                        </div>
                    </div>
                </div>
            </section>
       )
    }
}