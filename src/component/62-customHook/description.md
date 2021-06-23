## Custom hook
- 커스텀 훅이란 갱신 랜더링 이전의 데이터를 그 자체로 전달 받을 수는 없으며 기존에 만들어져 있는 훅을 변형하여 새로운 훅을 만드는 방식으로 사용하는 것이다.

### 이전의 데이터를 넘겨 받는 것
- useRef, useCallback, useMemo, useState, useReducer 등의 훅은 갱신 랜더링 이전의 데이터를 전달 받을 수 있다.
- 이전의 데이터를 전달받는 로직을 짜고 싶다면, 이들 훅을 이용해서 이전 데이터를 전달 받는 로직을 짤 수 있다.


### rendering trigger
- useState, useReducer은 setState, dispatch를 통해서 랜더링을 발동하는 효과를 가지고 있다.
- 커스텀 훅을 만들 때 랜더링을 하는 훅을 만들고 싶다면 커스텀 훅 안에는 useState, useReducer가 필요하다.
