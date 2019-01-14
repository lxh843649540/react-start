import React, {Component} from 'react';
import a from './A'

class B extends Component {
  render() {
    return (
      <div>
        <img src={require('../../images/B.jpg')} alt="C图片"/>
      </div>
    );
  }
}

export default a(B);
