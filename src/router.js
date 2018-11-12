import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Home from './layout/Home';
import Detail from './layout/Detail';
import Buy from './layout/Buy';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/details" component={Detail} />
        <Route path="/buy" component={Buy} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
