import React from 'react';
import CompanyInfo from './CompanyInfo.jsx';
import ImageSlider from './ImageSlider.jsx';

export default class Jumbotron extends React.Component {
    render() {
        return (
            <div className="jumbotron text-center">
                <CompanyInfo />
                <ImageSlider />
            </div>
        )
    }
}