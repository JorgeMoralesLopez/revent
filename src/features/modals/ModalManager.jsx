import React from 'react';
import { connect } from 'react-redux';
import TestModal from './TestModal';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

const modalLookup = {
  TestModal,
  LoginModal,
  RegisterModal
}

const mapStateToProps = (state) => {
  return {
    currentModal: state.modals
  }
}

const ModalManager = ({currentModal}) => {
  let renderedModal;
  //console.log('currentModal', currentModal)
  if (currentModal) {
    //console.log('currentModal', currentModal)
    const { modalType, modalProps } = currentModal;//aquí estaba el fallo!
    const ModalComponent = modalLookup[modalType];

    renderedModal = <ModalComponent {...modalProps} />
  }

  return <span>{renderedModal}</span>
}

export default connect(mapStateToProps)(ModalManager)
