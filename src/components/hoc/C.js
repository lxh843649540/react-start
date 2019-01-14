import React, {Component} from 'react';
import a from './A'

class C extends Component {
  render() {
    return (
      <div>
        <img src={require('../../images/C.jpg')} alt="C图片"/>
      </div>
    );
  }
}

export default a(C);
