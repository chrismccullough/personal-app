'use strict';

import React, { Component } from 'react'
import EducationList from './EducationList'
import Data from '../../../Stores/education'
import './Education.css'

class Education extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    render() {
        return (
            <section id="Education">
                <a name="education"/>
                <div class="row education">
                    <div class="columns two header-column">
                        <h2><span>Education</span></h2>
                    </div>

                    <div class="columns ten main-column">
                        <EducationList data={Data} />
                    </div>

                </div>
            </section>
        )
    }
}

export default Education;
