/* 
  action 객체를 만드는 액션 생성 함수를 선언(action creators)
*/

import * as types from './ActionTypes';

export const create = (color) => ({
  type: types.CREATE,
  color
});

export const remove = () => ({
  type: types.REMOVE
});

export const increment = (index) => ({
  type: types.INCREMENT,
  index
});

export const decrement = (index) => ({
  type: types.DECREMENT,
  index
});

/* 다른 액션 생성자들과 달리 파라미터를 가지고 있음 */
export const setColor = ({ index, color }) => ({
  type: types.SET_COLOR,
  index,
  color
});
