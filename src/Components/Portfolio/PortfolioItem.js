import React, { Component } from 'react'
import Lightbox from "react-image-lightbox"

class PortfolioItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    render() {
        const { isOpen } = this.state;
        return (
            <div class="columns portfolio-item">
                <div class="item-wrap">

                    <a href="javascript:void(0)" title={this.props.title} onClick={() => this.setState({ isOpen: true })}>
                        <img alt="" src={require("../../Images/portfolio/thumbnails/" + this.props.thumbnail)} />
                        <div class="overlay">
                            <div class="portfolio-item-meta">
                                <h5>{this.props.title}</h5>
                                <p className="tags">
                                    <i class="fa fa-tag"></i>&nbsp;
                                    {
                                        this.props.tags.map((tag, index) => {
                                                return (
                                                    <span key={index} className="tag">{ tag.tag }&nbsp;</span>
                                                )
                                         })
                                    }
                                </p>
                            </div>
                        </div>
                        <div class="link-icon"><i class="icon-plus"></i></div>
                    </a>


                    {isOpen && (
                        <Lightbox
                            discourageDownloads={true}
                            mainSrc={require("../../Images/portfolio/fullsize/" + this.props.thumbnail)}
                            imageTitle={[this.props.title]}
                            imageCaption={[this.props.description]}
                            onCloseRequest={() => this.setState({ isOpen: false })}
                        />
                    )}

                </div>
            </div>
        );
    }
}

export default PortfolioItem;
