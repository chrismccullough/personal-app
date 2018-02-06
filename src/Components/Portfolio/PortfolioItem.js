import React, { Component } from 'react'
import Lightbox from "react-image-lightbox"

class Tag extends Component {
    render() {
        let numTags = this.props.numTags;
        let index = this.props.index;
        let tag = this.props.tag;

        if ( index < numTags -1 ) {
            return <span key={ index } className="tag">{ tag }, </span>
        } else {
            return <span key={ index } className="tag">{ tag }</span>
        }
    }
}

class PortfolioItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    render() {
        const { isOpen } = this.state;
        const numTags = this.props.tags.length;
        return (
            <div class="columns portfolio-item">
                <div class="item-wrap">

                    <a href="javascript:void(0)" title={this.props.title} onClick={() => this.setState({ isOpen: true })}>
                        <img alt="" src={require("../../Images/portfolio/thumbnails/" + this.props.thumbnail)} />
                        <div class="overlay">
                            <div class="portfolio-item-meta">
                                <h5>{this.props.title}</h5>
                                <p className="tags">
                                    <i class="fa fa-tag tag-icon"></i>
                                    {
                                        this.props.tags.map((tag, index) => {
                                                return (
                                                    <Tag index={index} numTags={numTags} tag={tag.tag} />

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
