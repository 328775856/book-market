import React from 'react';
import {Link} from 'dva/router'
import './index.less'

const Index = () => {
  return (
    <div className='head'>
      <div>
        <img src="./logo.png" alt=""/>
        <Link to='/'><span>首页</span></Link>
      </div>
    </div>
  );
};

Index.propTypes = {};

export default Index;
