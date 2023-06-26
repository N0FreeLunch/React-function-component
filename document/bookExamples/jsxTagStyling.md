## JSX 내의 태그에 스타일 속성 부여하기
document/bookExamples/jsxTagStyling.md
```js
import StyledJSX from "./StyledJSX";
import WriteStyleDirectly from "./WriteStyleDirectly";

function Index() {
	return (
		<>
			<StyledJSX/>
			<WriteStyleDirectly/>
		</>
	);
};

export default Index;
```
- 먼저 위의 경로에 스타일을 로드하는 파일을 만들자.

### JSX 태그 스타일에 문자열 CSS 추가하기
- HTML과 자바스크립트의 기초를 학습했다면, HTML 태그에 스타일을 부여하기 위해서는 CSS 속성을 태그의 style 속성에 정의해 주면 된다.
- 그런데 JSX 안에서 태그를 정의할 때는 style 속성을 HTML 태그와 똑같이 정의하게 되면 에러가 발생한다.

src/components/07-styledJSX/TagStylingWithString.js
```js
function TagStylingWithString () {
  const name = 'React';
  const style = `
    background-color: 'black';
    color: 'aqua';
    font-size: '48px';
    font-weight: 'bold';
    padding: 16;
  `;
  return <div style={style}>{name}</div>
}

export default TagStylingWithString;
```
- 리액트의 JSX의 style 속성에는 문자열로 CSS를 넣는 것을 허용하지 않는다고 나오며 에러가 발생한다.
> Uncaught Error: The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.

### 리액트의 JSX에서 스타일을 추가하는 방법
- 리액트에서 JSX 내의 태그에 스타일을 부여하기 위해서는 오브젝트 방식으로 정의를 해 주어야 한다.
src/components/07-styledJSX/StyledJSX.js
```js
function StyledJSX () {
  const name = 'React';
  const style = {
    backgroundColor : 'black',
    color : 'aqua',
    fontSize : '48px',
    fontWeight : 'bold',
    padding : 16
  };
  return <div style={style}>{name}</div>
}

export default StyledJSX;
```
- JSX 내에 스타일을 정의할 때는 CSS 프로퍼티명을 케밥 케이스 표기법(예를 들어 background-color)와 같이 하이픈을 사용해서 표기한 것과 달리, JSX 내에서 정의할 때는 카멜케이스 표기법(예를 들어 backgroundColor)으로 사용한다. CSS의 프로퍼티명은 케밥 케이스 표기법으로 이뤄져 있지만 케밥 케이스 표기법을 JSX에서 사용할 때는 카멜 케이스 표기법으로 바꿔주면 대부분의(안 되는 케이스를 아직 못 봄) 프로퍼티를 사용할 수 있다.
- `padding : 16` 부분을 보면 CSS 속성으로는 '16px'으로 써 주어야 하지만 JSX에서 단위를 쓰지 않는 경우 자동으로 px 단위가 붙는다.

### JSX 내에 직접적으로 스타일 추가하기
src/components/07-styledJSX/WriteStyleDirectly.js
```js
function WriteStyleDirectly () {
  const name = 'React';
  return <div style={{
    backgroundColor : 'black',
    color : 'aqua',
    fontSize : '48px',
    fontWeight : 'bold',
    padding : 16
  }}>{name}</div>
}

export default WriteStyleDirectly;
```
- JSX 내에 태그의 스타일 속성에 변수를 사용하지 않고 직접 스타일을 적는 경우도 있을 수 있다. 스타일의 프로퍼티가 많지 않고 단순한 경우 또는 태그에 스타일을 정의하는 것이 태그를 잘 드러낼 때 태그에 직접 스타일을 적는 방법을 사용할 수 있다.
- 태그에 스타일을 적을 때느 `style={오브젝트}` 형식이 되어야 하므로 `style={{key1: value1, key2: value2 ...}}` 형식으로 중괄호가 2개 들어간 형식이 된다.