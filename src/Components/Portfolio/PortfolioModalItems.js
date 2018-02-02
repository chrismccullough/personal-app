import React, { Component } from 'react'
import PortfolioModalItem from './PortfolioModalItem'

class PortfolioModalItems extends Component {
    render() {
         return (
             <div>
                 {
                     this.props.data.map((PortfolioNode, index) => {
                          return (
                              <PortfolioModalItem key={ index } thumbnail={ PortfolioNode.thumbnail } title={ PortfolioNode.title } tags={ PortfolioNode.tags } />
                          )
                      })
                 }
             </div>
         )
     }
}

export default PortfolioModalItems;
