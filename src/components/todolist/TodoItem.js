import React, { Component } from 'react';

class TodoItem extends Component{
  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this)
  }
  render() {
    const { content } = this.props;
    return (
      <li>{content}<button onClick={this.deleteItem}>删除</button><span className='class-btn'>123</span></li>
    )
  }
  deleteItem() {
    const { deleteItem, index } = this.props;
    deleteItem(index);
  }
}
export default TodoItem
