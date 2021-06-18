```
function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT' :
      return {value : state.value + 1};
    case 'DECREMENT' :
      return {value : state.value - 1 };
    default :
      return state;
  }
}
```

### reducer 함수
- reducer 함수는 useReducer에서 받은 값을 어떻게 업데이트 할지 로직을 정해주는 함수이다.
- reducer는 state의 업데이트 할 결과값을 지정해 주고 이 결과 값 state를 return 하는 방식으로 함수를 짜 준다.
- 매개변수 state에 의해서 state는 지역변수가 된다.


### state의 리턴
- state는 지역변수이지만, 들어온 인자가 javascript object인 경우에는 object의 위치를 참조하는 값으로 받게 된다.
- 따라서 object일 경우에는 참조한 대상의 값을 변경하지 않고 복사하는 방식으로 업데이트 할 결과값을 만들어 줘야 한다.
```
{value : state.value + 1}
```
- state가 변경될 경우 객체를 하난 새로 만들어서 리턴했다.

### useReducer
```
useReducer(reducer, {value : 0})
```
- 첫 번째 인자는 state를 업데이트 하기 위한 로직이 들어간 함수 reducer
- 두 번째 인자는 state의 초기값을 설정
- 보통 여러 state를 업데이트 해야 하는 상황에서 사용한다.

### dispatch
- state를 업데이트 시키는 로직을 담은 함수로 랜더링을 하면서 state를 업데이트하는 역할을 한다.
-
