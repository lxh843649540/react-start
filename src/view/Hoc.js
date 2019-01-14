import React, {Component} from 'react';
// import A from '../components/hoc/A'
import B from '../components/hoc/B'
import C from '../components/hoc/C'
import './hoc.css'

class Hoc extends Component {
  render() {
    return (
      <div>
        {/*<A/>*/}
        <B/>
        <C/>
      </div>
    );
  }
}

export default Hoc;
