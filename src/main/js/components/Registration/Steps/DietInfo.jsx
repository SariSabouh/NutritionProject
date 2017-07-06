import React, { Component, PropTypes } from 'react'
import { WithContext as ReactTags } from 'react-tag-input';

import SubNavigation from './Utils/SubNavigation.jsx'

const store = { 
    tags: {
        proteinSources: [],
        grains: [],
        vegetables: [],
        fruits: [],
        dairy: [],
        highFatFoods: [],
        sugaryDrinks: []
    },
    suggestions: [] 
}

const newTags = []
const DietInfo = React.createClass( {
    getInitialState() {
        return {showContent: 'protein-sources'}
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
        const storeTag = this.getStoreTag()
        storeTag.splice(i, 1);
        this.setState(store);
    },
 
    handleAddition(tag) {
        const storeTag = this.getStoreTag()
        storeTag.push({
            id: storeTag.length + 1,
            text: tag
        })
        this.setState(store)
        if (store.suggestions.indexOf(tag) === -1) {
            newTags.push(tag);
        }
    },

    getStoreTag() {
        switch($('.diet-info-nav.active').attr('id')) {
            case 'protein-sources':
                return store.tags.proteinSources
            case 'grains':
                return store.tags.grains
            case 'vegetables':
                return store.tags.vegetables
            case 'fruits':
                return store.tags.fruits
            case 'dairy':
                return store.tags.dairy
            case 'high-fat-food':
                return store.tags.high-fat-food
            case 'sugary-drinks':
                return store.tags.sugary-drinks
            default:
                return store.tags
        }
    },

    viewSection(buttonId) {
        this.setState({showContent: buttonId})
    },

    render() {
        return (
            <div id="diet-info">
                <SubNavigation viewSection={this.viewSection} buttonId='protein-sources' buttonName="Protein Sources" />
                <SubNavigation viewSection={this.viewSection} buttonId='grains' buttonName="Grains" />
                <SubNavigation viewSection={this.viewSection} buttonId='vegetables' buttonName="Vegetables" />
                <SubNavigation viewSection={this.viewSection} buttonId='fruits' buttonName="Fruits" />
                <SubNavigation viewSection={this.viewSection} buttonId='dairy' buttonName="Dairy" />
                <SubNavigation viewSection={this.viewSection} buttonId='high-fat-food' buttonName="High Fat Food" />
                <SubNavigation viewSection={this.viewSection} buttonId='sugary-drinks' buttonName="Sugary Drink" />

                <div hidden={this.state.showContent != 'protein-sources'}>
                    <ReactTags tags={store.tags.proteinSources}
                        suggestions={store.suggestions}
                        placeholder={"lamb, pultry, sea food, legums, nuts..."}
                        autofocus={true}
                        handleDelete={this.handleDelete}
                        handleAddition={this.handleAddition}
                        classNames={{selected: 'ReactTags__selected'}}/>
                </div>
                
                <div hidden={this.state.showContent != 'grains'}>
                    <ReactTags tags={store.tags.grains}
                        suggestions={store.suggestions}
                        placeholder={"wheat, rice, corn, bulgur, barely..."}
                        autofocus={true}
                        handleDelete={this.handleDelete}
                        handleAddition={this.handleAddition}
                        classNames={{selected: 'ReactTags__selected'}}/>
                </div>

                <div hidden={this.state.showContent != 'vegetables'}>
                    <ReactTags tags={store.tags.vegetables}
                        suggestions={store.suggestions}
                        placeholder={"fresh, frozen, canned, dry, juice"}
                        autofocus={true}
                        handleDelete={this.handleDelete}
                        handleAddition={this.handleAddition}
                        classNames={{selected: 'ReactTags__selected'}}/>
                </div>

                <div hidden={this.state.showContent != 'fruits'}>
                    <ReactTags tags={store.tags.fruits}
                        suggestions={store.suggestions}
                        placeholder={"fresh, frozen, canned, dry, juice"}
                        autofocus={true}
                        handleDelete={this.handleDelete}
                        handleAddition={this.handleAddition}
                        classNames={{selected: 'ReactTags__selected'}}/>
                </div>

                <div hidden={this.state.showContent != 'dairy'}>
                    <ReactTags tags={store.tags.dairy}
                        suggestions={store.suggestions}
                        placeholder={"yogurt, cheese, milk, creams..."}
                        autofocus={true}
                        handleDelete={this.handleDelete}
                        handleAddition={this.handleAddition}
                        classNames={{selected: 'ReactTags__selected'}}/>
                </div>

                <div hidden={this.state.showContent != 'high-fat-food'}>
                    <ReactTags tags={store.tags.highFatFoods}
                        suggestions={store.suggestions}
                        placeholder={"nuts, fried foods, oils, butter, olives..."}
                        autofocus={true}
                        handleDelete={this.handleDelete}
                        handleAddition={this.handleAddition}
                        classNames={{selected: 'ReactTags__selected'}}/>
                </div>

                <div hidden={this.state.showContent != 'sugary-drinks'}>
                    <ReactTags tags={store.tags.sugaryDrinks}
                        suggestions={store.suggestions}
                        placeholder={"anything with sugar, juice, soda..."}
                        autofocus={true}
                        handleDelete={this.handleDelete}
                        handleAddition={this.handleAddition}
                        classNames={{selected: 'ReactTags__selected'}}/>
                </div>
            </div>
        )
    }
})

export { DietInfo }
