import React, { Component } from 'react'

class PortfolioItem extends Component {
    render() {
        let tagNodes = this.props.tags.map((tag, index) => {
            if (tag.id <index) {
                return (
                    <span>{ tag.tag }, </span>
                )
            } else {
                return (
                    <span>{ tag.tag }</span>
                )
            }
         })

        return (
            <div class="columns portfolio-item">
                <div class="item-wrap">
                    <a href={"#modal-" + this.props.id} title="">
                        <img alt="" src={require("../../Images/portfolio/" + this.props.thumbnail)} />
                        <div class="overlay">
                            <div class="portfolio-item-meta">
                                <h5>{this.props.title}</h5>
                                <p>{tagNodes}</p>
                            </div>
                        </div>
                        <div class="link-icon"><i class="icon-plus"></i></div>
                    </a>
                </div>
            </div>
        );
    }
}

export default PortfolioItem;
