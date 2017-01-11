import React from 'react';

import {
    Modal,
    ModalHeader,
    ModalTitle,
    ModalClose,
    ModalBody,
    ModalFooter
} from 'react-modal-bootstrap';

export default class ModalInfoModal extends React.Component {
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
        let layoutStyle = {
            padding: "30px 0"
        };

        let buttonStyle = {
            display: "inline"
        };

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
            <div className='layout-page'>
                <main className='layout-main' style={layoutStyle}>
                    <div>
                        <button className='btn btn-primary modalButton' onClick={this.openModal.bind( this ) }>
                            {this.props.modalText}
                        </button>
                        <Modal isOpen={this.state.isOpen} backdropStyles={backdropStyles} size='modal-lg' onRequestHide={this.hideModal.bind( this ) }>
                            <ModalHeader>
                                <ModalClose onClick={this.hideModal.bind( this ) }/>
                                <ModalTitle>Premium Nutrition Services</ModalTitle>
                            </ModalHeader>
                            <ModalBody>
                                <p><strong>Weight management and malnutrition:</strong> Some Descritpion</p>
                                <hr/>
                                <p><strong>Endocrine disorders:</strong> </p>
                                <hr/>
                                <p><strong>Cardiovascular disorders:</strong> </p>
                                <hr/>
                                <p><strong>Gastrointestinal disorders:</strong> </p>
                                <hr/>
                                <p><strong>Hepatic, pancreatic and biliary disorders:</strong> </p>
                                <hr/>
                                <p><strong>Cancer:</strong> </p>
                                <hr/>
                                <p><strong>Musculoskeletal, arthritic and collagen disorders:</strong> </p>
                                <hr/>
                                <p><strong>Hematology: anemia and blood disorders:</strong> </p>
                                <hr/>
                                <p><strong>Renal disorder:</strong> </p>
                                <hr/>
                                <p>These require a <strong>dedicated</strong> experience of 6 months or more.
                                    If you have any of the above we highly recommend you choosing this package</p>
                            </ModalBody>
                            <ModalFooter>
                                <button className='btn btn-default' onClick={this.hideModal.bind( this ) }>
                                    Close
                                </button>
                            </ModalFooter>
                        </Modal>
                    </div>
                </main>
            </div>
        );
    }
} 