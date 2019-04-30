import { handleActions, createAction } from 'redux-actions';
import { pender } from 'redux-pender';
import axios from 'axios';

function getPostAPI(postId) {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
}

const GET_POST = 'GET_POST'

/* 
  redux-pender의 액션 구조는 Flux standard action
  (https://github.com/acdlite/flux-standard-action)을 따르기 때문에
  createAction으로 액션을 만들 수 있음.
  두번째 파라미터는 Promise를 반환하는 함수여야 함
*/
export const getPost = createAction(GET_POST, getPostAPI);

const initialState = {
  // 요청 상태, 오류 여부를 penderReducer가 담당하므로 직접 관리할 필요가 없음
  data: {
    title: '',
    body: ''
  }
}

export default handleActions({
  ...pender({
    /* 
      type이 주어지면 이 type에 접미사를 붙인 액션 핸들러들이 담긴 객체를 만듬

      요청 중일 때와 실패 했을 때 추가로 해야 할 작업이 있다면
      onPending: (state, action) => state,
      onFailure: (state, action) => state
      를 추가
    */
    type: GET_POST,
    // 성공 시 해야 할 작업이 따로 없다면 이 함수도 생략해도 됨
    onSuccess: (state, action) => {
      const { title, body } = action.payload.data;
      return {
        data: {
          title, 
          body
        }
      }
    },
    onCancel: (state, action) => {
      return {
        data: {
          title: '취소됨',
          body: '취소됨'
        }
      }
    }
  })
}, initialState);