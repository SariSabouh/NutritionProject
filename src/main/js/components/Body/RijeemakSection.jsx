import React from 'react';
import SectionHeader from './SectionHeader.jsx';

export default class RijeemakSection extends React.Component {
    render() {
        return (
            <section id="rijeemak-section" className="page bg-style1">
                <SectionHeader header="Rijeemak Online" subtitle="This is the generation of convenient services. So why set an appointment to go to have a conversation, when you can get excellent services at your own convenience?" />
                <div className="rotate-box-1-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-sm-6">
                                <a className="rotate-box-1 square-icon wow zoomIn" data-wow-delay="0">
                                    <span className="rotate-box-icon"><i className="fa fa-users"></i></span>
                                    <div className="rotate-box-info">
                                        <h4>Who We Are?</h4>
                                        <p>Our humble team understands the struggle of compromised health and wellbeing. We wants to help you heal and become be better as a whole. We believe in small steps to achieve the greater goal of wellbeing and we will provide you with the support and guidance every step of the way.. More confidence in one's health and lifestyle brings more confidence and ambition in one's state of mind and thoughts.</p>
                                    </div>
                                </a>
                            </div>
                            
                            <div className="col-md-6 col-sm-6">
                                <a className="rotate-box-1 square-icon wow zoomIn" data-wow-delay="0.4s">
                                    <span className="rotate-box-icon"><i className="fa fa-heart"></i></span>
                                    <div className="rotate-box-info">
                                        <h4>Why We Do It?</h4>
                                        <p>We want you to get into better health. Raghad Sukhtian, our team member, and the creator of this idea said "It makes me sad when I see someone who is being hurt because of their weight. I just want to help them.” Now with the Raghad's great soul powering our mission, we will help you overcome all the excuses you  are using to avoid change, help you find your will power to proudly take charge of your own wellness and achieve your goal!</p>
                                    </div>
                                </a>
                            </div>

                            <div className="col-md-12">
                                <a className="rotate-box-1 square-icon wow zoomIn" data-wow-delay="0.2s">
                                    <span className="rotate-box-icon"><i className="fa fa-diamond"></i></span>
                                    <div className="rotate-box-info">
                                        <h4>What We Do?</h4>
                                        <p><strong>Rijeemak</strong> gives you the possibility to reach out to your support team anytime you choose via texting, calling, or any other communication method you choose with your specialist.  We will provide you with nutrition consult to address your health concern, design meal plans specific for your lifestyle and food preference, workout plans, recipes and recipe audit with full support at your own convenience.</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}