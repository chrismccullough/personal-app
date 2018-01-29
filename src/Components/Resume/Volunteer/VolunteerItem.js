'use strict';

import React, { Compontent } from 'react'

class VolunteerItem extends React.Component {
    render() {
        let volunteerNodes = this.props.Responsibilities.map(responsibility => {
             return (
                 <li>{ responsibility.Responsibility }</li>
             )
         })

        return (
            <div class="row item">
                <div class="columns twelve">
                    <h3 class="organization"><a href={this.props.Website} target="_blank">{this.props.Group} - {this.props.Organization}</a></h3>
                    <p class="summary">
                        <span class="location">{this.props.Location}</span>
                        <em class="date">{this.props.StartDate} - {this.props.EndDate}</em>
                        <div class="title">{this.props.Title}</div>
                    </p>
                    <ul class="responsibilities">
                        {volunteerNodes}
                    </ul>
                </div>
            </div>
        );
    }
}

export default VolunteerItem;
