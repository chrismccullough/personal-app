import React, { Component } from 'react'

class VolunteerItem extends Component {
    render() {
        const volunteerNodes = this.props.Responsibilities.map(responsibility => {
             return (
                 <p>{ responsibility.Responsibility }</p>
             )
         })

        return (
            <div class="row item">
                <div class="twelve columns">
                    <h3><a href={this.props.Website} target="_blank" rel="noopener noreferrer">{this.props.Organization} {this.props.Group}</a></h3>
                    <span> &bull; {this.props.Location}<br/></span>
                        <p class="info">
                            <h5>{this.props.Title}</h5> <span>&bull;</span> <em class="date">{this.props.StartDate} - {this.props.EndDate}</em>
                            {volunteerNodes}
                        </p>
                </div>
            </div>
        );
    }
}

export default VolunteerItem;
