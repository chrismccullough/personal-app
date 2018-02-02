import React, { Component } from 'react'
import logo from '../../Images/profilepic.jpg'

class About extends Component {
    render() {
        return (
            <section id="about">

                <div className="row">
                    <div className="three columns">
                        <img className="profile-pic"  src={logo} alt="" />
                    </div>

                    <div className="nine columns main-col">
                        <h2>About Me</h2>

                        <p>
                            I am a passionate, results-driven software engineer with nearly twenty years of experience working as part of engineering teams in large and small companies;
                            primarily focused on front-end development, user experience and technology migrations. I am strong in architectural design,
                            process definition and agile team management, having served as a technical manager and principal developer at multiple companies.
                            I work well independently and as part of a diverse and dynamic technical team to develop engaging web experiences using
                            cutting edge technologies. I am passionate about bringing my skills, creativity, experience, work ethic and thirst for
                            learning to new challenges and opportunities.
                        </p>

                        <div className="row">
                            <div className="columns contact-details">
                                <h2>Contact Details</h2>
                                <p className="address">
                                    <span>Chris McCullough</span><br />
                                    <span>
                                        11315 13th St. SE<br />
                                        Lake Stevens, WA 98258 US
                                    </span><br />
                                    <span><a href="mailto:cmccullough@gmail.com">cmccullough@gmail.com</a></span>
                                </p>
                        </div>

                        <div className="columns download">
                            <p>
                                <a href="http://chrismccullough.s3-website-us-west-2.amazonaws.com/resume.pdf" className="button"><i className="fa fa-download"></i>Download Resume</a>
                            </p>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        );
    }
}

export default About;
