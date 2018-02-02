import React, { Component } from 'react'
import PortfolioItems from './PortfolioItems'
import PortfolioModalItems from './PortfolioModalItems'
import Data from '../../Stores/portfolio'

class Portfolio extends Component {
    render() {
        return (
            <section id="portfolio">
                <div className="row">
                    <div className="twelve columns collapsed">

                        <h1>Portfolio</h1>

                        <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                            <PortfolioItems data={Data} />
                        </div>
                    </div>

                    <PortfolioModalItems data={Data} />

                </div>
            </section>
        );
    }
}

export default Portfolio;
