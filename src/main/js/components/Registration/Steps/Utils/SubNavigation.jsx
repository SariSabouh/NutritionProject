import React from 'react';

export default class SubNavigation extends React.Component {
    constructor( props ) {
        super( props );
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        $('.diet-info-nav').removeClass('active');
        $(event.target).addClass('active');
        this.props.viewSection(this.props.buttonId)
    }

    render() {
        return (
            <div className='u-display-inline'>
                <a 
                    className={this.props.buttonId == 'protein-sources' ? 'diet-info-nav active' : 'diet-info-nav'}
                    id={this.props.buttonId}
                    onClick={this.handleClick}>{this.props.buttonName}</a>
            </div>
        );
    }
}
