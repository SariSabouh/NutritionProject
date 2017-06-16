import React from 'react';

const healthFact = { checkbox: '', description: '', inputText: '', objectId: ''}

export default class HealthFactInfo extends React.Component {
    constructor(props) {
        super(props);
        if (this.props.healthFact !== undefined)
            this.state = this.props.healthFact
        else
            this.state = healthFact;
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleInputTextChange = this.handleInputTextChange.bind(this);
    }

    handleCheckboxChange( event ) {
        healthFact.checkbox = event.target.checked
        healthFact.objectId = this.props.objectId
        this.setState( healthFact )
        this.props.handleHealthFactChange(healthFact)
    }
        
    handleDescriptionChange( event ) {
        healthFact.description = event.target.value
        this.setState( healthFact )
        this.props.handleHealthFactChange(healthFact)
    }
        
    handleInputTextChange( event ) {
        healthFact.inputText = event.target.value
        healthFact.objectId = this.props.objectId
        this.setState( healthFact )
        this.props.handleHealthFactChange(healthFact)
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
                            value={this.state.checkbox}/>
                        <span>{this.props.text}</span>
                        <i aria-hidden="true" className="fa fa-question-circle" hidden={this.props.hideIcon}></i>
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