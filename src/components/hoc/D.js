// 继承方式的高阶组件（使用E,F两个做案例）
// 可操纵prop & 生命周期函数
import React from 'react';

const modifyPropsHOC = (WrappedComponent) => class NewComponent extends WrappedComponent {
  static displayName = `NewComponent(${getDisplayName(WrappedComponent)})`;

  // componentWillMount() {
  //   alert('我是修改后的生命周期')
  // }

  render() {
    const element = super.render();
    const newStyle = {
      color: element.type === 'div' ? 'red' : 'green'
    };
    const newProps = {...this.props, style: newStyle};
    return React.cloneElement(element, newProps, element.props.children);
  }
};

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

export default modifyPropsHOC;
