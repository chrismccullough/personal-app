import React, { Component } from 'react'
import Testimonial from './Testimonial'
import Carousel from 'nuka-carousel'

class TestimonialsList extends Component {
    render() {
         const carouselConfig = {
            autoplay: true,
            decorators: [],
            easing: 'easeInOutQuad',
            framePadding: '0px',
            swiping: true,
            wrapAround: true
         }

         return (
             <Carousel
                autoplay={carouselConfig.autoplay}
                decorators={carouselConfig.decorators}
                easing={carouselConfig.easing}
                framePadding={carouselConfig.framePadding}
                swiping={carouselConfig.swiping}
                wrapAround={carouselConfig.wrapAround}>
                {
                    this.props.data.map((testimonial, index) => {
                         return (
                             <Testimonial key={index} Testimonial={ testimonial.Testimonial } Name={ testimonial.Name } Title={ testimonial.Title } />
                         )
                     })
                }
             </Carousel>
         )
     }
}

export default TestimonialsList;
