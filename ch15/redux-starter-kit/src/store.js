import { createStore, applyMiddleware } from 'redux';
import modules from './modules';

import { createLogger } from 'redux-logger';

// 사용하지 않으므로 주석 처리
// import ReduxThunk from 'redux-thunk';

import { createPromise } from 'redux-promise-middleware';

/*
  로그 미들웨어를 만들 때 설정을 커스터마이징 할 수 있음
  https://github.com/evgenyrodionov/redux-logger#options
*/
const logger = createLogger();

const pm = createPromise({
  promiseTypeSuffixes: ['PENDING', 'SUCCESS', 'FAILURE']
});

const store = createStore(modules, applyMiddleware(logger, pm));

export default store;