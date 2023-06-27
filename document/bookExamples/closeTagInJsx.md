## JSX에서 태그 닫기

### 예제 코드
src/components/09-closeTag/Index.js
```js
import CloseTag from "./CloseTag";

function Index() {
  return <CloseTag/>;
}

export default Index;
```

src/components/09-closeTag/CloseTag.js
```js
function CloseTag () {
  return (
    <>
			<input></input>
			<br></br>
			<br/>
			<input/>
    </>
  );
}

export default CloseTag;
```
- HTML에서 input 태그는 닫는 태그 없이 `<input type="text" id="name" name="name" required minlength="4" maxlength="8" size="10">`와 같이 사용한다. 물론 태그의 마지막에 슬레시를 붙여서 `<input type="text" name="fruit" dirname="fruit.dir" value="cherry" />`와 같은 방식으로도 사용한다.
- 리액트에서는 모든 태그는 반드시 닫는 태그 또는 태그를 닫는 기호를 사용해 주어야 한다. `<input>`으로 태그를 열었으면 `</input>`으로 태그를 닫고, 닫는 태그 없이 사용할 때는 `<input/>`와 같이 태그의 마지막에 슬레시(/)를 붙여 준다. 닫는 태그 또는 닫는 기호를 사용하지 않고 `<input>`와 같이 사용할 수는 없다. `input` 태그 뿐만 아니라 모든 태그에 적용되는 원리이다.
-  `<input/>`와 같이 마지막에 슬레시를 붙여 주어 하나의 태그를 사용하는 방식을 self-closing 태그라고 한다.
- 닫는 태그는 슬레시가 태그명 앞에 위치하지만, self-closing 태그는 슬레시가 태그명 뒤에 위치한다.