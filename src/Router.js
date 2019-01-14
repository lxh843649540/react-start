import React from "react";
import styled from 'styled-components';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import App from './App';
import Order from './view/Order';
import Hoc from './view/Hoc';
const Container = styled.div`
  display: flex;
  > ol {
    list-style: none;
    position: fixed;
    right: 0;
    bottom: 0
    left: 0;
    display: flex;
    background-color: #be0100;
    li {
      flex-grow: 1;
      a {
        color: #fff;
      }
    }
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
          <li><Link to="/hoc">高阶组件</Link></li>
        </ol>
        <div>
          <Switch>
            <Route exact path='/' component={App}/>
            <Route exact path='/order' component={Order}/>
            <Route exact path='/hoc' component={Hoc}/>
          </Switch>
        </div>
      </Container>
    </BrowserRouter>
  )
};
export default BasicRoute
