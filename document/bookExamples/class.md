## 클래스란 무엇인가?
- 클래스란 특정 유형의 오브젝트를 만들기 위해 유형을 정의하는 문법이다.
```js
class ClassName {

}
```
- 위 명령으로 클래스를 만들 수 있다.

### 클래스를 오브젝트로 만들기
```js
class ClassName {

}

new ClassName();
```
- 클래스를 만들었다면 `new 클래스명` 또는 `new 클래스명()`으로 오브젝트를 만들 수 있다.

### 자바스크립트에서 오브젝트
```js
{}
```
- 자바스크립트에서는 오브젝트를 위와 같이 간단히 만들 수 있다.
- 오브젝트는 다양한 속성을 갖는다.

### 오브젝트에는 속성을 부여할 수 있다.
```js
const obj = {};
obj.intval1 = NaN;
obj.intval2 = NaN;
obj.setIntval1 = v => {obj.intval1 = v; return obj;}
obj.setIntval2 = v => {obj.intval2 = v; return obj;}
obj.sum = () => obj.intval1 + obj.intval2;
```
- 오브젝트에 값을 저장할 수 있는 속성을 만들었다. 초기값을 수가 아니라는 의미의 `NaN`으로 세팅 하자.
- `intval1`, `intval2`는 오브젝트 내부의 속성으로 `var`, `const`, `let` 이란 키워드로 변수가 만들어진 것은 아니지만, 오브젝트 내에서 값을 저장하는 역할을 할 수 있기 때문에 멤버 변수라는 이름이 붙는다.
- `sum`, `setIntval1`, `setIntval2`는 오브젝트 내부의 속성으로 함수를 만들었다. 마찬가지로 `var`, `const`, `let`로 선언된 변수에 함수를 만든 것이 아니라 오브젝트 속성에 함수를 할당한 것으로 멤버 메소드라는 이름이 붙는다.
- `setIntval1`과 `setIntval2`는 오브젝트의 멤버 변수에 값을 세팅하는 역할을 한다.
- `sum`는 오브젝트 내부의 멤버 변수 `obj.intval1`과 `obj.intval2`의 값을 사용해서 두 값을 더한 결과를 반환하는 멤버 메소드이다.

```js
obj.intval1 = 2;
obj.intval2 = 5;
obj.sum();
```
- 멤버 변수에 직접 값을 할당하여 `sum` 메소드를 호출하여 2+5 의 값인 7을 얻을 수 있다.

```js
obj.setIntval1(3);
obj.setIntval2(7);
obj.sum();
```
- `setIntval1` 메소드와 `setIntval2` 메소드를 사용해서 멤버 변수에 값을 할당할 수 있다.
- 멤버 변수의 값을 직접적으로 바꾸는 메소드는 일반적으로 메소드명의 앞에 `set`이란 접두어를 붙여 준다.
- `setIntval1(3)`에 의해서 `obj.intval1`의 값이 3으로 변경되었고, `setIntval2(7)`에 의해서 `obj.intval2`의 값이 7으로 변경되었다.
- 따라서 두 멤버 변수의 합을 구하는 `obj.sum()`의 값은 10이 된다.

```js
obj.setIntval1(8).setIntval2(3).sum();
```
- `setIntval1` 메소드와 `setIntval2` 메소드는 이를 멤버로 하는 객체인 `obj`를 반환하도록 만들었다. `obj.setIntval1 = v => {obj.intval1 = v; return obj;}` 따라서 `obj.setIntval1(8)`의 결과 값은 `obj`이고, `obj.setIntval1(8).setIntval2(3)`의 결과 값도 `obj`이다. `obj`가 반환되었기 때문에 멤버 메소드를 사용할 수 있다.
- 이렇게 메서드의 반환 값이 오브젝트라서 dot(.)으로 계속 멤버를 사용하여 이어나가는 방식을 '메소드 체이닝'이라고 한다.
- 위의 값으로 멤버 변수 `intval1`가 8로 `intval2`가 3으로 바뀌었기 때문에 `sum` 메소드가 반환하는 값은 11이 된다.

### 오브젝트의 생성과 동시에 멤버 정의하기
- 멤버란 멤버 변수와 멤버 메소드 모두를 의미한다.
- 위에서는 이미 생성된 오브젝트에 오브젝트가 가지고 있지 않은 멤버를 추가 해 주는 방식을 사용하였으나, 이번에는 오브젝트를 생성할 때 미리 멤버를 만들어서 오브젝트가 생성될 때는 멤버를 이미 가진 형태로 만드는 것을 목표로 한다. 이미 생성된 오브젝트에 속성을 추가하는 것을 동적 멤버 추가라고 부르고, 오브젝트를 생성하기 전에 미리 속성을 추가하여 오브젝트를 생성하는 것을 정적 멤버 추가라고 한다.
```js
const obj = {
	intval1 : NaN,
	intval2 : NaN,
	setIntval1 : v => {obj.intval1 = v; return obj;},
	setIntval2 : v => {obj.intval2 = v; return obj;},
	sum : () => obj.intval1 + obj.intval2
};

obj.setIntval1(7).setIntval2(13).sum();
```
- 오브젝트의 멤버는 속성 또는 키라고도 불린다.
- 오브젝트의 {} 안에 멤버, 속성, 키를 정의할 때는 `키 : 벨류,` 방식으로 나열해 준다. 키는 멤버가 되고 멤버에 접근할 때는 벨류에 접근하게 된다.

