import React, { Component } from 'react';
import TodoList from '../components/todolist/TodoList';
import NameCard from '../components/namecard/NameCard';
import Ctx from '../components/ctx/Ctx';
import Clock from '../components/clock/Clock';
import TicTacToe from '../components/ticTacToe/TicTacToe';
import StyledComponents from '../components/styledComponents/StyledComponents'
import Context from '../context'
import './app.css'
const themes = {
  light: {
    color: '#000',
    bgColor: '#f8f9fa',
    txt: '亮light'
  },
  secondary: {
    color: '#fff',
    bgColor: '#5a6268',
    txt: '灰secondary'
  },
  danger: {
    color: '#fff',
    bgColor: '#d83242',
    txt: '红danger'
  },
  dark: {
    color: '#fff',
    bgColor: '#343a40',
    txt: '暗dark'
  },
};
class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      theme: 'light'
    };
    this.changeTheme = this.changeTheme.bind(this);
  }

  render() {
    const tags = ['恐龙', '足球小子', '嘻哈侠', '平衡侠'];
    return (
      <Context.Provider value={themes[this.state.theme]}>
        <React.Fragment>
          <ul className='demo-list'>
            <li className='demo-item'>
              <h1>todoList:</h1>
              <TodoList></TodoList>
            </li>
            <li className='demo-item'>
              <h1>nameCard:</h1>
              <NameCard name={'迪迦奥特曼'} number={13554223093} isHuman tags={tags}></NameCard>
            </li>
            <li className='demo-item'>
              <h1>context:</h1>
              <button className='btn btn-light' onClick={() => {this.changeTheme('light')}}>亮light</button>
              <button className='btn btn-secondary' onClick={() => {this.changeTheme('secondary')}}>灰secondary</button>
              <button className='btn btn-danger' onClick={() => {this.changeTheme('danger')}}>红danger</button>
              <button className='btn btn-dark' onClick={() => {this.changeTheme('dark')}}>暗dark</button>
              <Ctx></Ctx>
            </li>
            <li className='demo-item'>
              <h1>clock:</h1>
              <Clock></Clock>
            </li>
            <li className='demo-item'>
              <h1>StyledComponents(一种定义好样式的组件写法)</h1>
              <StyledComponents></StyledComponents>
            </li>
            <li className='demo-item'>
              <h1>井字棋:</h1>
              <TicTacToe></TicTacToe>
            </li>
          </ul>
        </React.Fragment>
      </Context.Provider>
    )
  }

  changeTheme(theme) {
    this.setState({
      theme
    })
  }
}
export default App;
