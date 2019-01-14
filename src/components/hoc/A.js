import React, {Component} from 'react';

export default function (WrappedComponent) {
  return class A extends Component {
    render() {
      return (
        <div className='a-container'>
          <div className='a-header'>
            <div>提示</div>
            <div>X</div>
          </div>
          <div>
            <WrappedComponent/>
          </div>
        </div>
      );
    }
  }
}
