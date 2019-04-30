import { createStore, applyMiddleware } from 'redux';
import modules from './modules';

import { createLogger } from 'redux-logger';
import penderMiddleware from 'redux-pender';

/*
  로그 미들웨어를 만들 때 설정을 커스터마이징 할 수 있음
  https://github.com/evgenyrodionov/redux-logger#options
*/
const logger = createLogger();

const store = createStore(modules, applyMiddleware(logger, penderMiddleware()));

export default store;