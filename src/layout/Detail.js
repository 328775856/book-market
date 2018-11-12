import React, {Component} from 'react'
import {connect} from 'dva'
import Header from '../components/header/'
import {Button, Modal} from 'antd'
import {titleList} from '../map'
import Login from '../components/Login/login'
import './index.less'
import "antd/dist/antd.css";
import qs from 'qs'

@connect(({buy}) => ({buy}))
class Detail extends Component {
  // constructor(props) {
  //     super(props)
  // }
  state = {
    index: 0,
    isBuy: false,
    visible: false
  }

  componentDidMount() {
    // console.log(this.props.buy.isBuy)
    if (this.props.buy.isBuy.indexOf(qs.parse(this.props.location.search.replace('?', '')).id) !== -1) {
      this.setState({isBuy: true})
    }
    if (sessionStorage.getItem('isBuy') && sessionStorage.getItem('isBuy').split(',').indexOf(qs.parse(this.props.location.search.replace('?', '')).id) !== -1) {
      this.setState({isBuy: true})
    }
    this.setState({
      index: qs.parse(this.props.location.search.replace('?', '')).id - 1
    })
  }

  login = () => {
    this.setState({visible: true})
    if (sessionStorage.getItem('isLogin')) {
      this.loginclick()
    }
  }
  loginclick = () => {
    this.setState({visible: false})
    this.props.dispatch({
      type: 'buy/login',
      payload: {id: qs.parse(this.props.location.search.replace('?', '')).id}
    })
    // this.props.dispatch(routerRedux.push('/buy'))
  }

  render() {
    return (
      <div className='detail'>
        <Header></Header>
        <main>
          <div className='cover'>
            <img src={titleList[this.state.index].src} alt=""/>
          </div>
          <div className='title'>《{titleList[this.state.index].title}》</div>
          {this.state.isBuy ? '' : <Button onClick={this.login}>购买课程此课程：￥4.90</Button>}

          {this.state.isBuy ? (<div className='content'
                                    dangerouslySetInnerHTML={{__html: titleList[this.state.index].content.replace(/\n/g, '<br />')}}>
          </div>) : (<div className='content'
                          dangerouslySetInnerHTML={{__html: titleList[this.state.index].intro.replace(/\n/g, '<br />')}}>
          </div>)}
        </main>
        <Modal closable={false}
               footer={null}
               visible={this.state.visible}
               onOk={this.handleOk}
               className='detail-modal'
               onCancel={this.handleCancel}>
          <Login loginclick={this.loginclick}></Login>
        </Modal>
      </div>
    )
  }
}

export default Detail
