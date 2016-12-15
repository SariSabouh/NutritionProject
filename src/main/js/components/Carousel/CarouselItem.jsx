import React from 'react';

export default class CarouselItem extends React.Component {
    render() {
        return (
            <div className="item carousel-text">
                <h1>{this.props.header}</h1>
                <p>{this.props.subHeader}</p>
                <div className="extra-space-l"></div>
                <a className="btn btn-blank page-scroll" href={this.props.href}>{this.props.hrefText}</a>
            </div>
        )
    }
}