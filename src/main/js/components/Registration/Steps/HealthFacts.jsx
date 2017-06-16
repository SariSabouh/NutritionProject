import React, { Component, PropTypes } from 'react';
import HealthFactInfo from '../HealthFactInfo.jsx';

const store = { healthFacts: [] }

const HealthFacts = React.createClass( {
    getInitialState() {
        return store
    },

    handleHealthFactChange( healthFact ) {
        if ( store.healthFacts[healthFact.objectId] !== undefined ) {
            store.healthFacts[healthFact.objectId] = healthFact;
        } else {
            store.healthFacts.push(healthFact)
        }
        this.setState( store )
    },

    render() {
        return (
            <div className="health-facts">
                <h2>Have you been diagnosed with any of the below?</h2>
                <label>Please check all boxes that apply to you, and add any comments if applicable: </label>
                <HealthFactInfo handleHealthFactChange={this.handleHealthFactChange} healthFact={this.state.healthFacts[0]}
                    objectId="0" checkbox="true" hideIcon="true" text="Blood Pressure" id="blood-pressure" />
                <HealthFactInfo handleHealthFactChange={this.handleHealthFactChange} healthFact={this.state.healthFacts[1]} 
                    objectId="1" checkbox="true" hideIcon="true" text="Blood Sugar" id="blood-sugar" />
                <HealthFactInfo handleHealthFactChange={this.handleHealthFactChange} healthFact={this.state.healthFacts[2]}
                    objectId="2"  checkbox="true"text="HBA1C" id="HBA1C" />
                <HealthFactInfo handleHealthFactChange={this.handleHealthFactChange} healthFact={this.state.healthFacts[3]}
                    objectId="3"  checkbox="true" text="LDL" id="LDL" />
                <HealthFactInfo handleHealthFactChange={this.handleHealthFactChange} healthFact={this.state.healthFacts[4]} 
                    objectId="4"  checkbox="true" text="HDL" id="HDL" />
                <HealthFactInfo handleHealthFactChange={this.handleHealthFactChange} healthFact={this.state.healthFacts[5]}
                    objectId="5"  checkbox="true" text="Cholestrol" id="cholestrol" />
                <HealthFactInfo handleHealthFactChange={this.handleHealthFactChange} healthFact={this.state.healthFacts[6]}
                    objectId="6"  checkbox="true" text="Trig" id="trig" />
                <HealthFactInfo handleHealthFactChange={this.handleHealthFactChange} healthFact={this.state.healthFacts[7]}
                    objectId="7"  placeholder="168" text="Height in cms" id="height" />
                <HealthFactInfo handleHealthFactChange={this.handleHealthFactChange} healthFact={this.state.healthFacts[8]} 
                    objectId="8"  placeholder="72" text="Weight in kgs" id="weight" />
                <HealthFactInfo handleHealthFactChange={this.handleHealthFactChange} healthFact={this.state.healthFacts[9]} 
                    objectId="9"  placeholder="30" text="Weight Circumeference in cms" id="waist-circumference" />
                <HealthFactInfo handleHealthFactChange={this.handleHealthFactChange} healthFact={this.state.healthFacts[10]} 
                    objectId="10"  placeholder="15" text="Body Fat Percentage" id="body-fat" />
            </div>
        )
    }
})

export { HealthFacts }