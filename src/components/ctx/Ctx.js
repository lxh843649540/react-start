import React from 'react';
import Context from '../../context';
const Ctx = () => {
  return(
    <div>
      <Context.Consumer>
        {theme => {
          return (
            <div style={{width: '100%', height: '100px', backgroundColor: theme.bgColor, color: theme.color}}>{theme.txt}</div>
          )
        }}
      </Context.Consumer>
      <p>提示：Context的参数一定要在Consumer里直接接收</p>
    </div>
  )
};
export default Ctx;
