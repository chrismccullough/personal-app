import React, { Component } from 'react'
import Role from './Role'

class Company extends Component {
    render() {
         const roles = this.props.Roles.map((role) =>
            <Role Title={role.Title} StartDate={role.StartDate} EndDate={role.EndDate} Responsibilities={role.Responsibilities} />
         );

        return (
            <div className="row item">
                <div className="twelve columns company">
                    <h3><a href={this.props.Website} target="_blank">{this.props.Company}</a></h3>
                    <span> &bull; {this.props.Location}</span>
                    <p className="roles">
                        {roles}
                    </p>
                </div>
            </div>
        );
    }
}

export default Company;
