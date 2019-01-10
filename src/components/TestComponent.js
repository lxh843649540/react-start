import React from 'react';

class TestComponent extends React.Component{
  render() {
    return(
      <div>
        <span className='bspan'>测试StyledComponents嵌套写法会不会影响到子组件的样式(结论：会)</span>
      </div>
    )
  }
}
export default TestComponent;
