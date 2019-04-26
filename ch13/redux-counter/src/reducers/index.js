import * as types from '../actions/ActionTypes';

// 초기 상태 정의
const initialState = {
  color: 'black',
  number: 0
}

/* 
  리듀서 함수 정의
  state가 undefined일때(스토어가 생성될 때) state 기본값을 initialState로 사용
  action.type에 따라 다른 작업을 하고, 새 상태를 만들어서 반환
  이때, state를 직접 수정하지 않고, 기존 상태 값에 원하는 값을 덮어쓴 새로운 객체를 만들어서 반환
*/
function counter(state = initialState, action) {
  switch(action.type) {
    case types.INCREMENT:
      return { ...state, number: state.number + 1 };
    case types.DECREMENT:
      return { ...state, number: state.number - 1 };
    case types.SET_COLOR:
      return { ...state, color: action.color };
    default:
      return state;
  }
};

export default counter;