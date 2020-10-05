import React from 'react';
import { Route } from 'react-router-dom';

import './Layout.scss';
import Toolbar from '../Header/Toolbar/Toolbar';
import Footer from './../../components/Footer/Footer';
import Slider from './../../containers/Slider/Slider';
import Partners from './../Partners/Partners';
import PricePage from './../PricePage/PricePage';

const Layout = props => {
   return (
      <>
         <Toolbar/>
            <main className="Main">
               <Route exact path={'/'} >
                  <Slider/>
                  <Partners/>
               </Route> 
               <Route path={'/pricelist'}  component={PricePage}/> 
            </main>
         <Footer/>
      </>
   );
};

export default Layout;