import React, {Component} from 'react';
import d from './D';

class E extends Component {
  render() {
    return (
      <div>
        我是div
      </div>
    );
  }

  // componentWillMount() {
  //   alert('我是原始的生命周期')
  // }
}

export default d(E);
