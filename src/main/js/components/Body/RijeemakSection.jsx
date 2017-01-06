import React from 'react';
import SectionHeader from './SectionHeader.jsx';

export default class RijeemakSection extends React.Component {
    render() {
        return (
            <section id="rijeemak-section" className="page bg-style1">
                <SectionHeader header="Rijeemak Online" subtitle="This is the generation of services and convenience. So why set an appointment to go to have a conversation, when you can do it at your own convenience?" />
                <div className="rotate-box-1-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-sm-6">
                                <a className="rotate-box-1 square-icon wow zoomIn" data-wow-delay="0">
                                    <span className="rotate-box-icon"><i className="fa fa-users"></i></span>
                                    <div className="rotate-box-info">
                                        <h4>Who We Are?</h4>
                                        <p>Our small team wants to help our community to be better as a whole. A small start in respecting each other and helping each other move forward, will definetely make a difference. More confidence in one's health and lifestyle, brings more confidence and ambition in one's state of mind and thoughts. We as a team see that we can achieve that.</p>
                                    </div>
                                </a>
                            </div>
                            
                            <div className="col-md-6 col-sm-6">
                                <a className="rotate-box-1 square-icon wow zoomIn" data-wow-delay="0.4s">
                                    <span className="rotate-box-icon"><i className="fa fa-heart"></i></span>
                                    <div className="rotate-box-info">
                                        <h4>Why We Do It?</h4>
                                        <p>We want people to get into better shape. Our own team member, and the creator of this idea, Raghad Sukhtian, said "It makes me sad when I see someone who is being hurt because of his wight. I just want to help them." Now with the Raghad's great soul, we <strong>WILL</strong> help them.</p>
                                    </div>
                                </a>
                            </div>

                            <div className="col-md-12">
                                <a className="rotate-box-1 square-icon wow zoomIn" data-wow-delay="0.2s">
                                    <span className="rotate-box-icon"><i className="fa fa-diamond"></i></span>
                                    <div className="rotate-box-info">
                                        <h4>What We Do?</h4>
                                        <p><strong>Rijeemak</strong> gives you the possibility of texting, calling, or whatever communication method you choose with your specialist, to get help with your diet and plan to <strong>lose weight</strong>, or reach the form you are wanting. You will be able to get in touch with our specialists at anytime, well till they sleep. You do not feel like eating chicken? You really want to eat chocolate?? <strong>WHO DOESN'T!</strong> Our experts will make sure you get what you want but with the right doses. Calories is a scary word, so instead of thinking how many calories did I just eat, let us think how much weight have I lost already!</p>
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