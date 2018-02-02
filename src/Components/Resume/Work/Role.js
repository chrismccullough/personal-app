import React, { Component } from 'react'

class Role extends Component {
    render() {
        const responsibilities = this.props.Responsibilities.map((responsibility) =>
           <li>{responsibility.Responsibility}</li>
        );

        return (
            <div>
                <h5 className="role">{this.props.Title}</h5> &bull; <em className="date">{this.props.StartDate} - {this.props.EndDate}</em>

                <ul className="responsibilities disc">
                    {responsibilities}
                </ul>
            </div>
        )
    }
}

export default Role;
