import React, {Component} from 'react'
import Header from '../components/header/'
// import Title from '../components/title/'
import Footer from '../components/footer/'
import Cell from '../components/cell/'
import './index.less'
import "antd/dist/antd.css";

const titleList = [{
  id: 1,
  src: require('../assets/images/adwzyy.jpg'),
  title: '爱的五种语言'
}, {
  id: 2,
  src: require('../assets/images/czdx.jpg'),
  title: '肠子的小心思'
}, {
  id: 3,
  src: require('../assets/images/cwdxw.jpg'),
  title: '错误的行为'
}, {
  id: 4,
  src: require('../assets/images/gndth.jpg'),
  title: '高难度谈话'
}, {
  id: 5,
  src: require('../assets/images/gwdn.jpg'),
  title: '谷物大脑'
}, {
  id: 6,
  src: require('../assets/images/jxrg.jpg'),
  title: '九型人格'
}, {
  id: 7,
  src: require('../assets/images/mlxsj.jpg'),
  title: '美丽新世界'
}, {
  id: 8,
  src: require('../assets/images/nxzg.jpg'),
  title: '内向者沟通圣经'
}, {
  id: 9,
  src: require('../assets/images/nyrh.jpg'),
  title: '你要如何衡量你的人生'
}, {
  id: 10,
  src: require('../assets/images/nnkl.jpg'),
  title: '牛奶可乐经济学'
}, {
  id: 11,
  src: require('../assets/images/qbs.jpg'),
  title: '乔布斯传'
}, {
  id: 12,
  src: require('../assets/images/rhgx.jpg'),
  title: '如何高效学习'
}, {
  id: 13,
  src: require('../assets/images/tbzy.jpg'),
  title: '逃避自由'
}, {
  id: 14,
  src: require('../assets/images/wlswn.jpg'),
  title: '万历十五年'
}, {
  id: 15,
  src: require('../assets/images/xdjjx.jpg'),
  title: '小岛经济学'
}, {
  id: 16,
  src: require('../assets/images/yjdll.jpg'),
  title: '演讲的力量'
}, {
  id: 17,
  src: require('../assets/images/ybd.jpg'),
  title: '引爆点1'
}, {
  id: 18,
  src: require('../assets/images/yxl.jpg'),
  title: '影响力'
}, {
  id: 19,
  src: require('../assets/images/ylzs.jpg'),
  title: '娱乐至死'
}, {
  id: 20,
  src: require('../assets/images/zgryg.jpg'),
  title: '中国人应该这样用药'
}
]

class Home extends Component {
  // constructor(props) {
  //     super(props)
  // }
  state = {}

  render() {
    return (
      <div className='home'>
        <Header></Header>
        <div className='content'>
          <div className='banner'>
            <img
              src='./banner1.png'
              alt=""/>
          </div>
          {/*<Title title={this.state.title}></Title>*/}
          <div className='cell-wrapper'>
            {titleList.map((item, index) => (
              <Cell key={index} item={item}></Cell>
            ))}
          </div>
        </div>
        <Footer></Footer>
      </div>
    )
  }
}

export default Home
