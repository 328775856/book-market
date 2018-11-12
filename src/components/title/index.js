import React from 'react';
import './index.less'

const Index = (props) => {
  return (
    <div className='title'>
      <span></span>
      <p>{props.title}</p>
      <span></span>
    </div>
  );
};

Index.propTypes = {
};

export default Index;
