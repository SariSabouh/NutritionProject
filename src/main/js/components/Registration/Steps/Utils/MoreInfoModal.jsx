import React from 'react';

import {
    Modal,
    ModalHeader,
    ModalTitle,
    ModalClose,
    ModalBody,
    ModalFooter
} from 'react-modal-bootstrap';

export default class MoreInfoModal extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            isOpen: false
        };
    }

    openModal() {
        this.setState( {
            isOpen: true
        });
    };

    hideModal() {
        this.setState( {
            isOpen: false
        });
    };

    render() {
        let backdropStyles = {
            base: {
                background: 'rgba(0, 0, 0, .7)',
                opacity: 0,
                visibility: 'hidden',
                transition: 'all 0.4s',
                overflowX: 'hidden',
                overflowY: 'auto',
                zIndex: '999999',
                position: 'fixed',
                width: '100%',
                height: '100%'
            },
            open: {
                opacity: 1,
                visibility: 'visible'
            }
        };
        return (
            <div className="more-info-modal">
                <i aria-hidden="true" className="fa fa-question-circle" hidden={this.props.hideIcon} id="more-info-button" onClick={this.openModal.bind( this ) }></i>
                <Modal isOpen={this.state.isOpen} backdropStyles={backdropStyles} size='modal-lg' onRequestHide={this.hideModal.bind( this ) }>
                    <ModalHeader>
                        <ModalClose onClick={this.hideModal.bind( this ) }/>
                        <ModalTitle>Registeration</ModalTitle>
                    </ModalHeader>
                    <ModalBody>
                        {this.props.moreInfoText}
                    </ModalBody>
                    <ModalFooter>
                        <button className='btn btn-default' onClick={this.hideModal.bind( this ) }>
                            Close
                        </button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
} 