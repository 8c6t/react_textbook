const Redux = require('redux');

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const increment = (diff) => ({
  type: INCREMENT,
  diff: diff,
}); 

const decrement = (diff) => ({
  type: DECREMENT,
  diff: diff,
}); 

const initialState = {
  number: 1,
  foo: 'baz',
  baz: 'quz',
};

function counter(state = initialState, action) {
  switch(action.type) {
    case INCREMENT:
      return {
        ...state,
        number: state.number + action.diff
      };
    case DECREMENT:
      return {
        ...state,
        number: state.number - action.diff
      };
    default:
      return state;
  }
};

const { createStore } = Redux;

const store = createStore(counter);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
});

store.dispatch(increment(1));
store.dispatch(decrement(5));
store.dispatch(increment(10));
