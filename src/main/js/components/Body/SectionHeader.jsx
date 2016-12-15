import React from 'react';

export default class SectionHeader extends React.Component {
    render() {
        return (
            <div className="page-header-wrapper">
                <div className="container">
                    <div className="page-header text-center wow fadeInUp" data-wow-delay="0.3s">
                        <h2>{this.props.header}</h2>
                        <div className="devider"></div>
                        <p className="subtitle">{this.props.subtitle}</p>
                    </div>
                </div>
            </div>
       )
    }
}