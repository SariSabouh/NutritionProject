import React from 'react';

export default class PhysicalFitnessInfo extends React.Component {
      constructor(props) {
        super(props);
        this.state = props.activity
        this.handleActivityChange = this.handleActivityChange.bind(this);
        this.handleDurationChange = this.handleDurationChange.bind(this);
        this.handleFrequencyChange = this.handleFrequencyChange.bind(this);
//        this.handleIdChange = this.handleIdChange.bind(this);
    }
    
      handleActivityChange( event ) {
        let currentState = this.state
        currentState.activity = event.target.value
        this.setState(currentState)
        this.props.handleActivitiesChanged(this.state)
    }
    
      handleDurationChange( event ) {
        let currentState = this.state
        currentState.duration = event.target.value
        this.setState(currentState)
        this.props.handleActivitiesChanged(this.state)
    }
    
      handleFrequencyChange( event ) {
        let currentState = this.state
        currentState.frequency = event.target.value
        this.setState(currentState)
        this.props.handleActivitiesChanged(this.state)
    }
    
//       handleIdChange( event ) {
//        let currentState = this.state
//        currentState.id = event.target.value
//        this.setState(currentState)
//        this.props.handleActivitiesChanged(this.state)
//    }
    
    render() {

            return (
                
                <div>
                
                        <button type="button" className="close remove-activity" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                        <div>
                            <label>Physical Activity</label>
                            <input  id="activity" placeholder="Running" type="text"
                                onChange = {this.handleActivityChange}
                                value = {this.state.activity}
                                autoFocus/>
                        </div>
                        <div>
                            <label>Duration ( minutes ) </label>
                            <input id="duration" placeholder="30" type="number"
                                onChange = {this.handleDurationChange}
                                value = {this.state.duration}
                                autoFocus/>
                        </div>
                        <div>
                            <label>Frequency ( days a week ) </label>
                            <input className="no-margin" id="frequency" placeholder="2" type="number" 
                                onChange = {this.handleFrequencyChange}
                                value = {this.state.frequency}
                                autoFocus/>
                        </div>
                 
               </div>
       
            )
        }
    }
