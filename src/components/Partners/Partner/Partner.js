import React from 'react';

import './Partner.scss';

const Partner = ( props ) => (
   <div className="Partner">
      <h4 className="Partner__Header">{props.name}</h4>
   </div>
);

export default Partner;