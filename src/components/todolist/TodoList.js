import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem'
import './TodoList.css'

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputValue: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this)
  }
  render() {
    return (
      <Fragment>
        <div className="form-group">
          <input type="text" className='form-control' value={this.state.inputValue} placeholder='请输入代办事项' onChange={this.handleInputChange}/>
          <button type='button' className='btn btn-primary' onClick={this.handleBtnClick}>添加</button>
        </div>
        <ul>{this.getTodoItems()}</ul>
      </Fragment>
    );
  }
  // 循环获取todoItems
  getTodoItems() {
    return this.state.list.map((item, index) => {
      return <TodoItem key={index} content={item} index={index} deleteItem={this.handleDelete}></TodoItem>
    })
  }
  // 点击add按钮添加todoItem
  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    });
  }
  // 输入框输入时，修改inputValue值
  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  // 删除某个todoItem
  handleDelete(index) {
    let list = this.state.list;
    list.splice(index, 1);
    this.setState({list})
  }
}

export default TodoList;
