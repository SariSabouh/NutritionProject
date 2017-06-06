import React, { Component, PropTypes } from 'react'

const store = { activities: [] }

const PhysicalFitness = React.createClass( {
    getInitialState() {
        return {
            store: store,
            isDisabled: true
        }
    },

    bindCalls() {
        $( '.remove-activity' ).click((e) => {
            let activity = $( e.currentTarget ).parents( '.activity-list' )
            if ( activity.find('input')[0].hasAttribute('disabled') ) {
                activity.remove()

                store.activities = store.activities.filter(function( obj ) {
                    return obj.id !== parseInt(activity.attr('id'))
                })
                this.setState(store)
            }
        });

        $( '#physicalFitness input' ).on( 'input', ( e ) => {
            let isValid = true;
            $( e.currentTarget ).parents( '.activity-list' ).find( 'input' ).each(( i, el ) => {
                if ( !$( el ).val() ) {
                    $( '.add-activity-button' ).attr( 'disabled', 'true' );
                    isValid = false;
                    this.setState( { isDisabled: true })
                }
            });
            if ( isValid ) {
                $( '.add-activity-button' ).removeAttr( 'disabled' );
                this.setState( { isDisabled: false })
            }
        });
    },

    componentDidMount() {
        this.bindCalls();
    },

    updateRows( activityCounter ) {
        let activityList = $( '.activity-list' );
        activityList.last().after( activityList.last().clone().attr( 'id', activityCounter ) ).find( 'input' ).attr( 'disabled', 'true' );
        $( '.activity-list' ).last().find( 'input' ).val( '' );
        this.bindCalls();
    },

    handleActivitiesChanged() {
        let activityCounter = parseInt( $( '.activity-list' ).last().attr( 'id' ) );
        store.activities.push( {
            activity: $( '#' + activityCounter + ' #activity' ).val(),
            duration: $( '#' + activityCounter + ' #duration' ).val(),
            frequency: $( '#' + activityCounter + ' #frequency' ).val(),
            id: activityCounter
        });
        $( '.add-activity-button' ).attr( 'disabled', 'true' );
        this.setState(
            {
                store,
                isDisabled: true
            })
        this.updateRows( activityCounter + 1 )
    },

    render() {
        const isDisabled = this.state.isDisabled;

        return (
            <div id="physicalFitness">
                <div className="row">
                    <div className="activity-list"  id="0">
                        <button type="button" className="close remove-activity" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                        <div>
                            <label>Physical Activity</label>
                            <input id="activity" placeholder="Running" type="text" autoFocus/>
                        </div>
                        <div>
                            <label>Duration ( minutes ) </label>
                            <input id="duration" placeholder="30" type="number" autoFocus/>
                        </div>
                        <div>
                            <label>Frequency ( days a week ) </label>
                            <input className="no-margin" id="frequency" placeholder="2" type="number" autoFocus/>
                        </div>
                    </div>
                </div>
                <button className="add-activity-button btn-primary" onClick={ () => { this.handleActivitiesChanged() } } disabled={isDisabled}>Add Activity</button>
            </div>
        )
    }
})

export { PhysicalFitness }