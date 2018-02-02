import React, { Component } from 'react'
import Schools from './Schools'
import Data from '../../../Stores/education'

class Education extends Component {
    render() {
        return (
            <div className="row education">

                <div class="three columns header-col">
                   <h2><span>Education</span></h2>
                </div>

                <div class="nine columns main-col">
                    <Schools data={Data} />
                </div>

            </div>
        )
    }
}

export default Education;
