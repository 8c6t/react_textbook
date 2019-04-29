const { Map, fromJS } = require('immutable');

const data = Map({
  a: 1,
  b: 2,
  c: Map({
    d: 3,
    e: 4,
    f: 5,
  })
});

console.dir(data);
console.log('------------------------------');


// fromJS
const data2 = fromJS({
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: 4,
    f: 5,
  }
});

console.dir(data2);
console.log('------------------------------');


// 자바스크립트 객체로 변환
const deserialized = data.toJS();
console.log('[자바스크립트 객체로 변환]');
console.dir(deserialized);
console.log('------------------------------');


// 특정 키 값 불러오기
const get = data.get('a');
console.log(`[특정 키 값 불러오기]: ${get}`);
console.log('------------------------------');


// 깊숙이 위치하는 값 불러오기
const getIn = data.getIn(['c', 'd']);
console.log(`[깊숙이 위치하는 값 불러오기]: ${getIn}`);
console.log('------------------------------');


// 값 설정
const newData = data.set('a', 4);
console.log("[값 설정]");
console.dir(newData.toJS());
console.log(newData === data);
console.log('------------------------------');


// 깊숙이 위치하는 값 수정하기
const newData2 = data.setIn(['c', 'd'], 10);
console.log("[깊숙이 위치하는 값 수정하기]");
console.dir(newData2.toJS());
console.log('------------------------------');


// 여러 값 동시에 설정
const newData3 = data.mergeIn(['c'], {d: 10, e: 10});
console.log("[여러 값 동시에 설정: mergeIn()]");
console.dir(newData3.toJS());

console.log("[여러 값 동시에 설정: setIn() 메소드 체이닝]");
const newData4 = data.setIn(['c', 'd'], 10).setIn(['c', 'e'], 10);
console.dir(newData4.toJS());


console.log("[최상위에서 merge 작업시]");
const newData5 = data.merge({ a: 10, b: 10 });
console.dir(newData5.toJS());
console.log('------------------------------');
