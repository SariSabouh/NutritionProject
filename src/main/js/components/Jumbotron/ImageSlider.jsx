import React from 'react';
import Carousel from 'nuka-carousel';

export default class ImageSlider extends React.Component {
    render() {
        return (
            <Carousel 
            autoplay={true}
            autoplayInterval={3000}
            slideWidth={0.6}
            width={"80%"}>
                <img className="balls" src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1"/>
                <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2"/>
                <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3"/>
                <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4"/>
                <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5"/>
                <img src="https://www.newton.ac.uk/files/covers/968361.jpg"/>
            </Carousel>
        )
    }
}