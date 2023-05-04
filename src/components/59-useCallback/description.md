UseMemoHook의 예제를 보면

```
<input value={number} onChange={onChange}/>
```
- 유저가 input 태그에 값을 입력할 때마다 onChange 함수를 호출한다.

```
const onChange = e => {
  setNumber(e.target.value);
}
```
- onChange는 setNumber를 통해 랜더링 요청을 한다.
- 랜더링 요청으로 인해 컴포넌트가 다시 호출 될 때
```
const onChange = e => {
  setNumber(e.target.value);
}

const onInsert = () => {
  const nextList = list.concat(parseInt(number));
  setList(nextList);
  setNumber('')
}
```
- 두 함수를 또 선언 해 주게 된다.
- 이 두 함수를 useCallback으로 감싸주면

```
const onChange = useCallback(e => {
  setNumber(e.target.value);
},[]);

const onInsert = useCallback(() => {
  const nextList = list.concat(parseInt(number));
  setList(nextList);
  setNumber('');
}, [number, list]);
```
- 랜더링이 될 때 함수 컴포넌트를 새로 호출한다.
- 랜더링하면서 이전의 함수와 이후의 함수 둘 다 남게 되고 메모리 상에 사용하지 않는 이전의 함수가 남아 있을 수 있다.
- 초기 랜더링을 하기 전에 선언 된 함수라면 초기 랜더링을 했을 때의 함수를 계속 사용하고 랜더링이 새로 되었을 때는 개로 만들지 않는다.
```
const onChange = useCallback(e => {
  setNumber(e.target.value);
},[]);
```
- 에서는 useCallback의 두번째 인자에 빈 배열 [] 이 들어갔는데, useEffect와 마찬가지로 갱신 랜더링을 할 때는 호출하지 않는다.
```
setNumber(e.target.value);
```
- 이 부분을 갱신 랜더링을 할 때는 호출하지 않는다.
- 갱신 랜더링을 할 땐 setNumber를 새로 만들어서 사용하지 않고 기존의 초기 랜더링 전에 만든 setNumber를 계속 사용하겠다는 의미이다.

```
const onInsert = useCallback(() => {
  const nextList = list.concat(parseInt(number));
  setList(nextList);
  setNumber('');
}, [number, list]);
```
- useCallback 두 번째 인자에는 배열로 state가 들어 있는데, number, list 이 state의 변경이 이뤄질 때
```
const nextList = list.concat(parseInt(number));
setList(nextList);
setNumber('');
```
- 랜더링 시 이 부분을 대체해서 사용하겠다는 의미이다.
- useEffect와 두 번째 배열의 방식에 따라 랜더링 되는 방식이 같다.
