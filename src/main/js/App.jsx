import React from 'react';
import NavigationBar from './components/NavigationBar/NavigationBar.jsx';
import Carousel from './components/Carousel/Carousel.jsx';
import RijeemakSection from './components/Body/RijeemakSection.jsx';
import CounterSection from './components/Body/CounterSection.jsx';
import ServicesSection from './components/Body/ServicesSection.jsx';
import TestimonialsSection from './components/Body/TestimonialsSection.jsx';
import PricesSection from './components/Body/PricesSection.jsx';
import TeamSection from './components/Body/TeamSection.jsx';
import PartnersSection from './components/Body/PartnersSection.jsx';
import SocialSection from './components/Body/SocialSection.jsx';
import ContactSection from './components/Body/ContactSection.jsx';

export default class App extends React.Component {
    render() {
        return (
            <div id="app">
                <NavigationBar />
                <Carousel />
                <RijeemakSection />
                <div className="extra-space-l"></div>
                <CounterSection />
                <ServicesSection />
                <TestimonialsSection />
                <PricesSection />
                <TeamSection />
                <PartnersSection />
                <SocialSection />
                <ContactSection />
                <a className="scrolltotop"><i className="fa fa-arrow-up"></i></a>
            </div>
        )
    }
}