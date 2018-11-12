import {routerRedux} from 'dva/router'

export default {

  namespace: 'buy',

  state: {
    isBuy: [],
    id: 1,
  },

  subscriptions: {
    setup({dispatch, history}) {  // eslint-disable-line
    },
  },

  effects: {
    * login({payload}, {call, put}) {  // eslint-disable-line
      yield put({type: 'isLogin', payload});
      yield put(routerRedux.push('/buy?id=' + payload.id));
      sessionStorage.setItem('isLogin', 'true')
    },
    * fetch({payload}, {call, put}) {  // eslint-disable-line
      yield put({type: 'isBuy', payload});
      // console.log(payload.isBuy)
      if (payload.isBuy.indexOf(payload.id) !== -1) {
        yield put(routerRedux.push('/details?id=' + payload.id));
        sessionStorage.setItem('isBuy', '' + payload.isBuy)
        sessionStorage.setItem('id', '' + payload.id)
      }
    },
  },

  reducers: {
    isLogin(state, action) {
      return {...state, ...action.payload};
    },
    isBuy(state, action) {
      return {...state, ...action.payload};
    },
  },

};
