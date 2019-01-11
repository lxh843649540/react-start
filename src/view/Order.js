import React, { Component } from 'react';
import OrderList from '../components/orderList';
import Header from '../components/header'
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
export default Order;
