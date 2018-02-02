import React, { Component } from 'react'
import Role from './Role'

class Company extends Component {
    render() {
        return (
            <div className="row item">
                <div className="twelve columns company">
                    <ul className="stats-tabs">
                        <li>
                            <h3><a href={this.props.Website} target="_blank">{this.props.Company}</a></h3>
                        </li>
                        <li>
                            <span>{this.props.Location}</span>
                        </li>
                    </ul>
                    <p className="roles">
                        {
                            this.props.Roles.map((role, index) =>
                               <Role key={index} Title={role.Title} StartDate={role.StartDate} EndDate={role.EndDate} Responsibilities={role.Responsibilities} />
                            )
                        }
                    </p>
                </div>
            </div>
        );
    }
}

export default Company;
