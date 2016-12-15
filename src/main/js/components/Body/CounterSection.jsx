import React from 'react';

import SectionHeader from './SectionHeader.jsx';

export default class CounterSection extends React.Component {
    render() {
        
        const counterUpStyle = {
                backgroundImage: 'url(img/counter-bg.jpg)',
        };

        return (
            <section id="counter-section">                                  
                <div id="counter-up-trigger" className="counter-up text-white parallax" data-stellar-background-ratio="0.5" style={counterUpStyle}>
                    <div className="cover"></div>
                    <SectionHeader header="Our Nutritionist Secrets" subtitle="Pssst! Yes we know what we do!" />
                    <div className="container">
                        <div className="row">
                            <div className="fact text-center col-md-4 col-sm-6">
                                <div className="fact-inner">
                                    <i className="fa fa-medkit fa-3x"></i>
                                    <div className="extra-space-l"></div>
                                    <span className="counter">100</span><span className="counter-add">+</span>
                                    <p className="lead">Patients Helped a Month</p>
                                </div>
                            </div>
                            <div className="fact text-center col-md-4 col-sm-6">
                                <div className="fact-inner">
                                    <i className="fa fa-flask fa-3x"></i>
                                    <div className="extra-space-l"></div>
                                    <span className="counter">10</span><span className="counter-add">+</span>
                                    <p className="lead">Years of Experience</p>
                                </div>
                            </div>
                            <div className="fact text-center col-md-4 col-sm-6">
                                <div className="fact-inner">
                                    <i className="fa fa-trophy fa-3x"></i>
                                    <div className="extra-space-l"></div>
                                    <span className="counter">15</span><span className="counter-add">+</span>
                                    <p className="lead">Certificates and Accomplishments</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
       )
    }
}