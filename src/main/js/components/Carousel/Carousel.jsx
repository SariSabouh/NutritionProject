import React from 'react';

import CarouselItem from './CarouselItem.jsx'

export default class Carousel extends React.Component {
    render() {
        
        const carouselStyle = {
                backgroundImage: 'url(img/slider-bg.jpg)',
        };
        
        return (
            <section id="text-carousel-intro-section" className="parallax" data-stellar-background-ratio="0.5" style={carouselStyle}>
				<div className="container">
					<div className="caption text-center text-white" data-stellar-ratio="0.7">
						<div id="owl-intro-text" className="owl-carousel">
						    <CarouselItem header="Rijeemak Online" subHeader="Your Diet, At Your Comfort" href="#rijeemak-section" hrefText="Learn More!" />
                            <CarouselItem header="IT'S ALL ABOUT YOU" subHeader="Love, Care and a great health program" href="#services-section" hrefText="Learn More!" />
					        <CarouselItem header="Best Prices" subHeader="Cheaper than going to an actual appointment? WHAAAAT?!?" href="#prices-section" hrefText="Learn More!" />
						</div>
					</div>
				</div>
			</section>
        )
    }
}