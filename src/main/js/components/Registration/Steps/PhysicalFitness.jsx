import React, { Component, PropTypes } from 'react'
import PhysicalFitnessInfo from './Utils/PhysicalFitnessInfo.jsx'

const store = { activities: [] , modified:false}

const PhysicalFitness = React.createClass( {
    getInitialState() {
        
        if (!store.modified)
            for (let i = 0; i < 1; i++) store.activities.push({ activity: '', duration: '', frequency: '', id: i})
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
            id: activityCounter,
            
        });
        $( '.add-activity-button' ).attr( 'disabled', 'true' );
        this.setState(
            {
                store,
                isDisabled: true
            })
        this.updateRows( activityCounter + 1 )
        store.modified = true
    },


    render() {
        const isDisabled = this.state.isDisabled;

        return (
            
            <div className="row">
                <div className="activity-list"  id="0">
            
                    <div id="physicalFitness">
                
                        <PhysicalFitnessInfo handleActivitiesChanged={this.handleActivitiesChanged} activity={this.state.activities}
                    objectId={this.activityCounter} checkbox="true" hideIcon="true" />
            
                        <button className="add-activity-button btn-primary" onClick={ () => { this.handleActivitiesChanged() } } disabled={isDisabled}>Add Activity</button>
                    </div>
                </div>
            </div>
            
           
        )
    }
})

export { PhysicalFitness }