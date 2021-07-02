import React, { useEffect, useCallback, useRef } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
// CSS
import './Modal.css';

// state open/close state managed by parent
// props:
// showModel (parent state: <Bool>)
// onCloseModalCB (parent func for state)
// content (content of Modal)

const Modal = ({ modalState, onChangeModalStateCB, content }) => {
  const modalRef = useRef();
  const buttonRef = useRef();

  const handleCloseModal = (e) => {
    // console.log('inside', modalRef, e.target);
    if (modalRef.current === e.target || buttonRef.current === e.target) {
      console.log('inside: func');
      onChangeModalStateCB();
    }
  };

  const handleCloseModalOutsideClick = (e) => {
    // console.log('outside', modalRef, e.target);
    if (modalRef.current !== null) {
      if (!modalRef.current.contains(e.target)) {
        // console.log('outside: func');
        onChangeModalStateCB();
        document.removeEventListener('click', handleCloseModalOutsideClick, false);
      }
    }
  };

  const handleKeyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && modalState) {
        onChangeModalStateCB();
      }
    },
    [onChangeModalStateCB, modalState]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress, false);
    document.addEventListener('click', handleCloseModalOutsideClick, false);
    return () => {
      document.removeEventListener('keydown', handleKeyPress, false);
      document.removeEventListener('click', handleCloseModalOutsideClick, false);
    };
  }, [handleKeyPress]);

  // <div onClick={handleCloseModal} ref={modalRef} className="modal-card"></div>
  // <button aria-label="Close modal" onClick={handleCloseModal}></button>
  return ReactDOM.createPortal(
    <div className="modal">
      <div ref={modalRef} className="modal-card">
        <div className="modal-close">
          <i
            aria-label="Close modal"
            onClick={handleCloseModal}
            ref={buttonRef}
            className="fs-33 fw-300 fa fa-times"
          ></i>
        </div>
        {content}
      </div>
    </div>,
    document.querySelector('#portal-modal')
  );
};

Modal.propTypes = {
  modalState: PropTypes.bool.isRequired,
  onChangeModalStateCB: PropTypes.func.isRequired,
  // content: PropTypes.string,
};

export default Modal;
