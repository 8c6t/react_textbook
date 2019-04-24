/* 
  action 객체를 만드는 액션 생성 함수를 선언(action creators)
*/

import * as types from './ActionTypes';

export const increment = () => ({
  type: types.INCREMENT
});

export const decrement = () => ({
  type: types.DECREMENT
});

/* 다른 액션 생성자들과 달리 파라미터를 가지고 있음 */
export const setColor = (color) => ({
  type: types.SET_COLOR,
  color
});