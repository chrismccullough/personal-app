'use strict';

import React, { Compontent } from 'react';

class WorkItem extends React.Component {
    render() {
        let responsibilityNodes = this.props.Responsibilities.map(responsibility => {
             return (
                 <li>{ responsibility.Responsibility }</li>
             )
         })

        return (
            <div class="row item">
                <div class="columns twelve">
                    <h3 class="company"><a href={this.props.Website} target="_blank">{this.props.Company}</a></h3>
                    <p class="summary">
                        <span class="title">{this.props.Title}</span>
                        <span class="location">{this.props.Location}</span>
                        <em class="date">{this.props.StartDate} - {this.props.EndDate}</em>
                    </p>
                    <ul class="responsibilities">
                        {responsibilityNodes}
                    </ul>
                </div>
            </div>
        );
    }
}

export default WorkItem;
