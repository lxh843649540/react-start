import React, {Component} from 'react';

export default function (WrappedComponent) {
  return class D extends Component {
    render() {
      return (
        <div>
          <WrappedComponent/>
        </div>
      );
    }
  }
}
