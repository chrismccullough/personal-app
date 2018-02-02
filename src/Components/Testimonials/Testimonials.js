import React, { Component } from 'react'
import TestimonialsList from './TestimonialsList'
import Data from '../../Stores/testimonials'

class Testimonials extends Component {
    render() {
        return (
            <section id="testimonials">
                <div className="text-container">
                    <div className="row">

                        <div className="two columns header-col">
                            <h1><span>Testimonials</span></h1>
                        </div>

                        <div className="ten columns flex-container">
                            <div className="flexslider">
                                <ul className="slides">
                                    <TestimonialsList data={Data} />
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}

export default Testimonials;
