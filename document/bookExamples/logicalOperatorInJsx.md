## 로직 연산자
- 삼항 연산자가 조건문의 참 거짓에 따라 서로 다른 결과 값을 반환하는 것과 달리, AND 논리 연산자는 참일 경우에만 값을 반환하는 로직을 가지고 있다.

### 불리언
- 불리언 타입이란? 불리언 타입이란 `true`, `false`의 두 가지 값을 가진다. 조건문은 불리언 타입을 반환하며 참이면 `true` 거짓이면 `false`를 실행한다.
- 불리언 타입은 조건문에서 참, 거짓을 판별하는데 쓰인다. 삼항 연산자의 문법 `조건문 ? 참일_때_반환할_값 : 거짓일_때_반환할_값`에서의 조건문, 또는 if문에서의 `if(조건문) {}`에서 조건문으로 사용된다.

### 자동 형변환
- 자바스크립트에서 조건문은 불리언 타입의 값을 받지만 조건문 안의 자바스크립트 코드가 `true`, `false`를 반환하지 않는 경우도 있는데, 자바스크립트는 형변환 언어이다. 예를 들어 수의 경우에는 `0`은 `false`, `0`이 아닌 수는 `true`로 형변환이 되며, 문자열의 경우에는 빈 문자열 `''`은 `false`, 비지 않은 문자열은 `true`로 형변환이 된다.

### 명제
- A : 1 + 1 은 2이다.
- B : 8 / 2 는 4이다.
- C : 3 * 3 은 8이다.
- 위의 A, B, C 문장은 참 거짓을 판별할 수 있는 문장이다. 참 거짓을 판단할 수 있는 문장을 '명제'라고 부른다.
- A 이고 B 이면 이 문장은 참일까? A 문장도 참이고 B 문장도 참이기 때문에 A and B 문장도 참이된다.
- A 이고 C 이면 이 문장은 참일까? A 문장이 참인 것에 반해 C 문장은 참이 아니기 때문에 A and C 문장은 거짓이 된다.
- A 또는 B 이면 이 문장은 참일까? A 문장도 참이고 B 문장도 참이기 때문에 A and B 문장도 참이된다.
- A 또는 C 이면 이 문장은 참일까? A 문장은 참이지만 C 문장은 참이아니다. 하지만 '또는'으로 연결되어 있기 때문에 두 문장 중 하나가 참이면 참이된다. 따라서 A or C는 참이 된다.
- 위의 A, B, C와 같이 참 거짓을 명확하게 구분할 수 있는 하나의 진술이라는 것이란 것을 '단일 명제'라고 부른다.
- 명제는 '또는' 이나 '이고'를 붙여서 연결할 수 있으며, 이렇게 연결된 문장 또한 참, 거짓을 구분할 수 있기 때문에 명제에 해당하고 '합성 명제'라고 부른다.
- 프로그래밍 언어에서도 참, 거짓을 판별할 수 있는 코드가 있다. `1 + 1 === 2`, `8 / 2 === 4`, `3 * 3 === 8` 모두 `true` 또는 `false`를 반환하기 때문에 명제에 해당한다.
- 명제는 참, 거짓을 판단할 수 있기 때문에 프로그래밍 언어에서는 보통 '조건문'이라고 불린다.

### 논리 연산자
- 명제와 명제를 잇는 '또는(or)'과 '이고(and)'에 해당하는 문법을 자바스크립트에서는 `&&` `||`으로 표현한다. 이를 통해서 합성 명제를 만들 수 있다.

### 명제를 자바스크립트로 만들어 보기
```js
(() => {
	const A = 1 + 1 === 2;
	const B = 2 + 2 === 4;
	const C = 3 * 3 === 8;
	console.log(A);
	console.log(B);
	console.log(C);
})();
```

#### 합성 명제 만들기
```js
(() => {
	const A = 1 + 1 === 2;
	const B = 2 + 2 === 4;
	const C = 3 * 3 === 8;
	const AandB = A && B;
	const AandC = B && C;
	const AorB = A || B;
	const AorC = A || C;
	console.log(AandB);
	console.log(AandC);
	console.log(AorB);
	console.log(AorC);
})();
```

### 자바스크립트의 명제
- 프로그래밍 언어에서 명제라는 것은 하나의 식이 불리언 타입의 값인 true　또는 false를 반환하면 된다.
- 자바스크립트와 같은 자동 형변환이 되는 언어의 경우에는 모든 값이 불리언 값으로 형변환이 될 수 있으므로 값을 반환하는 모든 것이 명제가 될 수 있다.
- 자바스크립트의 모든 값이 불리언 타입으로 형변환이 된다는 것은, 참/거짓이 나뉘는 것이기 때문에 논리학에서 볼 때는 명제라고 할 수 없지만, 프로그래밍 언어에서는 명제로 다룰 수 있는 것이다.

