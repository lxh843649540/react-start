import React, {Component} from 'react';
// import { Link } from "react-router-dom";
import '../static/iconfont.css'
import './tabbar.css'

const tabbarArr = [
  {
    img: 'icon-dianpu',
    text: '首页',
    link: '/'
  },
  {
    img: 'icon-classify_icon',
    text: '高阶组件',
    link: '/hoc'
  },
  {
    img: 'icon-dingdan',
    text: '订单页',
    link: '/order'
  }
];

class Tabbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    }
  }

  render() {
    return (
      <div className='tabbar'>
        <ul className='tabbar-list'>
          {tabbarArr.map((item, index) =>
            <li className={'tabbar-item ' + (this.state.index === index ? 'active' : '')} key={index} onClick={this.itemChange.bind(this, index, item.link)}>
              <span className={'iconfont ' + item.img}/>
              <p className='tabbar-text'>{item.text}</p>
            </li>)}
        </ul>
      </div>
    );
  }

  itemChange(index, link) {
    this.setState({index});
    this.props.history.push(link);
  }
}

export default Tabbar;
