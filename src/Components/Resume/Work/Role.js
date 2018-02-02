import React, { Component } from 'react'

class Role extends Component {
    render() {
        return (
            <div className="role">
                <ul className="stats-tabs">
                    <li>
                        <h5 className="role">{this.props.Title}</h5>
                    </li>
                    <li>
                        <em className="date">{this.props.StartDate} - {this.props.EndDate}</em>
                    </li>
                </ul>

                <ul className="responsibilities disc">
                    {
                        this.props.Responsibilities.map((responsibility, index) =>
                           <li key={index}>{responsibility.Responsibility}</li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default Role;
