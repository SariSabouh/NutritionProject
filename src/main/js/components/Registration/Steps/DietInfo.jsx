import React, { Component, PropTypes } from 'react'

import { WithContext as ReactTags } from 'react-tag-input';

const store = { tags: [], suggestions: [] }
const newTags = []

const DietInfo = React.createClass( {
    getInitialState() {
        return {store}
    },
    
    componentDidMount() {
        fetch('/api/tags')
            .then(response => response.json())
            .then((jsonData) => {
                store.suggestions = jsonData
                this.setState(store)
            }
        )
	},
    
    componentWillUnmount() {
        const token = $("meta[name='_csrf']").attr("content");
        fetch('/api/tags', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': token
            },
            body: JSON.stringify(newTags),
            credentials: 'same-origin'
        })
	},

    handleDelete(i) {
        store.tags.splice(i, 1);
        this.setState(store);
    },
 
    handleAddition(tag) {
        store.tags.push({
            id: store.tags.length + 1,
            text: tag
        })
        this.setState(store)
        if (store.suggestions.indexOf(tag) === -1) {
            newTags.push(tag);
        }
    },

    render() {
        return (
            <div id="diet-info">
                <label>Protein Sources:</label>
                <ReactTags tags={store.tags}
                    suggestions={store.suggestions}
                    placeholder={"lamb, pultry, sea food, legums, nuts..."}
                    autofocus={true}
                    handleDelete={this.handleDelete}
                    handleAddition={this.handleAddition}
                    classNames={{selected: 'ReactTags__selected protein-container'}}/>
            </div>
        )
    }
})

export { DietInfo }
