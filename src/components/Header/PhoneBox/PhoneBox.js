import React from 'react';
import './PhoneBox.scss';

const PhoneBox = () => (
   <div className="Phone">
      <div className="Phone__Text">контакты:</div>
      <ul className="PhoneBox">
         <li className="PhoneBox__Item">373 79 565004</li>
         <li className="PhoneBox__Item">373 68 200884</li>
         <li className="PhoneBox__Item">373 22 284761</li>
      </ul>
   </div>
);

export default PhoneBox;