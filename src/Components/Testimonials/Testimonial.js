import React from 'react'

const testimonial = (props) => (
    <blockquote>
        <p>
            {props.Testimonial}
        </p>
        <cite>
            {props.Name} <span>&bull;</span> {props.Title}
        </cite>
    </blockquote>
);

export default testimonial;
