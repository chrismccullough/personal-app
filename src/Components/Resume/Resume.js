'use strict';

import React, { Component } from 'react'

import Work from './Work/Work'
import Skills from './Skills/Skills'
import Volunteer from './Volunteer/Volunteer'
import Education from './Education/Education'

class Resume extends React.Component {
    render() {
        return (
            <section id="Resume">
                <Work />
                <Skills />
                <Volunteer />
                <Education />
            </section>
        );
    }
}

export default Resume;
