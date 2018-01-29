'use strict';

import React, { Component } from 'react'
import SkillsList from './SkillsList'
import Data from '../../../Stores/skills'
import './Skills.css'

class Skills extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    render() {
        return (
            <section id="Skills">
                <a name="skills"/>
                <div class="row">
                    <div class="columns two header-column">
                        <h2><span>Skills</span></h2>
                    </div>

                    <div class="columns ten main-column">
                        <SkillsList data={Data} />
                    </div>

                </div>
            </section>
        );
    }
}

export default Skills;
