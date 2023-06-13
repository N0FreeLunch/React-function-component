## 변수의 스코프
- 자바스크립트에서 변수의 스코프는 2가지가 있다.
- 스코프란? 스코프 안에서 변수가 선언 된 경우 스코프 밖에서는 스코프 안에서 사용한 변수가 더 이상 유효하지 않는 것을 의미한다.

### 스코프의 종류
- 함수 스코프
- 블록 스코프

### 함수 스코프란?
- 스코프의 범위가 함수의 블록이 되는 것을 의미한다.
```js
function () {
    // 여기가 함수 스코프이다.
}
```
- 중괄호로 함수 내부의 코드를 정의할 수 있는 공간에서 사용된 변수가 함수 스코프를 갖는다.
- `var`로 선언된 변수는 함수 스코프에 해당한다.

### 블록 스코프란?
- 스코프의 범위가 블록이 되는 것을 의미한다.
```js
if(true) {
    // 여기가 블록 스코프이다.
}
```
- 무엇이 되든 자바스크립트에서 중괄호로 감싸인 공간에서 사용된 변수가 블록 스코프를 갖는다.

### 함수 스코프의 예
```js
(function () {
    if (true) {
        var varVar = 123;
        let letVar = 456;
        console.log('varVar in if block', varVar);
        console.log('letVar in if block', letVar);
    }
    console.log('varVar out of if block', varVar);
    console.log('letVar out of if block ', letVar);
})();
```
- 브라우저의 콘솔창에 위의 코드를 써 보자.
- `in if block`에 해당하는 코드는 변수에 넣은 값이 잘 출력되는 것을 확인할 수 있다. 하지만 `out of if block`에 해당하는 코드는 `var`로 선언된 변수는 잘 출력이 되지만, `let`으로 선언된 변수는 에러가 발생한다.
- `var`로 변수가 선언된 경우에는 if 블록 내부에서 변수가 선언되어도 if 블록 밖에서 if문 내부에서 선언된 값을 가져올 수 있다. 이것은 `var`로 선언된 변수가 함수 스코프를 갖기 때문에 함수가 끝나기 전까지 변수가 유효하기 때문이다.
- 변수가 `let`으로 선언된 경우에는 if 블록 내부에 선언된 변수는 if 블록 밖에서 사라진다. 따라서 `Uncaught ReferenceError: letVar is not defined`라는 에러가 발생한다.
