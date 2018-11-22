import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Refills from './Refills';
import Usage from './Usage';
import Reload from './Reloads';

export default () => {
 return (
   <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/refills' component={Refills}/>
      <Route path='/usage' component={Usage}/>
      <Route path='/reloads' component={Reload}/>
    </Switch>
   </BrowserRouter>
 )
}