import React, { Component } from 'react'
import Modal from 'react-responsive-modal'

class Notables extends Component {

    state = {
        open: false,
    };

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {
        const { open } = this.state;
        const modalConfig = {
            overlay: 'notablesOverlay',
            modal: 'notablesModal',
            closeIcon: 'notablesCloseIcon'
        }
        return (
            <div className="notables">
                <button onClick={this.onOpenModal}>
                    <i className="icon-down-circle"></i> Show notable accomplishments
                </button>

                <Modal open={open} onClose={this.onCloseModal} classNames={modalConfig}>
                    <h2><span>Notable Accomplishments</span></h2>
                    {
                        this.props.Notables.map((notable, index) =>
                            <p key={index} className="notable">
                                <h4>{notable.Title}</h4>
                                {notable.Description}
                                <hr />
                            </p>
                        )
                    }
                </Modal>
            </div>
        )
    }
}

export default Notables;
