import React, { Component } from 'react'

class Testimonial extends Component {

    render() {
        return (
            <li>
                <blockquote>
                    <p>
                        {this.props.Testimonial}
                    </p>
                    <cite>
                        {this.props.Name} <span>&bull;</span> {this.props.Title}
                    </cite>
                </blockquote>
            </li>
        );
    }
}

export default Testimonial;
