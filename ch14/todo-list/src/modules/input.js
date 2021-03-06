import { Map } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

// 액션 타입 정의
const SET_INPUT = 'input/SET_INPUT';

// 액션 생성 함수 만들기
export const setInput = createAction(SET_INPUT);

// 리듀서 초기 상태 정의
const initialState = Map({
  value: ''
});

// 리듀서 정의
export default handleActions({
  [SET_INPUT]: (state, action) => {
    return state.set('value', action.payload)
  }
}, initialState);