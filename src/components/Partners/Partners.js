import React, { useState } from 'react';

import './Partners.scss';
import Partner from './Partner/Partner';

const Partners = ( props ) => {
   const [partners] = useState(['FARMAPRIM', 'BUCURIA', 'MAXIMUM', 'DAAC HERMES', 'JLC', 'LAPMOL']);
   const allPartners = partners.map(prt => (
      <Partner key={prt} name={prt}/>
   ));
   
   return (
      <div className="Container">
         <div className="Partners">
            <h3 className="Partners__Header">НАШИ ПАРТНЁРЫ</h3>
            <div className="Partners-Box">
            { allPartners }               
            </div>
         </div> 
      </div>
   );
};

export default Partners;