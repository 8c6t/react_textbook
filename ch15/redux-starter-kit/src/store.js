import { createStore, applyMiddleware } from 'redux';
import modules from './modules';
import loggerMiddleware from './lib/loggerMiddleaware';

/* 
  미들웨어가 여럿일 경우 파라미터로 전달. ex: applyMiddleware(a,b,c)
  미들웨어 순서는 여기에서 전달한 파라미터 순서대로 지정됨
*/
const store = createStore(modules, applyMiddleware(loggerMiddleware));

export default store;