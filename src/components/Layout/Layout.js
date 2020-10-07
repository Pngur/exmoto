import React from 'react';
import { Switch, Route } from 'react-router-dom';

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
               <Switch>
                  <Route path={'/price'} >
                     <PricePage/>
                  </Route>
                  <Route path={'/'}>
                     <Slider/>
                     <Partners/>
                  </Route>
               </Switch>
            </main>
         <Footer/>
      </>
   );
};

export default Layout;