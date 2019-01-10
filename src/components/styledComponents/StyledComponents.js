import React from 'react';
import TestComponent from '../TestComponent';
import styled from 'styled-components';

// 定义带样式的组件
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
// 根据tag属性判断样式
const Button = styled.button`
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
// 继承某个tag及属性并新增或覆盖原有的某些属性
const TomatoButton = styled(Button)`
  border-radius: 50%;
`;
// 层级嵌套，（样式隔离方案）
const InsulateBlock = styled.div`
  padding: 1em;
  background-color: #00ae9d;
  color: #000;
  .bspan {
    color: #fff;
  }
  >p {
    color: red;
  }
`;
const StyledComponents = () => {
  return(
    <Wrapper>
      <Title>
        Hello World!
      </Title>
      <span>根据props传递参数判断样式</span>
      <p><Button>Normal</Button><Button primary>Primary</Button></p>
      <span>继承相同tag的属性并新增或覆盖原有的某些属性</span>
      <p><Button>Normal</Button><TomatoButton>TomatoButton</TomatoButton><TomatoButton primary>TomatoButton with Primary</TomatoButton></p>
      <span>层级嵌套，（样式隔离方案）</span>
      <InsulateBlock>
        默认字体颜色
        <h6 className='bspan'>红牛</h6>
        <p>枸杞</p>
        <TestComponent></TestComponent>
      </InsulateBlock>
    </Wrapper>
  )
};
export default StyledComponents;
