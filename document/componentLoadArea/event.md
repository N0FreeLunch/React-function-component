## 클릭 이벤트 추가하기
- `App` 함수 안에 다음과 같은 단순한 함수를 만들어 보자.

### 예제코드
```js
const loadComponent = (<h1>로딩되는 리액트 컴포넌트</h1>);

const prev = () => {
  alert('previous button');
}
const next = () => {
  alert('next button');
}
const move = () => {
  alert('move button');
}

const style = {
  numberDisplay : {
    marginLeft: '10px'
  },
  prevNextBtn : {
    marginLeft: '10px'
  },
  inputTitle : {
    marginLeft: '10px'
  },
  input : {
    width: '80px',
    marginRight: '20px',
    marginLeft: '10px'
  },
  componentLoadArea : {
    border: '1px solid black'
  }
};

function App() {
  return (
    <div>
      <h3 style={style.numberDisplay}>current component number : {(() => 10)()}</h3>
      <div style={style.prevNextBtn}>
        <button onClick={prev}>prev</button>
        <button onClick={next}>next</button>
      </div>
      <br/><br/>
      <div style={style.inputTitle}>
        <div>input component number</div>
        <input type='number' style={style.input}></input>
        <button type='button' onClick={move}>move</button>
      </div>
      <br/><br/><br/>
      <div style={style.componentLoadArea}>
        {loadComponent}
      </div>
    </div>
  );
}

export default App;
```
- prev 버튼을 누르면 `prev` 함수가 실행되고, next 버튼을 누르면 `next` 함수가 실행되고, move 버튼을 누르면 `move` 함수가 실행되도록 만들어 보자.

### 클릭 함수
```js
const prev = () => {
  alert('previous button');
}
const next = () => {
  alert('next button');
}
const move = () => {
  alert('move button');
}
```

## 이벤트
- 이벤트란 어느 시점인지 알지 못하는 시기에 사건이 발생하는 것을 의미한다.
- 유저가 브라우저에서 클릭을 할 때가 언제인지 프로그래머가 정확하게 알 수는 없다. 유저가 웹 화면을 보면서 필요할 때 버튼을 클릭할 것이다.
- 자바스크립트에서 이벤트란 일반적으로 태그에 어떤 사건이 일어날 때 코드를 실행하도록 하기위한 용도로 만들어진다. 태그에는 여러 종류의 이벤트에 따라 함수를 실행할 수 있는 기능을 제공하고 있다.
- 태그를 클릭 했을 때 함수 실행하기, 태그의 값을 변경했을 때 함수 실행하기, 태그에 값을 입력했을 때 함수 실행하기, 태그에 마우스를 올려 놓았을 때 함수 실행하기, 화면의 사이즈가 달라졌을 때 함수 실행하기, 웹 페이지 로딩이 되었을 때 함수 실행하기, 자바스크립트 오류가 발생했을 때 함수 실행하기 등 많은 기능을 제공한다.

## 태그에 이벤트 달기
- 정의한 위의 함수들을 실행하기 위해서 태그에 이벤트를 달아 주도록 하자.
- 태그를 클릭 했을 때 이벤트를 발생시키는 방법은 `onClick={함수명}`의 방식으로 적는 것이다. 브라우저에서 태그에 해당하는 버튼을 클릭하게 되면 '함수명'에 해당하는 함수가 실행된다.
```js
<button onClick={prev}>prev</button>
<button onClick={next}>next</button>
```
```js
<button type='button' onClick={move}>move</button>
```
- 브라우저 화면에서 prev 버튼을 누르면 `alert('previous button')`에 해당하는 코드가 실행되어 알람이 표시되고, next 버튼을 누르면 `alert('next button')`의 코드가 실행되어 알람이 표시되고, move 버튼을 누르면 `alert('move button')`에 해당하는 코드가 실행 된다.

## 자바스크립트 이벤트 객체
- 자바스크립트의 태그 이벤트는 실행하는 함수의 인자로 이벤트 객체를 전달한다.
- 클릭 함수의 코드를 다음과 같이 만들어 보자.
```js
const prev = (e) => {
  console.log(e);
  alert('previous button');
}
const next = (e) => {
  console.log(e);
  alert('next button');
}
const move = (e) => {
  console.log(e);
  alert('move button');
}
```
- 버튼을 클릭하면 브라우저의 콘솔 창에 다음과 같은 메시지가 뜬다.
```
SyntheticBaseEvent {_reactName: 'onClick', _targetInst: null, type: 'click', nativeEvent: PointerEvent, target: button, …}
altKey: false
bubbles: true
button: 0
buttons: 0
cancelable: true
clientX: 72
clientY: 68
ctrlKey: false
currentTarget: null
defaultPrevented: false
detail: 1
eventPhase: 3
getModifierState: ƒ modifierStateGetter(keyArg)
isDefaultPrevented: ƒ functionThatReturnsFalse()
isPropagationStopped: ƒ functionThatReturnsFalse()
isTrusted: true
metaKey: false
movementX: 0
movementY: 0
nativeEvent: 
PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
pageX: 72
pageY: 68
relatedTarget: null
screenX: 72
screenY: 172
shiftKey: false
target: button
timeStamp: 2993.2999999523163
type: "click"
view: Window {window: Window, self: Window, document: document, name: '', location: Location, …}
_reactName: "onClick"
_targetInst: null
[[Prototype]]: Object
```
- 태그의 정보 (target), 마우스의 좌표 (clientX, clientY, pageX, pageY, screenX, screenY 등) 등등 다양한 정보들이 포함되어 있는 것을 알 수 있다.
- 프로그래머는 이벤트가 발생했을 때 실행되는 함수 안으로 전달되는 이 정보를 이용해서 여러가지 효과들을 만들어낸다.
- 이에 관한 자세한 사항은 https://developer.mozilla.org/en-US/docs/Web/API/Event 문서를 참고하도록 하자.

## JSX 이벤트와 HTML 및 JS의 이벤트의 차이
### JSX의 경우
```js
<button onClick={prev}>prev</button>
<button onClick={next}>next</button>
```
- `onClick` 카멜케이스를 사용한 표기를 하였다.
- 카멜케이스란? (wikipedia에서 인용)
  > 카멜 표기법 또는 낙타 표기법은 프로그래밍에서 파일, 변수, 함수 등 대상의 이름을 띄어쓰기 없이 짓기 위하여 따르는 관례인 네이밍컨벤션의 하나다. 단어 전체적으로 소문자를 사용하지만, 맨 첫 글자를 제외한 각 합성어의 첫 글자만 대문자로 표기한다.

### HTML 경우
```html
<button onclick={prev}>prev</button>
<button onclick={next}>next</button>
```
- 태그에 이벤트를 추가하는 속성이 모두 소문자인 `onclick`으로 되어 있다.

### JS의 경우
```js
const prevTag = [...document.querySelectorAll("button")].find(e => e.innerText === 'prev');
const nextTag = [...document.querySelectorAll("button")].find(e => e.innerText === 'next');
prevTag.onclick = prev;
nextTag.onclick = prev;
```
- 태그가 자바스크립트 객체로 선택되는 경우에는 자바스크립트 객체 `prevTag`, `nextTag`에 소문자의 `onclick` 이벤트를 추가해야할 필요가 있다.
- `prevTag`, `nextTag` 변수를 만든 복잡한 로직에 대한 설명은 생략한다. 단순히 `onclick`에 대한 설명을 하기 위해 추가한 것일 뿐이다.