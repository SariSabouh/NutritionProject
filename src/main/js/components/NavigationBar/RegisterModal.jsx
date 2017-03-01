import React from 'react';

import {
    Modal,
    ModalHeader,
    ModalTitle,
    ModalClose,
    ModalBody,
    ModalFooter
} from 'react-modal-bootstrap';

export default class RegisterModal extends React.Component {
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
                        <button className='btn btn-primary modalButton' id="btnregister" onClick={this.openModal.bind( this ) }>
                            {this.props.modalText}
                        </button>
                        <Modal isOpen={this.state.isOpen} backdropStyles={backdropStyles} size='modal-lg' onRequestHide={this.hideModal.bind( this ) }>
                            <ModalHeader>
                                <ModalClose onClick={this.hideModal.bind( this ) }/>
                                <ModalTitle>Register</ModalTitle>
                            </ModalHeader>
                            <ModalBody>
                                <form>
                                     <div className="form-group">
                                        <label htmlFor="Email">Email</label>
                                        <input type="Email" name="Email" id="Email" tabIndex="2" className="form-control" placeholder="Email" autoComplete="off" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input type="" name="" id="Email" tabIndex="2" className="form-control" placeholder="Password" autoComplete="off" />
                                    </div>
                                     <div className="form-group">
                                        <label>FirstName</label>
                                        <input type="" name="" id="" tabIndex="2" className="form-control" placeholder="FirstName" autoComplete="off" />
                                    </div>

                                    <div className="form-group">
                                        <label>LastName</label>
                                        <input type="" name="" id="" tabIndex="2" className="form-control" placeholder="LastName" autoComplete="off" />
                                    </div>
                                     <div className="form-group">
                                        <label >Medical</label>
                                        <input type="" name="" id="" tabIndex="2" className="form-control" placeholder="medical" autoComplete="off" />
                                    </div>

                                    <div className="form-group">
                                        <label>Age</label>
                                        <input type="" name="" id="" tabIndex="2" className="form-control" placeholder="Age" autoComplete="off" />
                                    </div>
                                </form>
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