- 랜더링에 관계 없이 데이터를 저장하는 로컬 변수를 사용하고 싶다고 하자.
```
const FunctionComponent = () => {
  let localVariable = 0;

  const click = () => {
    localVariable = localVariable + 1;
  }

  return (
    <>
      <button onClick={click}>click</button>
    </>
    )
}
```

- 이렇게 하면 click 버튼을 누를 때 마다 localVariable의 업데이트가 일어난다.
- 하지만 랜더링이 일어났을 떼 `let localVariable = 0;` 코드에 의해 초기화가 되어 버린다.
- 랜더링 이후에도 로컬 변수를 사용하고 싶을 때 useRef를 사용하여 컴포넌트 재호출이 일어나기 전에 할당된 값을 컴포넌트 재호출이 일어나고 나서의 변수에도 넘겨줘야 할 경우에 사용한다.

```
const FunctionComponent = () => {
  const localVariable = useRef();

  const click = () => {
    localVariable.current = localVariable.current + 1;
  }

  return (
    <>
      <button onClick={click}>click</button>
    </>
    )
}
```
- 이런식으로 변경한다.