### AND 연산자
- AND로 연결된 함성 명제는 모두 참이어야 전제 진술이 참이 되며, 하나라도 거짓이면 전체 진술이 거짓이 되기 때문에, 프로그래밍 언어에서는 거짓을 만났을 때 합성 명제의 나머지 부분을 실행하지 않고 거짓을 반환한다.
```js
(() => {
	const A = () => {
		console.log('run A');
		return 1 + 1 === 2;
	};
	const B = () => {
		console.log('run B');
		return 2 + 2 === 4;
	}
	const C = () => {
		console.log('run C');
		return 3 * 3 === 8;
	}

	console.log(A() && C() && B());
})();
```
- 명제는 위와 같이 함수로 만들 수도 있다. 함수로 만든 이유는 각각의 명제가 실행이 되는지 확인하기 위해서이다.
- 위의 코드는 `run A` `run C` `false` `undefined`의 값을 출력한다. `A()` 함수가 실행 되어서 `run A`가 찍히고, `C()` 함수가 실행 되어서 `'run C'`가 찍히고, `A() && C() && B()`가 실행되면서 `false`가 찍히고 전체를 감싸고 있는 즉시 실행함수가 `return`이 없으므로 `undefined`를 반환한다.
- 그런데 `A() && C() && B()`가 실행이 될 때 `'run B'`가 찍히지 않았다. 그 이유는 `A() && C()`까지만 실행이 되고 ` && B()`가 실행되지 않았기 때문이다. 자바스크립트에서 AND 연산은 거짓을 만나면 뒤에 합성 명제가 남아 있더라도 어차피 명제가 거짓이 되기 때문에 연산의 효율성을 위해서 거짓이 된 부분에서 실행이 끝난다.

### OR 연산자
- OR로 연결된 합성 명제는 하나라도 참이면 전체 진술이 참이되며, 전체 진술을 이루는 모든 명제가 거짓이면 거짓이 반환되기 때문에 참을 만나면 합성 명제의 나머지 부분을 실행하지 않고 참을 반환한다.
```js
(() => {
	const A = () => {
		console.log('run A');
		return 1 + 1 === 2;
	};
	const B = () => {
		console.log('run B');
		return 2 + 2 === 4;
	}
	const C = () => {
		console.log('run C');
		return 3 * 3 === 8;
	}

	console.log(C() || B() || A());
})();
```
- 위 명제를 만나면 `run C` `run B` `false` `undefined`가 출력이 된다. `C()`가 실행이 되어서 `'run C'`가 실행이 되고, `B()`가 실행이 되어서 `'run B'`가 실행이 되고, `C() && B() && A()`가 실행이 되면서 `false`가 찍히고 전체를 감싸고 있는 즉시 실행함수가 `return`이 없으므로 `undefined`를 반환한다.
- 그런데 `C() && B() && A()`가 실행이 될 때 `'run A'`가 찍히지 않았다. 그 이유는 `C() || B()`까지만 실행이 되고, `|| A()`가 실행이 되지 않았기 때문이다. OR 연산의 경우 각각의 단일 명제가 모두 거짓이 될 때 전체 명제가 거짓이 되므로 `C()`는 거짓이기 때문에 문제가 없지만 `B()`가 참이 되면서 남은 명제를 확인해도 전체 명제는 어차피 참이 되기 때문에 연산의 효율성을 위해서 참이 된 부분에서 실행이 끝난다.

