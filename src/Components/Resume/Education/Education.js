import React, { Component } from 'react'
import Schools from './Schools'
import Data from '../../../Stores/education'

class Education extends Component {
    render() {
        return (
            <div className="row education">

                <div className="three columns header-col">
                   <h2><span>Education</span></h2>
                </div>

                <div className="nine columns main-col">
                    <Schools data={Data} />
                </div>

            </div>
        )
    }
}

export default Education;
