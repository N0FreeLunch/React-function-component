```
useEffect(() => {
  // code A
  return () => {
    // code B
  }
});
```

### code A
- 컴포넌트가 랜더링 되기 전에 실행한다.
- 컴포넌트가 return하는 JSX의 변수에 컴포넌트가 랜더링 되기 전에 어떤 값을 받아와서 넣어서 랜더링 해야 할 때 사용한다.
- 예를 들어 통신을 통해 데이터를 가져와서 컴포넌트에 넣어주고 랜더링 해야 할 때 사용한다.
- 단, 이 경우, 렌더링 속도가 늦어질 수 있기 때문에 버벅임이 나타날 수 있다. 그렇다고 code B를 통해 랜더링 되고 난 이후에 통신을 통해 데이터를 가져오는 로직을 짤 경우, 결국 화면에 표시하기 위해서는 다시 스테이터스를 업데이트 해야한다. 이 때문에 랜더링이 다시 일어나게 되고 랜더링이 다시 일어나므로 useEffect가 또 실행되고 code B가 다시 실행되면서 무한 루프가 된다.
- 두 번째 인자에 빈 배열 []을 넣으면, 컴포넌트가 최초 마운트 될 때만 실행 되며, 업데이트가 되어 갱신될 때는 실행되지 않는다.


### code B
- 갱신 랜더링이 이뤄지기 전에 실행되거나 컴포넌트가 unmount 되기 전에 실행한다.
- 두 번째 인자에 빈 배열 []을 넣으면, 컴포넌트가 unmount 되기 전에 실행하며 그렇지 않을 때는 갱신 랜더링이 이뤄지기 전에 실행한다.


### 클래스 컴포넌트 라이프사이클 메서드와 비교
#### componentDidMount
- 초기 랜더링이 일어나고 나서 실행되는 것이 componentDidMount
- 두 번째 인자에 빈 배열 []을 넣었을 경우
```
useEffect(() => {
  // code A
  return () => {
    // code B
  }
}, []);
```
- code A 부분에 해당

#### componentDidUpdate
- 갱신 랜더링이 이뤄진 후에 실행되는 것이 componentDidUpdate
- 두 번째 인자가 없을 때
```
useEffect(() => {
  // code A
  return () => {
    // code B
  }
});
```
- code A 부분에 해당
- useEffect를 사용할 때는 위 코드가 componentDidMount 과정도 포함하고 있다.


#### componentWillUnmount
- 컴포넌트가 unmount 될 때 함께 실행되는 것이 componentWillUnmount
- 두 번째 인자에 빈 배열 []을 넣었을 때
```
useEffect(() => {
  // code A
  return () => {
    // code B
  }
}, []);
```
- code B 부분에 해당


#### shouldComponentUpdate
- 컴포넌트가 갱신되고 랜더링이 이뤄지기 전에 실행되는 것이 shouldComponentUpdate
- 두 번째 인자가 없을 때
```
useEffect(() => {
  // code A
  return () => {
    // code B
  }
});
```
- code B 부분에 해당
- useEffect를 사용할 때는 위 코드가 shouldComponentUpdate 과정도 포함하고 있다.
- 또는 두 번째 인자가 존재하고 빈 배열이 아닐 때
```
useEffect(() => {
  // code A
  return () => {
    // code B
  }
},[name]);
```
- shouldComponentUpdate 안에 특정 state에 대한 조건문을 작성하는 것과 동일한 효과를 만들어 낸다.


### constructor
- 참고로 constructor에 해당하는 부분은 함수 컴포넌트 내부에 적는 코드로 대체된다. 아래의 constructor code 부분
```
const FunctionComponent = () => {
  // constructor code
  return (
    <>
    </>
  )
}
export default FunctionComponent;
```