### 자바스크립트 합성 명제의 특징
- 자바스크립트의 모든 값은 불리언 타입의 값으로 형변환이 된다. 수의 경우 0일 때는 `false`가 되고, 0이 아닐 때는 `true`가 된다. 문자열이 경우 `''` 빈 문자열인 경우에는 `false`가 되고, 빈 문자열이 아닐 때는 `true`가 된다.
- 논리학에서 합성 명제는 전체 문장의 참과 거짓만을 반환하는 것에 반해, 자바스크립트는 합성 명제를 판단하다가 실행이 끝난 부분의 값을 반환한다.
```js
console.log(1 && '이 부분은 반환되지 않는다' && '여기서 실행이 멈춘다.');
```
- `1`은 `true`로 형변환이 된다. AND 연산자로 연결되었기 때문에 전체 합성 명제의 참 거짓을 판단하기 위해서는 `false`에 해당하는 값이 나올 때까지 남은 함성 명제를 확인한다. `'이 부분은 반환되지 않는다'`도 `true`로 형변환이 된다. 따라서 다음 명제도 확인한다. `'여기서 실행이 멈춘다.'`도 `true`로 형변환이 된다. 전체 합성 명제를 확인을 하더라도 false가 나오지 않았으므로 `true`로 평가된다. 그런데 위 합성 명제는 논리학적인 관점에서 참인 문장으로 `true`를 반환해야 하지만 자바스크립트의 경우 `true`를 반환하지 않고 합성 명제가 실행이 된 부분의 값을 반환한다. 따라서 `true`를 반환하지 않고 `'여기서 실행이 멈춘다.'`라는 값을 반환한다. 그리고 이 값을 반환해도 `true`로 형변환이 되기 때문에 형변환된 관점에서 보면 참을 반환하는 것이긴 하다.
```js
console.log(1 && '이 부분은 반환되지 않는다' && 0 && '이 부분은 실행되지 않는다.');
```
- 위의 조건문이 반환하는 값은 무엇일까? AND 연산으로 이뤄진 전체 합성 명제가 참인지 확인하기 위해서는 하나라도 거짓이 나오면 안 되기 때문에 거짓이 나오는 명제가 있는지 확인한다. 따라서 참인 명제가 나오고 남은 명제가 있다면 뒤의 명제도 확인을 하며, 거짓인 명제가 나오면 전체 문장이 어차피 거짓이기 때문에 거짓을 반환하고 남은 명제를 확인하지 않고 실행을 끝낸다.
- `1`은 `true`에 해당하고 전체 문장의 참 거짓을 확인하기 위해서는 남은 명제를 확인해야 한다. AND 연산자로 연결되었으므로 다음 명제를 확인한다. `'이 부분은 반환되지 않는다'`는 `true`에 해당하고 전체 문장의 참 거짓을 확인하기 위해서는 남은 명제를 확인해야 한다. `0`은 `false`에 해당하고 이 부분으로 인해 전체 합성 명제는 `false`로 평가된다. 조건식의 전체 결과가 나왔으므로 나머지 부분을 더 이상 실행하지 않는다. 하지만 자바스크립트 이므로 `false`를 반환하지 않고 마지막으로 실행된 값을 반환하므로 console.log로 찍히는 값은 `0`이다.

#### 프로그래밍 언어의 용어로 기술하기
- 프로그래밍 언어에서는 논리학에서 사용하는 명제, 단일 명제, 합성 명제 등의 용어를 사용하지 않는다. 따라서 개발자들 간의 의사소통을 위해서는 프로그래밍 언어에서 사용하는 용어를 써 줘야 한다. 하지만 논리학의 용어 만큼 적절한 설명을 할 수 있는 용어가 없으며 그 대용으로 프로그래밍 언어에서는 조건식, 값, truely, falsy 등의 용어를 사용해서 설명한다.
- truely라는 것은 참이 될 수 있는 값을 의미한다. 자바스크립트의 값은 형변환에 의해서 `1`(0 이 아닌 수), `'문자열'`(빈 문자열이 아닌), `true`가 자바스크립트에서는 참으로 형변환이 된다. 이러한 값 유형을 통틀어 truely으로 부른다.
- falsy는 거짓이 될 수 있는 값을 의미한다. 자바스크립트이 값은 형변환에 의해서 `0`, '', `null`, `undefined`, `false`가 자바스크립트에서는 거짓으로 형변환이 된다. 이러한 값 유형을 통들어 falsy으로 부른다.
- 각 단어의 번역으로는 truely는 '참 값은 값', falsy는 '거짓 같은 값'으로 평가가 된다.
- 이번에는 OR 연산자를 예로 들어 보자.
```js
console.log(0 || '' || '이 부분의 값이 실행된다.' || '이 부분의 값은 실행되지 않는다.');
```
- OR 연산자로 연결된 조건식은 하나라도 truely인 값이 있으면 조건식이 truely로 평가되기 때문에 truely의 값이 나올 때 까지 OR 연산자 다음 값을 확인한다. 조건식의 첫 번째 값은 `0`으로 falsy이다. 따라서 OR 연산자로 이어진 다음 값을 확인한다. 두 번째 값은 `''`으로 falsy이다. 따라서 OR 연산자로 이어진 다음 값을 확인한다. `'이 부분이 실행된다.'`는 truely이다. 따라서 전체 조건식이 이 값으로 인해 `true`로 평가되므로 조건식의 실행이 이 값에서 멈춘다. `'이 부분의 값은 실행되지 않는다.'` 값은 실행되지 않는다.
```js
	console.log(undefined || null || '' || false);
```
- 첫 번째 값은 `undefined`으로 falsy이다. 두 번째 값은 `null`으로 falsy이다. 세 번째 값은 `''`으로 falsy이다. truely에 해당하는 값이 나오지 않았으므로 계속 OR 연산자로 연결된 다음 값을 확인한다. 네 번째 값은 `false`으로 falsy이다. 조건식 전체가 실행되었으나 모두 falsy이므로 조건식의 결과는 `false`로 평가된다. 조건식의 마지막으로 실행된 값이 `false`이므로 `false`를 반환한다.

