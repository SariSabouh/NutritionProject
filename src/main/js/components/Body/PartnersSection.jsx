import React from 'react';

import SectionHeader from './SectionHeader.jsx';

export default class PartnersSection extends React.Component {
    render() {
        return (
            <section id="partners-section">
                <SectionHeader header="Our Partners" subtitle="Together, Success is Inevitable" />
                <div className="container">
                    <div id="owl-partners" className="owl-carousel">
                        <a href="http://www.abeersharaf.com" target="_blank"><img className="partners-logo" src="img/partners/AbeerSharaf.png" alt="Abeer Sharaf" /></a>
                        <a href="http://www.paliup.com" target="_blank"><img className="partners-logo" src="img/partners/PaliUp.png" alt="PaliUp" /></a>
                        <a href="http://www.waysinternational.com" target="_blank"><img className="partners-logo" src="img/partners/WaysLogo.png" alt="Ways International" /></a>
                    </div>
                </div>
            </section>
       )
    }
}