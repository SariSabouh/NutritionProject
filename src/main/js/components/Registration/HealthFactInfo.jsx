import React from 'react';

import MoreInfoModal from './MoreInfoModal.jsx';

export default class HealthFactInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.healthFact
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleInputTextChange = this.handleInputTextChange.bind(this);
    }

    handleCheckboxChange( event ) {
        let currentState = this.state
        currentState.checkbox = event.target.checked
        this.setState(currentState)
        this.props.handleHealthFactChange(this.state)
    }
        
    handleDescriptionChange( event ) {
        let currentState = this.state
        currentState.description = event.target.value
        this.setState(currentState)
        this.props.handleHealthFactChange(this.state)
    }
        
    handleInputTextChange( event ) {
        let currentState = this.state
        currentState.inputText = event.target.value
        this.setState(currentState)
        this.props.handleHealthFactChange(this.state)
    }
    
    render() {
        
        let placeholder = this.props.placeholder;

        if (!placeholder) {
            placeholder = "I have had it for...";
        }

        if (this.props.checkbox) {
            return (
                <div className="fact margin-tb-med" id={this.props.id}>
                    <div className="checkbox-container">
                        <input 
                            type="checkbox"
                            onChange={this.handleCheckboxChange}
                            checked={this.state.checkbox}/>
                        <span>{this.props.text}</span>
                        <MoreInfoModal modalText={this.props.id} hideIcon={this.props.hideIcon} moreInfoText={this.props.moreInfoText}/>
                    </div>
                    <input 
                        type="text" 
                        className="description" 
                        placeholder={placeholder}
                        onChange={this.handleDescriptionChange}
                        value={this.state.description}/>
                </div>
            )
        } else {
            return (
                <div className="fact margin-tb-med" id={this.props.id}>
                    <label>{this.props.text}</label>
                    <input 
                        type="number" 
                        className="description full-width" 
                        placeholder={placeholder}
                        onChange={this.handleInputTextChange}
                        value={this.state.inputText}/>
                </div>
            )
        }
    }
}