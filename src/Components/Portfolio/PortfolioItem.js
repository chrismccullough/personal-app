import React, { Component } from 'react';
import Lightbox from "react-image-lightbox";

class Tag extends Component {
    render() {
        let numTags = this.props.numTags;
        let index = this.props.index;
        let tag = this.props.tag;

        return (
            <span key={ index } className="tag">
                { index === 0 ? <i className="fa fa-tag tag-icon" /> : '' }
                { tag }{ index < numTags -1 ? ', ' : '' }
            </span>
        );
    }
}

class PortfolioItem extends Component {
    state = { isPortfolioModalOpen: false };

    togglePortfolioModalHandler = () => {
        const isPortfolioModalOpen = this.state.isPortfolioModalOpen;
        this.setState({ isPortfolioModalOpen: !isPortfolioModalOpen });
    };

    render() {
        const { isPortfolioModalOpen } = this.state;
        const numTags = this.props.tags.length;
        return (
            <div className="columns portfolio-item">
                <div className="item-wrap">

                    <a href="javascript:void(0)" title={this.props.title} onClick={this.togglePortfolioModalHandler}>
                        <img alt="" src={require("../../Images/portfolio/thumbnails/" + this.props.thumbnail)} />
                        <div className="overlay">
                            <div className="portfolio-item-meta">
                                <h5>{this.props.title}</h5>
                                <p className="tags">
                                    {
                                        this.props.tags.map((tag, index) => {
                                                return (
                                                    <Tag key={index} index={index} numTags={numTags} tag={tag.tag} />

                                                )
                                         })
                                    }
                                </p>
                            </div>
                        </div>
                        <div className="link-icon"><i className="icon-plus"></i></div>
                    </a>


                    {isPortfolioModalOpen && (
                        <Lightbox
                            discourageDownloads={true}
                            mainSrc={require("../../Images/portfolio/fullsize/" + this.props.thumbnail)}
                            imageTitle={[this.props.title]}
                            imageCaption={[this.props.description]}
                            onCloseRequest={this.togglePortfolioModalHandler}
                        />
                    )}

                </div>
            </div>
        );
    }
}

export default PortfolioItem;
