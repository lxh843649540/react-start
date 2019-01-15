import React, {Component} from 'react';
// B,C 使用了代理方式的高阶组件A   优先使用代理高阶组件
import B from '../components/hoc/B'
import C from '../components/hoc/C'
// E,F 使用了继承方式的高阶组件D
import E from '../components/hoc/E'
import F from '../components/hoc/F'
import tabbar from './Tabbar';
import './hoc.css'

class Hoc extends Component {
  render() {
    return (
      <div>
        <h1>代理组件实例：</h1>
        <B name={'张三'} age={18}/>
        <C/>
        <h1>继承组件实例：</h1>
        <E/>
        <F/>
      </div>
    );
  }
}

export default tabbar(Hoc);
