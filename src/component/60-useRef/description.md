```
const inputEl = useRef(null);
```
- 처음에 inputEl에는 돔 타겟이 지정되어 있지 않은 상태이다.

```
<input value={number} onChange={onChange} ref={inputEl} />
```
- JSX에서 `ref={inputEl}`으로 useRef으로 만든 변수를 지정하면 다음 랜더링이 일어날 때, 함수 컴포넌트를 실행을 하면서

```
const inputEl = useRef(null);
```
- inputEl에는 초기 랜더링시의 null이 들어가는 것이 아니라, 대상 돔이 이전 랜더링에서 데이터가 넘어와서 넣어진다.
- 그래서 초기 랜더링시에는 focus가 되어 있지 않은 상태이다.
- 어트리뷰트를 보면
```
ref={inputEl}
```
- ref라는 attribute에 inputEl 변수가 할당이 되는 형태이지만 리액트 내부적으로는 갱신 주기의 함수 컴포넌트의 useRef에는 현재의 태그를 담는다라는 의미를 가지고 있다.
- 실행 초기에 focus를 담기 위해서는 처음 랜더링을 하고 다시 랜더링을 하면서 useRef에 지정된 태그의 엘리먼트를 담는 과정이 필요하다.
