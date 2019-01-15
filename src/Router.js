import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import App from './view/App';
import Order from './view/Order';
import Hoc from './view/Hoc';

const BasicRoute = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App}/>
        <Route exact path='/home' component={App}/>
        <Route exact path='/order' component={Order}/>
        <Route exact path='/hoc' component={Hoc}/>
      </Switch>
    </BrowserRouter>
  )
};
export default BasicRoute
