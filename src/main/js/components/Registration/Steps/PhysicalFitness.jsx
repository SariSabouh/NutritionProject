import React, { Component, PropTypes } from 'react'

const store = { activities: [] }

const PhysicalFitness = React.createClass( {
    getInitialState() {
        return store
    },
    
    inputsValid( activityCounter ) {
      let isValid = true;
      $('#' + activityCounter + ' input').each(function() {
          let $el = $(this);
          if (!$el.val()) {
              $('.activity-list .' + $el.attr('id') + '-error').removeClass('no-visible');
              isValid = false;
          }
          else {
              $('.activity-list .' + $el.attr('id') + '-error').addClass('no-visible');
          }
      });
      return isValid;  
    },
    
    updateRows( activityCounter ) {
        let activityList = $('.activity-list');
        activityList.last().after(activityList.last().clone().attr('id', activityCounter));
        activityList.last().find('input').val('');
    },

    handleActivitiesChanged() {
        let activityCounter = parseInt($('.activity-list').last().attr('id'));
        if(this.inputsValid(activityCounter)) {
            store.activities.push({
                activity : $('#' + activityCounter + ' #activity').val(),
                duration: $('#' + activityCounter + ' #duration').val(),
                frequency: $('#' + activityCounter + ' #frequency').val()
            });
            this.setState( store );
            this.updateRows(activityCounter + 1)
        }
    },

    render() {
        return (
            <div>
                <div className="row">
                    <div className="activity-list"  id="0">
                        <button type="button" className="close remove-activity" aria-label="Close">
                                <span aria-hidden="true">×</span>
                        </button>
                        <div>
                            <label>Physical Activity</label>
                            <input id="activity" placeholder="Running" type="text" autoFocus/>
                            <label className="no-visible error activity-error">Physical Activity</label>
                        </div>
                        <div>
                            <label>Duration (minutes)</label>
                            <input id="duration" placeholder="30" type="number" autoFocus/>
                            <label className="no-visible error duration-error">Duration (minutes)</label>
                        </div>
                        <div>
                            <label>Frequency (days a week)</label>
                            <input id="frequency" placeholder="2" type="number" autoFocus/>
                            <label className="no-visible error frequency-error">Frequency (days a week)</label>
                        </div>
                    </div>
                </div>
                <button className="add-activity-button" onClick={ () => {this.handleActivitiesChanged()} }>Add Activity</button>
            </div>
        )
    }
})

export { PhysicalFitness }