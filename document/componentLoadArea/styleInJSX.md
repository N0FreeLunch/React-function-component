## 스타일 추가하기
```js
const loadComponent = (<h1>로딩되는 리액트 컴포넌트</h1>);

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
      <h3 style={style.numberDisplay}>current compoenent number : {(() => 10)()}</h3>
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
        {loadComponent}
      </div>
    </div>
  );
}

export default App;
```

### JSX에 변수 넣기
- JSX 안에 자바스크립트 코드를 넣을 수 있다. 자바스크립트 코드를 넣기 위해서는 중괄호 (`{}`) 문법을 사용해야 하며 중괄호 안에는 자바스크립트의 값에 해당하는 대상이 와야 한다.
- 자바스크립트에서 중괄호 (`{}`) 안에 값을 넣는 문법은 없다. JSX 라는 리액트의 태그 문법을 사용할 때만 `{}` 안에 값을 넣을 수 있다. 자바스크립트에서 유사한 구문으로는 백틱(``` ` ```)을 사용하여 ``` `문자열${변수}문자열` ``` 안에 방식으로 `${}`을 사용하는 방식이 있다.
- 자바스크립트에서 값으로 취급되는 것은 불리언(`true`, `false`), 수, 문자열, `null`, `undefined`, 함수, 배열, 오브젝트 등이 있다. JSX 내에서는 이들 표현 뿐만 아니라 `(<h1>로딩되는 리액트 컴포넌트</h1>)`과 같은 JSX 값도 올 수 있다.

### 스타일 태그 세팅
#### 리터럴 오브젝트
```
{
  키1 : 값1,
  키2 : 값2,
}
```
- 위와 같은 방식으로 만들어지는 오브젝트가 리터럴 오브젝트이다. 직접 코드를 입력 해 보자.
```js
const obj = {
  key1 : 'value1',
  key2 : 'value2',
};
```
```js
obj.key1;
```
- 브라우저 콘솔에서 위 코드를 입력하면 `'value1'`가 나온다.
```js
obj.key2;
```
- 브라우저 콘솔에서 위 코드를 입력하면 `'value2'`가 나온다.
- `key1`, `key2` 부분을 '프로퍼티(property)', '키(key)', '멤버(member)', '속성(attribute)' 등으로 부른다.
- 리터럴 오브젝트를 만들면 `오브젝트명.프로퍼티명` 꼴로 불러오면 각 프로퍼티에 할당된 값을 가져올 수 있다.

### JSX에서 스타일을 적는 방법
- JSX는 리액트 개발환경에서만 사용 가능하며 자바스크립트에서 지원하는 표준적인 문법은 아니다.

#### HTML에서의 태그 작성
- HTML에서는 다음과 같이 코드를 적을 것이다.
```html
<h3 style=`
  margin-left: '10px'
`>current compoenent number : 컴포넌트_번호</h3>
```

#### 자바스크립트에서 백틱 안에서 백틱 안에서 백틱을 사용하기
- 자바스크립트의 경우에는 태그를 문자열로 만들어서 다른 태그 안에 넣기 때문에 ``` ` ``` 백틱 안에 백틱을 사용한 문법을 사용하기 위해서 ```${``}```오 같은 방식으로 스타일을 작성한다.
```js
document.querySelector('body').innerHTML = `
<h3 style="${`
  margin-left: '10px';
`}">current compoenent number : 컴포넌트_번호</h3>
`;
```

#### 자바스크립트에서 백틱 안에서 변수에 담은 스타일 로딩
```js
const style = `
  margin-left: '10px';
`;
document.querySelector('body').innerHTML = `
<h3 style="${style}">current compoenent number : 컴포넌트_번호</h3>
`;
```

#### 자바스크립트 백틱 안에서 그냥 문자열로 스타일 정의
```js
document.querySelector('body').innerHTML = `
<h3 style="
  margin-left: '10px';
">current compoenent number : 컴포넌트_번호</h3>
`
```
- 위와 같은 스타일로 코드를 작성할 수 있다.

#### JSX에서 스타일 정의
- JSX에서 위의 자바스크립트 코드 방식으로 스타일을 정의할 수 없다. 왜냐하면 자바스크립트의 경우 태그를 문자열로 나타내지만 JSX의 경우에는 태그에 문자열을 사용하지 않는다. 따라서 서로 다른 방식이다.
- JSX에서 스타일을 넣기 위해서는 JSX안의 중괄호 `{}` 안에 리터럴 오브젝트 방식으로 넣어 주어야 한다.
- 예를 들어 `<h3 style={style.numberDisplay}>`의 `style.numberDispla` 부분은 `{marginLeft: '10px'}` 부분에 해당한다.
- 또한 JSX 안에서 스타일의 프로퍼티는 `margin-left`가 아니라 `marginLeft`로 하이픈(`-`)을 빼고 하이픈에 연결되는 왼쪽 문자를 대문자로 적어 주어야 한다.

## 참고 : 컴포넌트 함수 외부에 적는 것
### 함수 스코프
- `style`에 관한 것을 `function App() {}`의 스코프가 아니라 스코프 바깥에 정의해 주었다.
```js
function App() {
  // 여기가 스코프의 범위 '{' 부터 시작해서 '}'까지
}
```
- 스코프는 자바스크립트 문법에서 `{}` 중괄호로 감싸져있는 범위를 말한다.

### 함수의 실행
```js
function sampleFunction() {
  console.log('sample function');
}

sampleFunction();
sampleFunction();
sampleFunction();
```
- 한번 정의한 함수는 몇 번이고 실행이 될 수 있다. 위 코드에서는 한 번 정의한 함수 `sampleFunction`를 `sampleFunction()`의 방식으로 세 번 실행하였다.

### 컴포넌트의 실행
- 리액트의 컴포넌트는 함수이다. 따라서 한 번 정의된 컴포넌트는 여러번 다시 실행될 수 있다.
- 리액트는 `state`의 변경이 있을 때마다 컴포넌트의 `export`된 함수를 다시 실행한다. `export default App`은 `App` 함수가 스테이트 변경이 일어나면 다시 실행되는 함수임을 의미한다. (스테이트에 관한 내용은 후에 자세히 다루기 때문에 여기서는 일단 스킵한다.)
- 컴포넌트 함수가 다시 실행이 되면 브라우저에서 컴포넌트 함수의 반환되는 JSX 태그 부분만 새롭게 태그가 로딩되고 그려진다.
- 컴포넌트 함수는 `state`가 변경이 될 때 다시 실행이 되기 때문에 `state`의 변경된 값으로 새롭게 값을 만들어야 하는 경우라면 컴포넌트 함수 내부에 변수의 값을 정의해야 한다.

### 자바스크립트의 실행 방식
- 자바스크립트 파일은 전체 코드가 자바스크립트 엔진에 의해 읽히고 컴퓨터가 이해할 수 있는 방식으로 변경이된다. 자바스크립트 코드가 컴퓨터가 이해할 수 있는 방식으로 변경이 되면, 자바스크립트 엔진은 변경된 코드를 실행한다.
- 컴포넌트 함수는 `state` 변경에 따라 재실행이 되지만 컴포넌트 함수 바깥에 정의된 것들은 자바스크립트 파일이 엔진에 의해 실행이 될 때 값이 생성된다. 위 에제의 `const style` 부분이 자바스크립트 코드가 실행이 되면서 만들어진 것이고, 컴포넌트 함수가 로딩 될 때 다시 만들어질 필요가 없는 코드에 해당한다.

### 성능을 고려한 코드 배치
- 컴포넌트 함수 내부에 값을 정의하게 되면, 자바스크립트 파일의 코드를 한 번 읽을 때 만들어지면 되는 값이 컴포넌트 함수가 실행 될 때마다 만들어져야 하므로 성능상 손실이 생긴다.
- 물론 컴퓨터의 처리 속도가 굉장히 빠르기 때문에 리액트 정도의 코드에서는 이 성능 손실은 대부분 체감하지 못할 경우가 대부분이다. 
- 하지만, 이런 성능상의 이점을 고려할 줄 안다면 좀 더 복잡하고 대규모의 코드를 작성할 때 문제를 해결할 수 있는 관점 중 하나를 얻을 수 있게 된다.