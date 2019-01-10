import React, {Component} from 'react';

class Clock extends Component{
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }
  render() {
    return (
      <div className='jumbotron'>
        <h1>{this.state.date.toLocaleString()}</h1>
      </div>
    )
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
}
export default Clock;
