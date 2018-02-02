import React, { Component } from 'react'

class PortfolioItem extends Component {
    render() {
        return (
            <div id={"#modal-" + this.props.id} class="popup-modal mfp-hide">
                <img class="scale-with-grid" src={require("../../Images/portfolio/modals/m-" + this.props.thumbnail)} alt="" />
                <div class="description-box">
                    <h4>{this.props.title}</h4>
                    <p>{this.props.description}</p>
                    <span class="categories"><i class="fa fa-tag"></i>
                        {
                            this.props.tags.map((tag, index) => {
                                 return (
                                     <span key={index}>{ tag.tag }, </span>
                                 )
                             })
                        }
                    </span>
                </div>
                <div class="link-box">
                    <a href="http://www.behance.net">Details</a>
                    <a class="popup-modal-dismiss">Close</a>
                </div>
            </div>
        );
    }
}

export default PortfolioItem;
