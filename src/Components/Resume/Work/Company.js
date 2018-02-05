import React, { Component } from 'react'
import Role from './Role'

const notables = [
    'Develped an on-demand gaming site that incorporated user accounts, billing and digital content',
    'Architected and built Speed to Market tool to automate the creation of new private label sites'
];

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

                    <p className="notables">
                        <h4>Notable Accomplishments</h4>
                        <ul>
                            <li>Foo</li>
                        </ul>
                    </p>

                    <p className="roles">
                        {
                            this.props.Roles.map((role, index) =>
                               <Role
                                    key={index}
                                    Title={role.Title}
                                    StartDate={role.StartDate}
                                    EndDate={role.EndDate}
                                    Responsibilities={role.Responsibilities}
                                />
                            )
                        }
                    </p>
                </div>
            </div>
        );
    }
}

export default Company;
