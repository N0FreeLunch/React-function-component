## 컴포넌트를 로딩할 수 있는 화면 만들기
- 여러 컴포넌트를 불러오서 실행할 수 있는 화면을 만들 것이다. 리액트의 다양한 예제들은 컴포넌트 단위로 만들어지므로 컴포넌트 함수를 불러오는 태그가 있다면 여러 서버를 만들 필요 없이 하나의 리액트 서버만 있으면 된다.
```js
function App() {
  return (
    <div>
      <h3>current component number : 컴포넌트_번호</h3>
      <div>
        <button>prev</button>
        <button>next</button>
      </div>
      <br/><br/>
      <div>
        <div>input component number</div>
        <input type='number'></input>
        <button type='button'>move</button>
      </div>
      <br/><br/><br/>
      <div>
        로딩되는 리액트 컴포넌트
      </div>
    </div>
  );
}

export default App;
```
- `App.js`의 코드를 위와 같은 방식으로 바꾸자.
- 그럼 브라우저에서 다음과 같은 화면 구성을 확인할 수 있다.
```
current component number : 컴포넌트_번호
[prev] [next]

input component number
[             ] [move]

로딩되는 리액트 컴포넌트
```

### JSX의 태그
- JSX는 일반 자바스크립트와 다른 특징이 있는데, `<태그명>`으로 시작한 태그는 반드시 `</태그명>`으로 닫아 주어야 하며 `<br>` 태그와 같이 닫는 태그 없이 단일하게 사용하는 태그는 `<br></br>`으로 열고 닫는 형태로 사용하는 방법과 `<br/>`와 같이 슬레쉬를 뒤에 넣는 방식으로 단일 태그로 사용하는 것이 가능하다.

### JSX 내에서의 중괄호
- 앞선 예제에서 `컴포넌트_번호`에 해당하는 부분과 `로딩되는 리액트 컴포넌트` 부분을 다른 변수로 만들어 보자.
```js
const componentNumber = 10;
const loadComponent = (<h1>로딩되는 리액트 컴포넌트</h1>);

function App() {
  return (
    <div>
      <h3>current component number : {componentNumber}</h3>
      <div>
        <button>prev</button>
        <button>next</button>
      </div>
      <br/><br/>
      <div>
        <div>input component number</div>
        <input type='number'></input>
        <button type='button'>move</button>
      </div>
      <br/><br/><br/>
      <div>
        {loadComponent}
      </div>
    </div>
  );
}

export default App;
```
- `componentNumber` 변수에는 수 10을 넣었고, `loadComponent` 변수에는 JSX를 넣었다.
- JSX를 넣기 위해서는 괄호로 감싸야 값으로 취급되기 때문에 `(<h1>로딩되는 리액트 컴포넌트</h1>)`의 방식으로 넣어 주었다.
- `<h3>current component number : {componentNumber}</h3>` 부분의 코드를 보면 JSX 내에서 변수의 값을 불러오기 위해서 중괄호(`{}`) 문법을 사용한 것을 알 수 있다.

### JSX 내의 중괄호 안에는 값이 와야 한다.
- `{componentNumber}` 부분을 `{(() => 10)()}`으로 바꾸어 보자. 
- `(() => 10)()`는 `(function () {return 10;})()`과 거의 같은 표현이다. `() => 10`라는 함수 문법을 `(함수문법)`의 꼴로 괄호를 씌워서 값으로 바꾸었다. `값()`가 되었으므로 함수가 실행되어 10의 결과값을 반환한다. 따라서 중괄호 안에는 값이 들어가게 된다.
- `const componentNumber = 10;` 부분도 필요 없으니 삭제하자.
```js
const loadComponent = (<h1>로딩되는 리액트 컴포넌트</h1>);

function App() {
  return (
    <div>
      <h3>current component number : {(() => 10)()}</h3>
      <div>
        <button>prev</button>
        <button>next</button>
      </div>
      <br/><br/>
      <div>
        <div>input component number</div>
        <input type='number'></input>
        <button type='button'>move</button>
      </div>
      <br/><br/><br/>
      <div>
        {loadComponent}
      </div>
    </div>
  );
}

export default App;
```
- 위 코드가 실행되는 것을 보면 JSX 안의 중괄호 안에는 어떤 자바스크립트 코드가 와도 되며 최종적으로 중괄호 안에는 값에 해당하는 대상이 오면 된다는 것을 알 수 있다.