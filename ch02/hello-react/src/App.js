import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const text = '자바스크립트 표현식 사용';
    const condition = true;
    const style = {
      backgroundColor: 'gray',
      border: '1px solid black',
      height: Math.round(Math.random() * 300) + 50,
      width: Math.round(Math.random() * 300) + 50,
      WebkitTransition: 'all',
      MozTransition: 'all',
      msTransition: 'all'
    };
    return (
      <div className='my-div'>
        {/* 요소 밖에서는 이렇게 작성 */}
        <h1>리액트 안녕</h1>
        <h2>{text}</h2>
        { condition && '보여주세요' }
        <div style={style}
          // self-closed 태그에서만 작동하는 주석
          // 마지막 />가 꼭 새 줄에 있어야 함.
          /* 블럭 주석도 사용 가능 */
        />
        // 이곳에 쓰는 주석은 렌더링 됨
        /* 주석 사용 불가 */        
      </div>
    );
  }
}

export default App;
