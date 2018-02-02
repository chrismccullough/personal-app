import React, { Component } from 'react'
import TestimonialItem from './TestimonialItem'
import Carousel from 'nuka-carousel'

class TestimonialsList extends Component {
    render() {
        let referenceNodes = this.props.data.map(referenceNode => {
             return (
                 <TestimonialItem key={ referenceNode.id } Reference={ referenceNode.Reference } Name={ referenceNode.Name } Title={ referenceNode.Title } />
             )
         })

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
                { referenceNodes }
             </Carousel>
         )
     }
}

export default TestimonialsList;
