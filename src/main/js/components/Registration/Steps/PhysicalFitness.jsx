import React, { Component, PropTypes } from 'react'

const store = { activities: [] }

const PhysicalFitness = React.createClass( {
    getInitialState() {
        return store
    },
    
    inputsValid( activityCounter ) { //Make first row greyed out then replace second with first then submit.
      let isValid = true;
      $('#' + activityCounter + ' input').each(function() {
          let $el = $(this);
          if (!$el.val()) {
              $('.activity-errors .' + $el.attr('id') + '-error').removeClass('no-visible');
              isValid = false;
          }
          else {
              $('.activity-errors .' + $el.attr('id') + '-error').addClass('no-visible');
          }
      });
      return isValid;  
    },

    handleActivitiesChanged() {
        let activityCounter = store.activities.length;
        if(this.inputsValid(activityCounter + 1)) {
            store.activities.push({
                activity : $('#' + activityCounter + ' #activity').val(),
                duration: $('#' + activityCounter + ' #duration').val(),
                frequency: $('#' + activityCounter + ' #frequency').val()
            });
            this.setState( store );
            $('.physical-activity').last().after($('.physical-activity').first().clone()).attr('id', activityCounter+1);
            $('.physical-activity').last().find('input').val('');
        }
    },

    render() {
        return (
            <div>
                <div className="row">
                    <div className="activity-list">
                        <label className="col-md-6 no-left-padding">Physical Activity</label>
                        <label className="col-md-3 no-left-padding">Duration (minutes)</label>
                        <label className="col-md-3 no-left-padding">Frequency (days a week)</label>
                        <div className="physical-activity" id="0">
                            <input className="col-md-6" id="activity" placeholder="Running"
                                type="text"
                                autoFocus/>
                            <input className="col-md-3" id="duration" placeholder="30"
                                type="number"
                                autoFocus/>
                            <input className="col-md-3" id="frequency" placeholder="2"
                                type="number"
                                autoFocus/>
                        </div>
                        <div className="activity-errors">
                            <label className="col-md-6 no-left-padding no-visible error activity-error">Physical Activity</label>
                            <label className="col-md-3 no-left-padding no-visible error duration-error">Duration (minutes)</label>
                            <label className="col-md-3 no-left-padding no-visible error frequency-error">Frequency (days a week)</label>
                        </div>
                        <button className="add-activity-button" onClick={ () => {this.handleActivitiesChanged()} }>Add Activity</button>
                    </div>
                </div>
            </div>
        )
    }
})

export { PhysicalFitness }