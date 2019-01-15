import React, { Component } from 'react';
import OrderList from '../components/order/OrderList';
import Header from '../components/order/Header'
import tabbar from './Tabbar';
import './order.css'

class Order extends Component{
  render() {
    return(
      <div className='order'>
        <Header/>
        <OrderList/>
      </div>
    )
  }
}
export default tabbar(Order);
