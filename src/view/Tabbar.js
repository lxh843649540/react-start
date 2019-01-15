import React, {Component} from 'react';
import {Link} from "react-router-dom";
import '../static/iconfont.css'
import './tabbar.css'

const tabbarArr = [
  {
    img: 'icon-dianpu',
    text: '首页',
    link: '/home'
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

const tabbar = WrappedComponent => class Tabbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    }
  }

  render() {
    const url = window.location.href;
    return (
      <div className='tabbar-container'>
        <div className='tabbar-childrenComponent'>
          <WrappedComponent/>
        </div>
        {/*tabbar*/}
        <div className='tabbar'>
          <div className='tabbar-list'>
            {tabbarArr.map((item, index) =>
              <Link to={item.link} className={'tabbar-item ' + (url.indexOf(item.link) !== -1 ? 'active' : '')}
                    key={index}>
                <span className={'iconfont ' + item.img}/>
                <p className='tabbar-text'>{item.text}</p>
              </Link>)}
          </div>
        </div>
      </div>
    );
  }
};

export default tabbar;
