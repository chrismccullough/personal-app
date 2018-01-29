'use strict';

import React, { Component } from 'react'
import WorkList from './WorkList'
import Data from '../../../Stores/work'
import './Work.css'

class Work extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    render() {
        return (
            <section id="Work">
                <a name="work"/>
                <div class="row work">
                    <div class="columns two header-column">
                        <h2><span>Work</span></h2>
                    </div>

                    <div class="columns ten main-column">
                        <WorkList data={Data} />
                    </div>

                </div>
            </section>
        )
    }
}

export default Work;