### 요약
- 자바스크립트의 AND 연산자 또는 OR 연산자를 통해 연결될 때 조건식에서 연산이 멈춘 부분의 값이 반환된다.
- 전체 조건식이 `true`로 평가 될 때는 truely 값이 반환되며, 전체 조건식이 `false`로 평가되면 falsy 값이 반환된다.

## JSX 내에서의 논리 연산자
src/componentList.js
```js
// ...
import Component05 from './components/05-LogicalOperator/Index';
// ...

const componentList = {
    // ...
    5: <Component05/>,
    // ...
}
```

src/components/05-LogicalOperator/Index.js
```js
import React from 'react';
import AndOperator from './AndOperator';

function Index() {
	return (
		<div>
			<AndOperator/>
		</div>
	);
};

export default Index;
```

src/components/05-LogicalOperator/AndOperator.js
```js
function AndOperator() {
	const name = 'React';
	return (
		<div>
			{name === 'React' && <h1>조건문이 참입니다.</h1>}
			{name === 'Vue' && <h1>조건문이 거짓입니다.</h1>}
		</div>
	);
}

export default AndOperator;
```
- `name === 'React'` 부분은 조건문이 참이다. AND 연산으로 이어져 있으므로 조건식의 참/거짓을 판단하기 위해서는 falsy인 값이 나오는지 확인해야한다. 따라서 `<h1>조건문이 참입니다.</h1>` 부분을 실행하고 이 값이 조건식에서 가장 마지막에 실행된 값이므로 이 값을 반환한다.
- `name === 'Vue'` 부분은 조건문이 거짓이다. AND 연산으로 이어진 조건식의 경우 조건식의 참/저깃을 판단하기 위해서는 falsy인 값이 하나라도 나오면 falsy 이므로, falsy인 값이 나오는 부분에서 실행이 끝난다. `name === 'Vue'` 부분에서 이미 falsy인 값이 나왔으므로 뒤의 `<h1>조건문이 거짓입니다.</h1>` 부분은 실행되지 않는다. 반환된 값은 `name === 'Vue'`의 결과 이므로 false가 반환된다.
- 위의 설명은 원리를 설명하는 것이며, 간단하게 다음과 같이 이해하면 된다. `{ 조건문 && 태그 }` 구문에서 조건문이 참이면 태그를 JSX 내부에서 사용하고, 조건문이 거짓이면 태그를 사용하지 않는다.

#### JSX 내에서 true/false
- 위의 코드에서 `{name === 'Vue' && <h1>조건문이 거짓입니다.</h1>}`의 경우에는 `<h1>조건문이 거짓입니다.</h1>` 부분이 실행되지 않으며 조건문에 해당하는 부분인 `name === 'Vue'`의 결과인 `false`가 실행되고 반환된다.

src/components/05-LogicalOperator/Index.js
```js
import React from 'react';
import AndOperator from './AndOperator';
import TrueFalsInJsx from './TrueFalseInJsx';

function Index() {
	return (
		<div>
			<AndOperator/>
			<hr/>
			<TrueFalsInJsx/>
		</div>
	);
};

export default Index;
```

src/components/05-LogicalOperator/TrueFalseInJsx.js
```js
function TrueFalsInJsx() {
	return (
		<div>
			{false}
			<hr/>
			{true}
		</div>
	);
};

export default TrueFalsInJsx;
```
- JSX 내에서 `{false}` 또는 `{true}`를 사용하여 브라우저에 랜더링된 결과를 보면 `<div><hr></div>`으로 아무런 태그도 생성되지 않은 것을 볼 수 있다.
- `{ 조건문 && 태그 }` 구분에서 조건문이 `false`인 경우에는 JSX로 랜더링 되는 태그에는 아무것도 나오지 않는 것을 확인할 수 있다.

