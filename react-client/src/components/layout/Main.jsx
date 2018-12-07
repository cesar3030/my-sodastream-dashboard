import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../../pages/Home';
import Refills from '../../pages/Refills';
import Usage from '../../pages/Usage';
import Reload from '../../pages/Reloads';

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