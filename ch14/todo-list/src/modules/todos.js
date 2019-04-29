import { Map, List } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

export const insert = createAction(INSERT);
export const toggle = createAction(TOGGLE);
export const remove = createAction(REMOVE);

const initialState = List([
  Map({
    id: 0,
    text: '리액트 공부하기',
    done: true
  }),
  Map({
    id: 1,
    text: '컴포넌트 스타일링 해보기',
    done: false
  })
]);

export default handleActions({
  [INSERT]: (state, action) => {
    // payload 안에 있는 id, text, done의 레퍼런스 생성
    const { id, text, done } = action.payload;

    return state.push(Map({
      id,
      text,
      done
    }));
  },
  [TOGGLE]: (state, action) => {
    // const index = action.payload
    const { payload: index } = action;
    // return state.setIn([index, 'done'], !state.getIn([0, index]));
    return state.updateIn([index, 'done'], done => !done);
  },
  [REMOVE]: (state, action) => {
    const { payload: index } = action;
    return state.delete(index);
  }
}, initialState);