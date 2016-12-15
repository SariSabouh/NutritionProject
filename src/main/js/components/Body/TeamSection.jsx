import React from 'react';

import SectionHeader from './SectionHeader.jsx';

export default class TeamSection extends React.Component {
    render() {
        return (
            <section id="team-section" className="page">
                <SectionHeader header="Our Team" subtitle="Meat our experts" />
                <div className="container">
                    <div className="team-members">
                        <div className="row">
                          <div className="col-sm-2 col-sm-offset-1">
                            <div className="team-member wow flipInY" data-wow-duration="1000ms" data-wow-delay="300ms">
                              <div className="member-image">
                                <img className="img-responsive" src="img/team/SariSabouh.jpg" alt="" />
                              </div>
                              <div className="member-info">
                                <h3>Sari Sabouh</h3>
                                <h4>Software Engineer &amp; Co-Founder</h4>
                                <p>A software engineer that co-started <a href="http://www.paliup.wordpress.com" target="_blank">PaliUp</a> to help the people. When Raghad suggested this idea to him, Sari was on board before she even finished.</p>
                              </div>
                              <div className="social-icons">
                                <ul>
                                  <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                                  <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                                  <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-2">
                            <div className="team-member wow flipInY" data-wow-duration="1000ms" data-wow-delay="500ms">
                              <div className="member-image">
                                <img className="img-responsive" src="img/team/SariSabouh.jpg" alt="" />
                              </div>
                              <div className="member-info">
                                <h3>Tima Pina</h3>
                                <h4>Nutritionist</h4>
                                <p>Need description!!!!!!!!!!!!!</p>
                              </div>
                              <div className="social-icons">
                                <ul>
                                  <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                                  <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                                  <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-2">
                            <div className="team-member wow flipInY" data-wow-duration="1000ms" data-wow-delay="800ms">
                              <div className="member-image">
                                <img className="img-responsive" src="img/team/SariSabouh.jpg" alt="" />
                              </div>
                              <div className="member-info">
                                <h3>Raghad Sukhtian</h3>
                                <h4>Founder</h4>
                                <p>Public relations student at Al-Najah University in Nablus. An honest spirit that came up with this very great idea that is focused for the people and only the people.</p>
                              </div>
                              <div className="social-icons">
                                <ul>
                                  <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                                  <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                                  <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-2">
                            <div className="team-member wow flipInY" data-wow-duration="1000ms" data-wow-delay="1100ms">
                              <div className="member-image">
                                <img className="img-responsive" src="img/team/SariSabouh.jpg" alt="" />
                              </div>
                              <div className="member-info">
                                <h3>Abeer Sharaf</h3>
                                <h4>Co-Founder</h4>
                                <p>Foudner and CEO of the successful company <a href="http://www.waysinternational.com" target="_blank">Ways International</a>. Practiced trainer and great leader of the team.</p>
                              </div>
                              <div className="social-icons">
                                <ul>
                                  <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                                  <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                                  <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-2">
                            <div className="team-member wow flipInY" data-wow-duration="1000ms" data-wow-delay="1100ms">
                              <div className="member-image">
                                <img className="img-responsive" src="img/team/SariSabouh.jpg" alt="" />
                              </div>
                              <div className="member-info">
                                <h3>Maysara Odeh</h3>
                                <h4>Software Engineer</h4>
                                <p>Need description!!!!!!!!</p>
                              </div>
                              <div className="social-icons">
                                <ul>
                                  <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                                  <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                                  <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> 
                </div>
            </section>
       )
    }
}