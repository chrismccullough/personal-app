import React, { Component } from 'react'
import PortfolioItem from './PortfolioItem'

class PortfolioItems extends Component {
    render() {
         return (
             <div className="PortfolioItems">
                 {
                     this.props.data.map((portfolioItem, index) => {
                          return (
                              <PortfolioItem key={index} thumbnail={ portfolioItem.thumbnail } title={ portfolioItem.title } description={ portfolioItem.description } tags={ portfolioItem.tags } />
                          )
                      })
                 }
             </div>
         )
     }
}

export default PortfolioItems;
