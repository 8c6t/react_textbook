const { Map, List, fromJS } = require('immutable');
const list = List([0,1,2,3,4]);

const list2 = List([
  Map({ value: 1 }),
  Map({ value: 2 })
]);

const list3 = fromJS([
  { value: 1 },
  { value: 2 }
]);


// 값 읽어오기
const get = list.get(0);
const getin = list2.getIn([0, 'value']);

console.log(get);
console.log(getin);


// 아이템 수정
const newList = list.set(0, Map({ value: 10 }));
console.log(newList.toJS());

const newList2 = list2.setIn([0, 'value'], 10);
console.log(newList2.toJS());

const newList3 = list2.update(0, item => item.set('value', item.get('value') * 5));
console.log(newList3.toJS());


// 아이템 추가
const newList4 = list2.push(Map({ value: 3 }));
// 맨 앞에 아이템 추가
const newList5 = list2.unshift(Map({ value: 0 }));

console.log(newList4.toJS());
console.log(newList5.toJS());

// 아이템 제거
const newList6 = list.delete(1);
console.log(newList6.toJS());


// 마지막 아이템 제거
const newList7 = list.pop();
console.log(newList7.toJS());

// 리스트 크기 가져오기
console.log(list.size);
console.log(list.isEmpty());