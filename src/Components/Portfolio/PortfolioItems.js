import React, { Component } from 'react'
import PortfolioItem from './PortfolioItem'

class PortfolioItems extends Component {
    render() {
        let portfolioNodes = this.props.data.map(PortfolioNode => {
             return (
                 <PortfolioItem id={ PortfolioNode.id } thumbnail={ PortfolioNode.thumbnail } title={ PortfolioNode.title } tags={ PortfolioNode.tags } />
             )
         })
         return (
             <div>
                 { portfolioNodes }
             </div>
         )
     }
}

export default PortfolioItems;
