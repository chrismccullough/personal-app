import React, { Component } from 'react'

class School extends Component {
    render() {
        return (
            <div className="row item school">
                <div className="twelve columns">
                    <ul className="stats-tabs">
                        <li>
                            <h3><a href={this.props.Website} target="_blank" rel="noopener noreferrer">{this.props.School}</a></h3>
                        </li>
                        <li>
                            <span>{this.props.Location}</span>
                        </li>
                    </ul>


                    <p className="info">
                        <ul className="stats-tabs">
                            <li>
                                <h5>{this.props.Degree}</h5>
                            </li>
                            <li>
                                <em className="date">{this.props.StartDate} - {this.props.EndDate}</em>
                            </li>
                        </ul>

                        <div className="studies">
                            {this.props.Studies}
                        </div>
                    </p>
                </div>
            </div>
        );
    }
}

export default School;