#### 삼항연산자로 표현해 보기
```js
{name === 'Vue' && <h1>조건문이 거짓입니다.</h1>}
```
```js
{name === 'Vue' ? <h1>조건문이 거짓입니다.</h1> : false}
```
- AND 연산자를 사용한 방식을 삼항연산자 방식으로 사용하면 위와 같다. 삼항연산자를 사용할 때 조건문이 거짓일 때 반환하는 부분을 `false`으로 했는데 `name === 'Vue'` 부분이 거짓이면 `name === 'Vue'`의 결과가 반환이 되고, 이 값이 `false`이므로 삼항연산자의 거짓일 때 반환하는 부분의 값을 `false`으로 하였다.

#### OR 연산자의 경우
src/components/05-LogicalOperator/Index.js
```js
import React from 'react';
import AndOperator from './AndOperator';
import TrueFalsInJsx from './TrueFalseInJsx';
import OrOperator from './OrOperator';

function Index() {
	return (
		<div>
			<AndOperator/>
			<hr/>
			<TrueFalsInJsx/>
			<hr/>
			<OrOperator/>
		</div>
	);
};

export default Index;
```

document/bookExamples/logicalOperatorInJsx.md
```js
function OrOperator() {
  const isEvenNumber = (num) => {
    return num%2 === 0;
  };
  
  return (
    <div>
        { isEvenNumber(5) || <h1>짝수가 아닙니다.</h1> }
    </div>
  );
}

export default OrOperator;
```
- OR 연산자에 의해서 뒤에 있는 JSX 태그가 실행되기 위해서는 `조건문 || 조건문이_거짓일_때_실행되는_값`에서 조건문이 거짓이어야 뒤의 `||` 뒤의 값이 반환된다.
- 일반적으로 `조건문 || 조건문이_거짓일_때_실행되는_값`의 방식 보다는 `조건문 && 조건문이_참일_때_실행되는_값` 형식으로 많이 쓰고 리액트를 배우는 입장에서도 두 번째 방식으로 배우기 때문에 OR 연산자를 쓴 표현에 사람들이 익숙하지 않고 원리를 이해하지 못하는 경우가 있기 때문에 AND 연산자로 표기하는 방식을 쓰는 편이 좋다.
- `{ isEvenNumber(5) || <h1>짝수가 아닙니다.</h1> }`의 코드는 `{ !isEvenNumber(5) && <h1>짝수가 아닙니다.</h1> }`와 같은 방식으로 사용하자.

## JSX에서 조건문이 0인 경우
- JSX에서 조건문이 0인 경우 특별히 조심해야 한다. `{ 조건문 && 조건문이_참일_때_반환되는_값 }`이 구문에서 조건문이 falsy인 경우 `조건문` 부분의 값이 반환된다. 이 조건문의 값은 `false`로 형변환이 되지 않고 값 그대로를 JSX에 랜더링시킨다. 자바스크립트에서 falsy에 해당하는 값은 `0`, '', `null`, `undefined`, `false`의 값이 있는데 0인 경우 JSX에 `0` 값으로 랜더링이 되며, 나머지는 랜더링 되지 않는다.

src/components/05-LogicalOperator/Index.js
```js
import React from 'react';
import AndOperator from './AndOperator';
import TrueFalsInJsx from './TrueFalseInJsx';
import OrOperator from './OrOperator';
import ZeroCondition from './ZeroCondition';

function Index() {
	return (
		<div>
			<AndOperator/>
			<hr/>
			<TrueFalsInJsx/>
			<hr/>
			<OrOperator/>
			<hr/>
			<ZeroCondition/>
		</div>
	);
};

export default Index;
```

src/components/05-LogicalOperator/ZeroCondition.js
```js
function ZeroCondition() {
  const number = 0;
  return (
    <div>
      {number && <div>내용</div>}
    </div>
    );
};

export default ZeroCondition;
```
- `number` 부분은 `0`이므로 falsy이다. 따라서 `<div>내용</div>` 부분은 실행되지 않고 `number` 부분만 실행이 된다. 논리 연산자에 의해 연결된 조건문은 마지막에 실행된 부분의 값을 반환하므로 `number` 값을 반환하는데 이 값이 `0`이다. 그런데 다른 falsy에 해당하는 값과 달리 0의 경우 랜더링이 된다. 따라서 화면에 0이 출력 되는 것을 확인할 수 있다.
- 조건문이 `0`일 때 `0`을 출력하지 않고 태그를 랜더링하지 않으려면, 자바스크립트에서는 `{number !== 0 && <div>내용</div>}`에서 조건문의 값이 `0`이 될 때는 조건문이 `false`가 되기 때문에 조건문이 랜더링되지 않도록 코드를 작성해 주어야 한다.
