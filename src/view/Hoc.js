import React, {Component} from 'react';
// B,C 使用了代理方式的高阶组件A   优先使用代理高阶组件
import B from '../components/hoc/B'
import C from '../components/hoc/C'
// E,F 使用了继承方式的高阶组件D
import E from '../components/hoc/E'
import F from '../components/hoc/F'
import './hoc.css'

class Hoc extends Component {
  render() {
    return (
      <div>
        <B name={'张三'} age={18}/>
        <C/>
        <E/>
        <F/>
      </div>
    );
  }
}

export default Hoc;
