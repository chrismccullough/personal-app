import React, { Component } from 'react'
import PortfolioItems from './PortfolioItems'
import Data from '../../Stores/portfolio'

class Portfolio extends Component {
    render() {
        return (
            <section id="portfolio">
                <div className="row">
                    <div className="twelve columns collapsed">

                        <h1>Art Portfolio</h1>

                        <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                            <PortfolioItems data={Data} />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Portfolio;
