import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import App from './view/App';
import Order from './view/Order';
import Hoc from './view/Hoc';
import Tabbar from './view/Tabbar';

const BasicRoute = () => {
  return (
    <BrowserRouter>
      <div>
        <Tabbar/>
        <Switch>
          <Route exact path='/' component={App}/>
          <Route exact path='/order' component={Order}/>
          <Route exact path='/hoc' component={Hoc}/>
        </Switch>
      </div>
    </BrowserRouter>
  )
};
export default BasicRoute
