import React, {Component} from 'react'
import {connect} from 'dva'
import {routerRedux} from 'dva/router'
import {titleList} from '../map'
import Header from '../components/header/'
import {Button, Modal, Radio, Spin, message} from 'antd'
import './index.less'
import "antd/dist/antd.css";
import qs from 'qs'

const RadioGroup = Radio.Group

@connect(({buy}) => ({buy}))
class Detail extends Component {
  // constructor(props) {
  //     super(props)
  // }
  state = {
    loading: false,
    isBuy: [],
    id: 1
  }

  componentDidMount() {
    this.setState({id: qs.parse(this.props.location.search.replace('?', '')).id})
    if (sessionStorage.getItem('isBuy')) {
      this.setState({isBuy: sessionStorage.getItem('isBuy').split()})
    } else {
      this.setState({isBuy: [...this.state.isBuy, ...this.props.buy.isBuy]})
    }
  }

  pay = () => {
    console.log(this.state.id)
    if (this.state.isBuy.length > 0 && this.state.isBuy[0].indexOf(this.state.id) !== -1) {
      message.info('您已购买！')
      this.props.dispatch(routerRedux.push('/details?id=' + this.state.id))
    } else {
      this.setState({loading: true})
      this.setState({isBuy: [...this.state.isBuy, this.state.id]}, function () {
        setTimeout(this.closeSpin, 2000)
      })
    }
  }
  closeSpin = () => {
    this.setState({loading: false})
    Modal.success({
      content: '支付成功！',
      onOk: () => {
        this.props.dispatch({
          type: 'buy/fetch',
          payload: {isBuy: this.state.isBuy, id: this.state.id}
        })
      }
    })
  }

  render() {
    return (
      <div className='buy'>
        <Spin tip="正在支付中..." spinning={this.state.loading}>
          <Header></Header>
          <main>
            <div className='card'>
              <img src={titleList[this.state.id - 1].src} alt=""/>
              <p>
                《{titleList[this.state.id - 1].title}》
              </p>
            </div>
            <div className='line'></div>
            <p>您即将支付￥4.90元，请使用以下渠道付款</p>
            <div>
              <RadioGroup>
                <Radio value={1} checked>
                  <span className='title'>支付宝</span>
                  <img src={require('../assets/images/alipay.png')} alt=""/>
                </Radio>
                {/*<Radio value={2}>*/}
                {/*<span className='title'>微信</span>*/}
                {/*<img src={require('../assets/images/wechat.png')} alt=""/>*/}
                {/*</Radio>*/}
              </RadioGroup>
            </div>
            <Button onClick={this.pay}>下一步</Button>
          </main>
        </Spin>
      </div>
    )
  }
}

export default Detail
