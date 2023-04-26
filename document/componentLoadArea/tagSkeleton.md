## 컴포넌트를 로딩할 수 있는 화면 만들기
```js
function App() {
  return (
    <div>
      <h3>current compoenent number : 컴포넌트_번호</h3>
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
current compoenent number : 컴포넌트_번호
[prev] [next]

input component number
[             ] [move]

로딩되는 리액트 컴포넌트
```

#### JSX의 특징
- JSX는 일반 자바스크립트와 다른 특징이 있는데, `<태그명>`으로 시작한 태그는 반드시 `</태그명>`으로 닫아 주어야 하며 `<br>` 태그와 같이 닫는 태그가 아닌 경우에는 `<br></br>`으로 열고 닫는 형태로 사용하는 방법과 `<br/>`와 같이 슬레쉬를 뒤에 넣는 방식으로 단일 태그로 사용하는 것이 가능하다.

## 스타일 추가하기
```js
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
      <h3 style={style.numberDisplay}>current compoenent number : 컴포넌트_번호</h3>
      <div style={style.prevNextBtn}>
        <button>prev</button>
        <button>next</button>
      </div>
      <br></br>
      <br></br>
      <div style={style.inputTitle}>
        <div>input component number</div>
        <input type='number' style={style.input}></input>
        <button type='button'>move</button>
      </div>
      <br/><br/><br/>
      <div style={style.componentLoadArea}>
        로딩되는 리액트 컴포넌트
      </div>
    </div>
  );
}

export default App;
```

#### JSX에 변수 넣기
- JSX 안에 자바스크립트 변수를 넣기 위해서는 중괄호 (`{}`) 문법을 사용한다.
- 자바스크립트에서  중괄호 (`{}`) 안에 값을 넣는 문법은 없다. JSX 라는 리액트의 태그 문법을 사용할 때만 `{}` 안에 값을 넣을 수 있다.
- JSX 안의 `{}`에는 자바스크립트의 '값'에 해당하는 대상만 올 수 있다. 아무 코드나 넣을 수 있는 것은 아니다. 또는 `{}` 안의 자바스크립트 코드의 최종 연산 결과가 값이 되는 대상이 올 수 있다.
- 자바스크립트에서 값으로 취급되는 것은 불리언(`true`, `false`), 수, 문자열, `null`, `undefined`, 함수, 배열, 오브젝트 등이 있다.

#### 스타일 태그 세팅
- JSX에서 태그의 스타일은 리터럴 오브젝트 방식으로 넣어줄 수 있다.
- 리터럴 오브젝트는 
```js
{
  key1 : value1,
  key2 : value2,
}
```
- 위와 같은 방식으로 만들어지는 오브젝트이다.
- 예를 들어 `<h3 style={style.numberDisplay}>`의 `style.numberDispla` 부분은 `{marginLeft: '10px'}` 부분에 해당한다.
- 만약 JSX가 아니라 순수한 자바스크립트라면 리터럴 오브젝트가 아니라 문자열 방식으로 사용한다.
```js
<h3 style=`
  marginLeft: '10px'
`>current compoenent number : 컴포넌트_번호</h3>
```
- 위 코드를 보면 style 태그 부분이 리터럴 오브젝트가 아닌 문자열을 사용한 것을 알 수 있다.


## 참고 : 컴포넌트 함수 외부에 적는 것
- `style`에 관한 것을 `function App() {}`의 스코프가 아니라 스코프 바깥에 정의해 주었다.
- 리액트는 `state`의 변경이 있을 때마다 컴포넌트의 `export`된 함수를 다시 실행한다. `export default App`은 `App` 함수가 스테이트 변경에 따라서 새로 실행되는 함수임을 의미한다. (스테이트에 관한 내용은 후에 자세히 다루기 때문에 여기서는 일단 스킵한다.)
- 컴포넌트 함수가 다시 실행이 되면 브라우저에서 해당 태그 부분만 새롭게 태그가 로딩되고 그려진다.
- 컴포넌트 함수는 `state`가 변경이 될 때 다시 실행이 되기 때문에 `state`의 변경된 값으로 새롭게 값을 만들어야 하는 경우라면 컴포넌트 함수 내부에 변수의 값을 정의해야 한다.
- 자바스크립트 파일은 전체 코드가 자바스크립트 엔진에 의해 읽히고 컴퓨터가 이해할 수 있는 방식으로 변경이된다. 자바스크립트 코드가 컴퓨터가 이해할 수 있는 방식으로 변경이 되면, 자바스크립트 엔진은 변경된 코드를 실행한다.
- 컴포넌트 함수는 `state` 변경에 따라 재실행이 되지만 컴포넌트 함수 바깥에 정의된 것들은 자바스크립트 파일이 엔진에 의해 실행이 될 때 값이 생성된다. 위 에제의 `const style` 부분이 자바스크립트 코드가 실행이 되면서 만들어진 것이고, 컴포넌트 함수가 로딩 될 때 다시 만들어질 필요가 없는 코드에 해당한다.
- 컴포넌트 함수 내부에 값을 정의하게 되면, 자바스크립트 파일의 코드를 한 번 읽을 때 만들어지면 되는 값이 컴포넌트 함수가 실행 될 때마다 만들어져야 하므로 성능상 손실이 생긴다. 물론 이 성능 손실은 대부분 체감하지 못할 정도이다. 하지만, 이런 성능상의 이점을 고려할 줄 안다면 좀 더 복잡하고 대규모의 코드를 작성할 때 문제를 해결할 수 있는 관점 중 하나를 얻을 수 있게 된다.