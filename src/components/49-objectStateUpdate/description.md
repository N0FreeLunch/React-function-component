# state 값 사용하기

```
const [names, setNames] = useState([
  {id:1,text:'snowman'},
  {id:2,text:'ice'},
  {id:3,text:'snow'},
  {id:4,text:'wind'},
]);
```
```
array.concat(추가할 대상)
```
으로 새로운 배열을 만든다.

- 리액트에서 state의 값을 변경할 때는 절대 names을 참조하여 값을 바꾸지 않는다.
- 항상 set함수를 사용하여 업데이트를 한다.
- 이것은 개발자가 리액트 스테이트 변경을 통제하기 위한 것이다.
- 이를 불변성 유지라고 하는데 불변성 유지를 통해 컴포넌트 최적화를 할 수 있다.

기존의 names에 값을 더해야 하는데
```
[
  {id:1,text:'snowman'},
  {id:2,text:'ice'},
  {id:3,text:'snow'},
  {id:4,text:'wind'},
]
```

names 그대로 사용하게 되면 names의 값을 업데이트 하게 된다.


예를 들어
```
names.push({
  id : nextId,
  text : inputText
})
```
가 되는 경우 names를 업데이트 하지 않아야 하는데 names를 업데이트 한다.


따라서 names를 건들지 않고 추가된 값을 가진 새로운 배열을 만들 수 있는 concat을 사용한다.
```
names.concat({
  id : nextId,
  text : inputText
})
```
