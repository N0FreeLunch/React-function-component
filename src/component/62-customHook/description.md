## Custom hook
- hook이란 의미가 컴포넌트에 뭔가를 건다는 것이다.
- useState는 상태를 컴포넌트에 건다는 것이고 useEffect는 효과를 컴포넌트에 건다는 의미
- hook을 컴포넌트에 걸게 되면, 랜더링을 위해 컴포넌트 함수가 호출되면서 내부의 hook 코드를 실행한다.

### rendering trigger
- useState, useReducer은 setState, dispatch를 통해서 랜더링을 발동하는 효과를 가지고 있다.
- 커스텀 훅을 만들 때 랜더링을 하는 훅을 만들고 싶다면 커스텀 훅 안에는 useState, useReducer가 필요하다.

###
