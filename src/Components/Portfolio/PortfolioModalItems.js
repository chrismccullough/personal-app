import React, { Component } from 'react'
import PortfolioModalItem from './PortfolioModalItem'

class PortfolioModalItems extends Component {
    render() {
        let portfolioNodes = this.props.data.map(PortfolioNode => {
             return (
                 <PortfolioModalItem id={ PortfolioNode.id } thumbnail={ PortfolioNode.thumbnail } title={ PortfolioNode.title } tags={ PortfolioNode.tags } />
             )
         })
         return (
             <div>
                 { portfolioNodes }
             </div>
         )
     }
}

export default PortfolioModalItems;
