import React from 'react';
import ReactDOM from 'react-dom';
import icon from '../static/img/vector-3-1@2x.png';
import { CSSTransition } from 'react-transition-group';


import Backdrop from './UIElement/Backdrop';
import './Modal.css';

const ModalOverlay = props => {
  const content = (
    <div className='modal'>
        <img className='icon-10'  src={icon} alt='congratulations' />
        <h1 className='modal-text'>Congratulations</h1>
        <p className='modal-text-p'>Great Move!.You're one step closer to getting your hands on the product.Please check your mail for more information.</p>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};

const Modal = props => {
  return (
    <React.Fragment>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </React.Fragment>
  );
};

export default Modal;
