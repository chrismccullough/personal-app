import React, { Component } from 'react'

class School extends Component {
    render() {
        return (
            <div className="row item">
                <div className="twelve columns school">
                    <h3><a href={this.props.Website} target="_blank" rel="noopener noreferrer">{this.props.School}</a></h3>
                    <span> &bull; {this.props.Location}<br/></span>
                    <p className="info">
                        <h5>{this.props.Degree}</h5> &bull; <em className="date">{this.props.StartDate} - {this.props.EndDate}</em>
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
