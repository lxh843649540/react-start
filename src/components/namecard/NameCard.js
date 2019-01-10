import React, { Component }from 'react';
import styled from 'styled-components';

const GoodButton = styled.button`
  ::before {
    content: '👍'
  }
`;
class NameCard extends Component{
  constructor(props) {
    super(props);
    this.state = {
      likes: 0
    };
  }
  render() {
    const { name, number, isHuman, tags } = this.props;
    return (
      <div className='alert alert-success'>
        <h4 className='alert-heading'>{name}</h4>
        <ul>
          <li>电话：{number}</li>
          <li>物种：{isHuman ? '人类' : '外星生物'}</li>
        </ul>
        <p>
          {(tags || []).map((tag, index) => {
            return <span className='badge badge-pill badge-primary' key={index}>{tag}</span>
          })}
        </p>
        <GoodButton type='button' className='btn btn-outline-primary btn-lg' onClick={() => { this.handleList() }}>{this.state.likes}</GoodButton>
      </div>
    )
  }
  handleList() {
    let newLikes = this.state.likes;
    newLikes++;
    this.setState({
      likes: newLikes
    });
  }
}
export default NameCard;
