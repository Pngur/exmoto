import React from 'react';

import './Backdrop.scss';

const Backdrop = ( props ) => (
     props.show ? <div className='Backdrop' onClick={props.close}></div> : null
);

export default Backdrop; 