import React, {Component} from 'react'
import {connect} from 'dva'
import {Button} from 'antd'
import {routerRedux} from 'dva/router'
import './index.less'

@connect(({example}) => ({example}))
class Index extends Component {

  turn = (id) => {
    this.props.dispatch(routerRedux.push('/details?id=' + id))
    // sessionStorage.setItem('id', '' + id)
    // this.props.dispatch(routerRedux.push('/details'))
  }

  render() {

    let {src, title, id} = this.props.item
    return (
      <div className='cell'>
        <div className='cover'>
          <img src={src} alt={src}/>
        </div>
        <p>{title}</p>
        <Button onClick={() => {
          this.turn(id)
        }}>查看详情</Button>
      </div>
    );
  }
}
;

Index.propTypes = {};

export default Index;
