import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Refills from './Refills';
import Usage from './Usage';

export default () => {
 return (
   <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/refills' component={Refills}/>
      <Route path='/usage' component={Usage}/>
    </Switch>
   </BrowserRouter>
 )
}