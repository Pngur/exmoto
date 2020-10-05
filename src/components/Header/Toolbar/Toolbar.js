import React from 'react';
import './Toolbar.scss';
import Logo from './../Logo/Logo';
import PhoneBox from './../PhoneBox/PhoneBox';
import OrderBuilder from './../../../containers/OrderBuilder/OrderBuilder';

const Toolbar = () => {
   return (
      <header className="Toolbar">
         <div className="Container">
            <div className="Toolbar-Box">
               <Logo/>
               <OrderBuilder/>
               <PhoneBox/>
            </div>
         </div>
      </header>
   );
}

export default Toolbar;