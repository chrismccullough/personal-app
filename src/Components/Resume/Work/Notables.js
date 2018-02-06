import React, { Component } from 'react'

class Notables extends Component {
    constructor () {
        super()
        this.state = {
            isNotablesHidden: true
        }
    }

    toggleNotablesHidden () {
        this.setState({
            isNotablesHidden: !this.state.isNotablesHidden
        })
    }

    render() {
        const notables = this.props.Notables;
        return (
            <div>
                {this.state.isNotablesHidden && (
                    <a onClick={this.toggleNotablesHidden.bind(this)}>Show notable accomplishments</a>
                )}

                {!this.state.isNotablesHidden && (
                    <div>
                        <a onClick={this.toggleNotablesHidden.bind(this)}>Hide notable accomplishments</a>
                        <p className="notables">
                            <h6>Notable Accomplishments</h6>
                            {
                                this.props.Notables.map((notable, index) =>
                                    <p key={index} className="notable">
                                        <em>{notable.Title}</em><br/>
                                        {notable.Description}
                                    </p>
                                )
                            }
                        </p>
                    </div>
                )}
            </div>
        )
    }
}

export default Notables;
