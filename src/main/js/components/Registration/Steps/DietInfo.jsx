import React, { Component, PropTypes } from 'react'
import { WithContext as ReactTags } from 'react-tag-input';

const store = { checked: false }

const DietInfo = React.createClass( {
    getInitialState() {
        return {store: store, tags: []}
    },

    handleDelete(i) {
        let tags = this.state.tags;
        tags.splice(i, 1);
        this.setState({store: store, tags: tags});
    },
 
    handleAddition(tag) {
        let tags = this.state.tags;
        tags.push({
            id: tags.length + 1,
            text: tag
        });
        this.setState({
            store,
            tags
        })
    },

    render() {
        const { tags } = this.state;
        return (
            <div id="diet-info">
                <ReactTags tags={tags}
                    suggestions={["Test", "test2"]}
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