### 클래스로 멤버 만들기
```js
class ClassName {
  constructor(intval1, intval2) {
    this.intval1 = intval1 ?? NaN;
    this.intval2 = intval2 ?? NaN;
  }

  setIntval1(v) {
		this.intval1 = v;
		return this;
  }
  
  setIntval2(v) {
    this.intval2 = v;
		return this;
  }

	sum() {
		return this.intval1 + this.intval2;
	}
}

const obj = new ClassName();
obj.setIntval1(11).setIntval2(13).sum();
```

#### 생성자
- `constructor`라는 이름의 함수를 클래스 안에 써 주었다. 보통 클래스의 멤버 변수를 정의할 때는 특별한 이유가 없는 한 `constructor` 함수 안에서 정의를 해 준다.
- `this.intval1`와 `this.intval2`는 클래스가 오브젝트로 만들어졌을 때 오브젝트에 속성이 부여된다는 의미를 가지고 있다.
- `this`란 것은 클래스가 오브젝트로 만들어졌을 때 오브젝트 안의 속성에 접근하겠다는 의미를 가지고 있다. (하지만, 이 때 this는 클래스의 멤버 변수가 아닌 다른 함수 안에 쓰이면 안 된다. 자바스크립트에서 함수도 일종의 오브젝트이기 때문에 클래스로 만든 오브젝트의 멤버가 아닌 함수라는 오브젝트의 멤버가 되기 때문이다.)
- `constructor`는 생성자라고 불린다. 클래스로 오브젝트를 생성할 때 `new ClassName();`의 괄호 부분에 인자를 전달하면 `constructor` 함수에서 인자를 전달 받게 된다.
- `const obj2 = new ClassName(5, 3); obj2.sum()`이렇게 클래스를 객체로 만들 때 인자로 5와 3을 전달하면 `constructor` 함수가 실행되면서 인자를 전달한다. `constructor(intval1, intval2)`에서 `intval1`에 5를 `intval2`에 3을 전달하여 `constructor` 내부 로직을 실행하고 `this.intval1 = intval1 ?? NaN;` 부분의 로직에 따라 멤버 변수에 전달된 값을 할당한다. 따라서 `setIntval1`과 `setIntval2` 메소드로 멤버 값을 할당하지 않아도 이미 할당이 되었기 때문에 `.sum()`을 바로 사용하여 5+3인 8의 값을 얻는다.

#### 멤버 변수
- 클래스를 사용하지 않고 `cosnt obj = {}`로 만든 오브젝트 예제에서 `obj.intval1 = 2;` `obj.intval2 = 5;`를 사용하여 멤버 변수를 할당하였다.
- 클래스를 이용한 문법에서는 클래스 내부에서 `this.intval1` `this.intval2`를 사용하는 방식으로 멤버 변수를 만들 수 있다. 일반적으로 멤버 변수는 `constructor` 함수에 만드는데 클래스로 오브젝트를 만드는 것과 동시에 `constructor` 함수가 실행 되면서 멤버 변수를 만들 수 있기 때문이다. 클래스는 내부의 메소드를 실행하여 로직을 동작시킬 수 있다. `constructor`를 사용하지 않는다면 다른 메소드를 실행해야 멤버 변수를 선언할 수 있다.
```js
constructor(intval1, intval2) {
	this.intval1 = intval1 ?? NaN;
	this.intval2 = intval2 ?? NaN;
}
```
- 생성자의 생성과 동시에 클래스로 만든 `this` 오브젝트의 내부에 `intval1`라는 속성을 정의하고 `= intval1 ?? NaN;`으로 값을 할당해 주었다.
- `??` 문법은 `intval1`가 `null` 또는 `undefined`인 경우 `??`를 기준으로 오른쪽값을 할당한다. 여기서 오른쪽 값은 `NaN`에 해당한다. `intval1`가  `null` 또는 `undefined`가 아닌 경우 `intval1`값을 할당한다는 의미이다.
- `intval1 ??` NaN 이란 값은
```js
(() => {
	if(typeof intval1 === 'undefined' || typeof intval1 === 'null') {
		return NaN;
	}
	return intval1;
})
```
- 위 함수 표현과 동일하다.

#### 멤버 메소드
- 클래스를 사용하지 않고 `cosnt obj = {}`로 만든 오브젝트 예제에서 `obj.setIntval1 = v => {obj.intval1 = v; return obj;}` `obj.setIntval2 = v => {obj.intval2 = v; return obj;}`를 사용하여 멤버 메소드를 만들어 주었다.
- 멤버 메소드란 오브젝트가 직접 사용할 수 있는 함수를 의미하며, 직접 사용한다는 말은 함수가 할당된 속성명을 dot(.)으로 연결하여 사용할 수 있다는 의미이다.
