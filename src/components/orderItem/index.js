import React, {Component} from 'react';
import './style.css'

class OrderItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stars: props.data.stars || 0,
      editing: false,
      value: props.data.value || ''
    };
    this.edit = this.edit.bind(this);
    this.commitEdit = this.commitEdit.bind(this);
  }

  render() {
    const {shop, product, price, picture, ifCommented} = this.props.data;
    return (
      <div>
        <div className='orderItem'>
          <div className='orderItem__picContainer'>
            <img className='orderItem__pic' src={picture} alt="产品图片"/>
          </div>
          <div className='orderItem__content'>
            <div className='orderItem__product'>{product}</div>
            <div className='orderItem__shop'>{shop}</div>
            <div className='orderItem__detail'>
              <div className='orderItem__price'>{price}</div>
              <div>
                {!this.state.editing &&
                <button type='button' disabled={ifCommented} className={ifCommented ? 'btn' : 'btn btn-danger'}
                        onClick={this.edit}>{ifCommented && '已'}评价</button>}
              </div>
            </div>
          </div>
        </div>
        {this.state.editing && this.renderEditArea()}
      </div>
    );
  }

  renderEditArea() {
    return (
      <div className='orderItem__commentContainer' style={{paddingTop: '10px'}}>
        <textarea className='orderItem__comment' style={{width: '100%'}} value={this.state.value}
                  onChange={this.textareaChange}/>
        {this.renderStars()}
        <button className='btn btn-danger' onClick={this.commitEdit}>提交</button>
        <button className='btn btn-secondary' onClick={this.cancelEdit}>取消</button>
      </div>
    )
  }

  renderStars() {
    const {stars} = this.state;
    return (
      <div style={{paddingBottom: '10px'}}>
        {[1, 2, 3, 4, 5].map(item => <span key={item} style={{color: 'red'}}
                                           onClick={this.handleStars.bind(this, item)}>{stars >= item ? '★' : '☆'}</span>)}
      </div>
    )
  }

  edit() {
    this.setState({
      editing: true
    })
  }

  cancelEdit = () => {
    this.setState({
      editing: false,
      stars: this.props.data.stars || 0,
      value: this.props.data.value || ''
    })
  };

  commitEdit() {
    const {id} = this.props.data;
    const {value, stars} = this.state;
    this.props.onSubmit(id, value, stars);
    this.setState({
      editing: !this.state.editing
    })
  }

  handleStars(stars) {
    this.setState({stars})
  }

  textareaChange = (e) => {
    this.setState({
      value: e.target.value
    });
  }
}

export default OrderItem;
