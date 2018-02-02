import React, { Component } from 'react'

class VolunteerItem extends Component {
    render() {
        return (
            <div class="row item volunteer">
                <div class="twelve columns">
                    <ul className="stats-tabs">
                        <li>
                            <h3><a href={this.props.Website} target="_blank" rel="noopener noreferrer">{this.props.Organization} {this.props.Group}</a></h3>
                        </li>
                        <li>
                            <span>{this.props.Location}</span>
                        </li>
                    </ul>


                        <p class="info">
                            <ul className="stats-tabs">
                                <li>
                                    <h5>{this.props.Title}</h5>
                                </li>
                                <li>
                                    <em class="date">{this.props.StartDate} - {this.props.EndDate}</em>
                                </li>
                            </ul>
                            {
                                this.props.Responsibilities.map((responsibility, index) => {
                                     return (
                                         <p key={index}>{ responsibility.Responsibility }</p>
                                     )
                                })
                            }
                        </p>
                </div>
            </div>
        );
    }
}

export default VolunteerItem;
