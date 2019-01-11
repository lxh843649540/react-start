import React from "react";
import styled from 'styled-components';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import App from './App';
import Order from './view/Order';
const Container = styled.div`
  display: flex;
  > ol {
    width: 15%;
    padding-top: 80px;
  }
  > div {
    flex-grow: 1;
  }
`;
const BasicRoute = () => {
  return(
    <BrowserRouter>
      <Container>
        <ol>
          <li><Link to='/'>首页</Link></li>
          <li><Link to="/order">订单页</Link></li>
        </ol>
        <div>
          <Switch>
            <Route exact path='/' component={App}/>
            <Route exact path='/order' component={Order}/>
          </Switch>
        </div>
      </Container>
    </BrowserRouter>
  )
};
export default BasicRoute
