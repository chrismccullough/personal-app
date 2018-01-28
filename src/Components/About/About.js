'use strict';

import React, { Component } from 'react'
import './About.css'
import logo from '../../Images/logo.png'

class About extends React.Component {
    render() {
        return (
            <section id="About">
                <a name="about"/>
                <div class="row">
                    <div class="columns two">
                        <img src={logo} className="Profile-pic" alt="logo" />
                    </div>

                    <div class="columns ten">
                        <h2>About Me</h2>

                        <p>
                            I am a passionate, results-driven software engineer with nearly twenty years epxerience working as part of engineering teams; primarly focused on front-end development and user experience.  I am strong in architectural design, process definition and agile team management, having served as a technical manager and principal developer at multiple companies.
                        </p>

                        <p>
                            I have excellent written and verbal communication skills.  I am interested in working as part of a diverse and dynamic technical team developing engaging web experiences using cutting edge technologies; and am passionate about bringing my skills, creativity, experience, work ethic and thirst for learning to new challenges and opportunities.
                        </p>

                        <div class="columns contact-details">
                            <h2>Contact Details</h2>

                            <p>
                                <span>
                                Chris McCullough
                                <br/>
                                Greater Seattle Area, Washington,
                                <br/>
                                USA
                                <br/>
                                <a href="mailto:cmccullough@gmail.com?subject=Website+Inquiry">cmccullough@gmail.com</a>
                                </span>
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        );
    }
}

export default About;
