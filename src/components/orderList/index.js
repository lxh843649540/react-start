import React, {Component} from 'react';
import OrderItem from '../orderItem'

class OrderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  render() {
    return (
      <div className='orderList'>
        {this.state.data.map(item => <OrderItem key={item.id} data={item} onSubmit={this.handleSubmit}/>)}
      </div>
    );
  }

  componentDidMount() {
    fetch('/mock/orders.json').then(res => {
      if (res.ok) {
        res.json().then(data => {
          this.setState({
            data
          })
        })
      }
    })
  }

  handleSubmit = (id, value, stars) => {
    const newData = this.state.data.map(item => {
      return item.id === id ? {...item, value, stars, ifCommented: true} : item
    });
    this.setState({
      data: newData
    })
  }
}

export default OrderList;
