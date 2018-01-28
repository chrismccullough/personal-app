'use strict';

import React, { Compontent } from 'react'

class EducationItem extends React.Component {
    render() {
        let studyNodes = this.props.Studies.map(study => {
             return (
                 <li>{ study.Study }</li>
             )
         })

        return (
            <div class="row item">
                <div class="columns twelve">
                    <h3 class="school"><a href={this.props.Website} target="_blank">{this.props.School}</a></h3>
                    <p class="summary">
                        <span class="location">{this.props.Location}</span>
                        <em class="date">{this.props.StartDate} - {this.props.EndDate}</em>
                    </p>
                    <ul class="studies">
                        {studyNodes}
                    </ul>
                </div>
            </div>
        );
    }
}

export default EducationItem;
