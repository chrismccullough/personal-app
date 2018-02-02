import React, { Component } from 'react'

class TestimonialItem extends Component {

    render() {
        return (
            <li>
                <blockquote>
                    <p>
                        {this.props.Reference}
                    </p>
                    <cite>
                        {this.props.Name} <span>&bull;</span> {this.props.Title}
                    </cite>
                </blockquote>
            </li>
        );
    }
}

export default TestimonialItem;
