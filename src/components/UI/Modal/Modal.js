import React from 'react';

import Backdrop from './../Backdrop/Backdrop';
import './Modal.scss';

const Modal = props => (
   <>
      <Backdrop show={props.show} close={props.close}/>
      <div className="Modal" 
         style={{transform: props.show ?  'translate(50%, 30%)' : 'translateY(0)',
         display: props.show ? 'block' : 'none'}}>
         {props.children}
         <div className="Close" onClick={props.close}></div>
      </div>
   </>
);

export default Modal;
