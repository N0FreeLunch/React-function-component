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

```js
(function () {
  if (true) {
    var varVar = 123;
    let letVar = 456;
    console.log('varVar in if block', varVar);
    console.log('letVar in if block', letVar);
  }
  console.log('varVar out of if block', varVar);
})();
console.log('varVar out of function', varVar);
```
- 자바스크립트 코드에서 에러가 나면 코드의 실행이 멈추므로 `console.log('letVar out of if block ', letVar);` 부분을 지우고 함수 밖에 `console.log('varVar out of function');`라는 코드를 입력 해 보자. 그러면 추가된 코드까지 자바스크립트가 실행 될 것이다.
- 브라우저의 콘솔 창에 위 코드를 실행해 보자.
- 함수 안의 `var`로 선언된 변수는 잘 실행이 되지만, 함수 밖에서는 `Uncaught ReferenceError: varVar is not defined`라는 에러가 발생하면서 실행되지 않는다. 그 이유는 `var`는 함수 내부에서 선언되었기 때문에 선언된 스코프 밖인 함수 바깥에서는 사용할 수 없기 때문이다.

### 스코프별 변수 선언 키워드
- 함수 스코프 : `var`로 선언된 변수
- 블록 스코프 : `let`, `const`로 선언된 변수

### for 문의 예시
```js
(function () {
  for(var i=1; i<=5; i++) {
    let letVar = i;
    console.log('in for', letVar);
  }
  console.log('out of for', letVar);
})();
console.log('out of function', letVar);
```
- `in for 1` ... `in for 5`까지 출력이 된다.
- 하지만, `'out of for'` 부터는 실행이 되지 않는데 이는 `let`으로 선언된 변수가 `for`문의 블록 안에서 선언되었기 때문에 스코프의 범위가 `for` 문의 블록이기 때문이다. `for`문 밖에서는 `let`으로 선언된 변수의 유효범위가 끝났으므로 `console.log('out of for', letVar);` 코드는 실행될 수 없고, `Uncaught ReferenceError: letVar is not defined`라는 에러 메시지가 나타난다.

```js
(function () {
  for(var i=1; i<=5; i++) {
    var varVar = i;
    console.log('in for', varVar);
  }
  console.log('out of for', varVar);
})();
console.log('out of function', varVar);
```
- `in for 1` ... `in for 5`까지 출력이 되고, `out of for 5`도 출력이 된다. 하지만 `'out of function'` 부분은 출력되지 않고 에러가 발생한다.
- `var`로 선언된 변수의 유효 범위는 함수 내이다. 따라서 `for`문 안에서 `var`로 선언된 변수의 유효범위도 함수 블록이  끝날때까지 유효하기 때문에 함수 내부에서 변수를 출력하는 `console.log('out of for', varVar)` 코드는 실행된다. 하지만 함수 밖의 `console.log('out of function', varVar)` 코드에서 `varVar` 변수는 변수가 선언된 스코프 밖에 있으므로 존재하지 않는 변수라서 `Uncaught ReferenceError: varVar is not defined`라는 에러가 난다.

#### 새로 만들어지는 것과 덮어 씌워지는 것
- `let letVar = i;` 코드는 `for` 반복문이 반복 될 때 마다 이전의 `letVar`는 `for`문의 블록이 끝나면서 사라지기 때문에 새롭게 선언이 되는 변수인 것에 반해, `var varVar = i;`는 `for`문의 블록이 끝나더라도 살아있기 때문에 덮어씌운다.
```js
(function () {
  for(var i=1; i<=5; i++) {
    console.log('previous value', varVar);
    var varVar = i;
    console.log('in for', varVar);
  }
  console.log('out of for', varVar);
})();
```

```
revious value undefined
in for 1
previous value 1
in for 2
previous value 2
in for 3
previous value 3
in for 4
previous value 4
in for 5
out of for 5
```
- 실행 결과는 위와 같다. 처음에는 `varVar` 변수에는 아무것도 없기 때문에 `undefined`가 나왔다. `varVar` 변수에는 1이 세팅이 되었으므로 `in for 1`으로 변수의 값이 출력 되었다.
- 다음 반복이 이뤄지면 `varVar`의 값이 사라지지 않고 1이 세팅이 된 상태이기 때문에 `previous value 1`이 된다. `varVar` 변수가 2가 세팅이 되면서 `in for 2`으로 변수의 값이 출력이 된다.
- 마찬가지로 반복한다. 곧, `for` 문의 블록이 끝나도 `var`로 선언된 변수의 스코프는 함수 스코프이기 때문에 이전 블록이 끝날 때 사라지지 않고, 다음 반복이 이뤄질 때 전달 되는 것을 알 수 있다.