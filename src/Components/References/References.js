'use strict';

import React, { Component } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import ReferenceList from './ReferenceList'
import Data from '../../Stores/reference'
import './References.css'

class Reference extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    render() {
        return (
            <section id="References">
                <a name="references"/>
                <div class="text-container">
                    <div class="row">
                        <div class="columns two header-column">
                            <h2>
                                <FontAwesomeIcon icon={["fas","quote-left"]}/>
                                <span>References</span>
                            </h2>
                        </div>

                        <div class="columns ten">
                            <ReferenceList data={Data} />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Reference;
