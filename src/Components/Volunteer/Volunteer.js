'use strict';

import React, { Component } from 'react';
import VolunteerList from './VolunteerList';
import Data from '../../Stores/volunteer';
import './Volunteer.css';

class Volunteer extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    render() {
        return (
            <section id="Volunteer">
                <a name="volunteer"/>
                <div class="row volunteer">
                    <div class="columns two header-column">
                        <h2><span>Volunteer</span></h2>
                    </div>

                    <div class="columns ten main-column">
                        <VolunteerList data={Data} />
                    </div>

                </div>
            </section>
        )
    }
}

export default Volunteer;
