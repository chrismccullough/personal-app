import React, { Component } from 'react'
import PortfolioItems from './PortfolioItems'
import PortfolioModalItems from './PortfolioModalItems'
import Data from '../../Stores/portfolio'

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    render() {
        return (
            <section id="portfolio">
                <div class="row">
                    <div class="twelve columns collapsed">

                        <h1>Portfolio</h1>

                        <div id="portfolio-wrapper" class="bgrid-quarters s-bgrid-thirds cf">
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
