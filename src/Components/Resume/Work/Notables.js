import React, { Component } from 'react';
import Modal from 'react-responsive-modal';

class Notables extends Component {
    state = { notablesOpen: false };

    toggleNotablesHandler = () => {
        const notablesOpen = this.state.notablesOpen;
        this.setState({ notablesOpen: !notablesOpen });
    };

    render() {
        const { notablesOpen } = this.state;
        const modalConfig = {
            overlay: 'notablesOverlay',
            modal: 'notablesModal',
            closeIcon: 'notablesCloseIcon'
        }
        return (
            <p className="notables">
                <button onClick={this.toggleNotablesHandler}>
                    <i className="icon-down-circle"></i> Show notable accomplishments
                </button>

                <Modal open={notablesOpen} onClose={this.toggleNotablesHandler} classNames={modalConfig}>
                    <h2>Notable Accomplishments</h2>
                    {
                        this.props.notables.map((notable, index) =>
                            <p key={index} className="notable">
                                <h4>{notable.Title}</h4>
                                {notable.Description}
                                <hr />
                            </p>
                        )
                    }
                </Modal>
            </p>
        )
    }
}

export default Notables;
