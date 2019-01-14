import React, {Component} from 'react';
import a from './A'

class B extends Component {
  render() {
    return (
      <div>
        <input type="text" {...this.props}/>
        <br/>
        我的名字叫：{this.props.name}
        <br/>
        我的年龄是：{this.props.age}
        <br/>
        我的性别是：{this.props.sex}
        <br/>
        <img src={require('../../images/B.jpg')} alt="C图片"/>
      </div>
    );
  }
}

export default a('我是B')(B);
