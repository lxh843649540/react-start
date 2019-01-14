// 代理方式的高阶组件（使用B,C两个做案例）
import React, {Component} from 'react';

export default title => WrappedComponent => class A extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '252'
    }
  }
  render() {
    const {age, ...otherProps} = this.props;
    const newProps = {
      value: this.state.value,
      onChange: this.onInputChange
    };
    return (
      <div className='a-container'>
        <div className='a-header'>
          <div>{title}</div>
          <div>X</div>
        </div>
        <div>
          <WrappedComponent sex={'男'}{...otherProps} ref={this.refC.bind(this)}{...newProps}/>
        </div>
      </div>
    );
  }

  refC(instance) {
    // instance.getName && alert(instance.getName())
    console.log('获取C组件实例')
  }

  onInputChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }
}
