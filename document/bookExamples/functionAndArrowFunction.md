## 함수
- 자바스크립트에서 함수는 크게 2가지 방식으로 표현된다.
```js
function () {

}
```
- 위와 같이 function 키워드로 사용하는 함수가 있으며

```js
() => {}
```
- 위와 같이 function 키워드를 사용하기 않고 화살표 `=>`를 사용한 함수가 있다.
- 화살표 기호를 사용한 함수를 arrow function, 화살표 함수라고 부른다.

### 오브젝트의 특징
```js
const obj1 = {
  attribute : 'attribute 속성에 할당된 값',
  attributeCopy : attribute
}

obj1.attributeCopy;
```
- `attribute`라는 속성에 할당된 값은 문자열이다.
- 위의 코드를 읽었을 때 `attributeCopy`에는 `'attribute 속성에 할당된 값'`라는 문자열이 들어갈 것으로 예상할 수 있다.
- 하지만 `obj.attributeCopy`을 실행하면 `Uncaught ReferenceError: attribute is not defined`라는 에러 메시지가 나온다.
- `attribute`가 변수라면 `attributeCopy : attribute`에서 `attribute` 부분에 값이 할당되지만, `attribute : 'attribute 속성에 할당된 값'`에서 정의한 `attribute`는 오브젝트의 속성이다. `attribute`라는 값을 가져와서 쓰려면 먼저 정의된 `attribute : 'attribute 속성에 할당된 값',`를 이용해서 `attributeCopy : attribute` 부분에 `attribute`가 아닌 `obj1.attribute`로 값을 접근하는 방법도 생각 해 볼 수 있다. 하지만 중괄호로 정의된 오브젝트가 끝나기 전에는 `obj1`이란 변수에 오브젝트가 할당되지 않으므로 이런 생각은 잘못된 생각이다. 다음 코드를 보자.
```js
const obj2 = {
  attribute : 'attribute 속성에 할당된 값',
  attributeCopy : obj2.attribute
}

obj2.attributeCopy;
```
- 위 코드를 실행하면 `Uncaught ReferenceError: obj2 is not defined`라는 에러가 발생한다. 오브젝트를 만드는 중괄호 열고 닫는 부분까지 코드가 실행되지 않았기 때문에 오브젝트가 생성되지 않은 상태이다. 따라서 `obj2.attribute` 코드를 실행할 때에 `obj2` 변수에는 값이 할당되지 않았기 때문에 ` obj2.attribute` 부분의 코드를 실행할 수 없다.

### function 함수를 사용하기
```js
const obj3 = {
  method : function () {
    return obj3.attribute;
  },
  attribute : 'attribute 속성에 할당된 값',
}

obj3.method();
```
- 위와 같이 메소드 안에 `obj3.attribute`를 넣으면 `attribute` 속성이 나중에 정의 되었지만 값을 사용할 수 있다. 이것은 `method`라는 속성에는 함수를 할당을 한 것이므로 함수의 내부 곧 `function ()` 으로 시작해서 중괄호 열고 닫는데 까지의 코드가 실행되지 않았기 때문이다. 중괄호를 열고 닫는 부분까지 오브젝트가 생성되고 `obj3` 변수에 할당이 된 이후에, `obj3.method()`의 코드에 의해 `method` 함수가 실행되었기 때문에 `obj3.attribute`가 오브젝트의 내부에서 사용되었어도 이미 `obj3`이란 변수에 값이 정의가 되었기 때문에 사용할 수 있는 것이다.

### this
- 자바스크립트에서 `this`는 `this`란 코드를 실행한 오브젝트를 가리킨다.
```js
const obj4 = {
  attribute : 'attribute 속성에 할당된 값',
  method : function () {
    console.log(this);
  }
}

obj4.method();
```
- 위 코드를 실행하면 `{description: '함수 안에 바인딩 된 this입니다.', fn: ƒ}`라는 결과가 나온다. 이 결과가 `this`가 가리키고 있는 값이다.
- 위 코드에서 `console.log(this)` 부분의 코드는 `console.log(obj)`한 것과 동일한 결과를 낸다. `this`는 `obj4` 오브젝트를 가리킨다.

#### 속성 값으로서의 this
```js
const obj5 = {
  attribute : this
}

obj5.attribute;
```
- 위 코드를 실행하면 `Window {0: global, window: Window, self: Window, document: document, name: '', location: Location, …}`라는 `Window` 오브젝트가 나온다.
- `Window` 오브젝트는 브라우저를 실행할 때 기본적으로 생성되는 오브젝트이며 자바스크립트 스코프의 가장 바깥쪽을 감싸는 오브젝트이다.
- `this`라는 코드가 실행이 되면 `this`란 키워드는 대상이 될 오브젝트를 찾는다. 하지만 `{attribute : this}`에서 this는 아직 중괄호가 끝난 상태가 아닌 상태에서 `this`를 사용했기 때문에 오브젝트가 생성되지 않은 상태에서의 `this`를 사용한 것이다. 오브젝트는 속성에 값을 할당하기 위해서 `this`가 가리키는 값을 찾으려고 하므로 `this`란 코드를 실행한다.
- 그런데 오브젝트가 만들어지지 않은 상태에서 `this`를 찾으려고 하기 때문에 `obj5` 오브젝트로는 접근할 수 없고, 그 상위 스코프의 오브젝트를 찾는다. 위 코드는 코드상 다른 어떤 객체에도 포함되지 않았기 때문에 가장 바깥쪽의 오브젝트인 `Window` 객체를 가리키게 된다.
- 참고 : `obj5` 오브젝트는 `this`를 오브젝트의 속성으로 가지고 있지 않다. `this`는 오브젝트 내의 코드에서 오브젝트 자체를 가리키기 위한 자바스크립트에서 제공하는 키워드이다. 따라서 `obj5.this`와 같이 속성으로 사용되는 값이 아니다.

#### 오브젝트 안에서 오브젝트를 접근하기 위한 방법?
```js
const obj6 = {
  self : obj6.attribute
}

obj6.self;
```
- 위와 같은 코드는 불가능하다. 왜냐하면 `obj6`이 생성되기 전에 `obj6.attribute`으로 값에 접근하려고 하기 때문이다. 정의되지 않은 오브젝트에 `obj6.attribute` 와 같은 방식으로 접근할 수 없다.

### 함수를 객체로 만들기
#### function 함수의 경우
```js
new (function () {

})();
```
- 위 코드는 익명함수를 `new` 라는 키워드로 객체로 만든 것이다.
- 결과는 빈 오브젝트 `{}`가 나온다.
```js
new (function () {
  this.name = 'anonymous';
})();
```
- 위 코드를 실행하면 `{name: 'anonymous'}` 멤버와 속성이 할당된 오브젝트가 생성된다.
- `function` 함수 내에 `this` 키워드를 사용하면 `new` 키워드로 함수를 객체로 만들었을 때 멤버를 만들 수 있다. 

#### 화살표 함수의 경우
```js
new (() =>{
  this.name = 'anonymous';
})();
```
- 그런데 위의 코드는 `Uncaught TypeError: (intermediate value) is not a constructor`라는 에러가 난다.
- `class` 문법을 다룰 때 `constructor` 메소드에 정의된 값이 클래스로 오브젝트를 만들 때 실행된다고 하였다. 클래스로 오브젝트를 만들 때 실행되는 함수를 생성자라고 부른다. 클래스 내의 `constructor` 메소드는 생성자 함수인 것이다. 위 방식은 `class` 문법은 아니지만 함수로 객체를 생성하면서 동시에 함수 내부의 값이 실행되므로 생성자의 역할을 한다. 하지만 화살표 함수의 경우 함수를 생성자로써 쓸 수 없기 때문에 우와 같은 에러가 발생한다.

### 자바스크립트 코드의 해석 및 파싱
- 컴퓨터는 프로그래밍 언어의 코드를 컴퓨터가 실행할 수 있는 형태로 바꾼 후에 실행하게 된다. 자바스크립트 엔진은 어떤 단위의 자바스크립트 코드를 미리 실행할 수 있는 형태로 바꾼 후에 실행하게 된다.
- 자바스크립트 코드를 컴퓨터가 실행할 수 있는 형태의 코드로 바꾼 후에 메모리에 올려 놓는 과정을 해석 또는 파싱이라고 부른다.
```js
function fn() {
  $a21312^
}
```
- 위의 코드를 실행 해 보자. 함수 내부에 변수를 의미하는 코드가 아닌 글자로 코드를 써 주면 에러가 발생한다.
- 에러가 발생한다는 것은 함수를 실행하기 전에 함수 내의 코드를 자바스크립트 엔진이 해석/파싱을 한다는 의미이다.

### function과 arrow function의 차이
- `function` 키워드로 선언된 함수와 `=>` 키워드로 선언된 함수는 함수 내부의 `this` 값에 접근하는 방식이 다르다.
- `function` 키워드로 선언된 함수 내부의 `this`는 함수가 실행된 시점에서 함수 내부의 `this`에 해당하는 오브젝트가 무엇인지 판단한다.
- `=>` 키워드로 선언된 함수 내부의 `this`는 함수가 생성된 시점에서 `this`의 값에 접근한다.

#### function 함수와 내부의 this
```js
function BlackDog() {
  this.name = '힌둥이';
  return {
    name: '검둥이',
    bark: function () {
      console.log(this.name + ': 멍멍!');
    }
  }
}

const blackDog = new BlackDog();
blackDog.bark();
```
- `BlackDog`이란 함수는 반환 값 오브젝트의 `bark` 속성에 함수 `function () { console.log(this.name + ': 멍멍!'); }`를 할당하였다.
- `function`으로 생성한 함수는 실행시점에서 `this`값을 찾는다. `new BlackDog()`에 의해서 `blackDog`이란 오브젝트가 생성되었다. 이 오브젝트 내에서 `bark` 메소드를 사용하였고 메소드 내부의 `this`를 실행하게 된다. 따라서 `this`는 `blackDog` 오브젝트를 가리키게 된다.
- 위의 코드를 실행하면 `검둥이: 멍멍!`이란 결과가 나오는데 이는 `this`가 가리키는 대상이 `blackDog`이라는 오브젝트이고 메소드 안의 `this.name`란 코드는 `blackDog` 오브젝트의 속성 `name`을 가리키므로 `'검둥이'`란 결과값을 얻는다.

#### arrow 함수와 내부의 this
```js
function WhiteDog() {
  this.name = '힌둥이';
  return {
    name: '검둥이',
    bark: () => {
      console.log(this.name + ': 멍멍!');
    }
  }
}

const whitekDog = new WhiteDog();
whitekDog.bark();
```
- 위의 코드가 `BlackDog`의 예제와 다른점은 반환하는 오브젝트의 `bark` 속성이 `function` 키워드로 선언된 함수인지 `=>` 키워드로 선언된 함수인지의 차이점 뿐이다.
- 화살표 함수는 해당 화살표 함수가 생성된 시점에서 함수 내부의 `this`값을 판단한다.
- 위 코드에서 함수가 생성된 시점은 `new WhiteDog()`으로 오브젝트를 생성했을 때 함수 내부의 코드가 생성이 된다. `WhiteDog`이 반환하는 오브젝트 `return { ... }`가 생성되기 이전에 `bark` 메소드에 할당된 `() => {console.log(this.name + ': 멍멍!');}` 함수가 생성이 된다. 함수가 생성된 시점은 `return { ... }`가 생성되기 이전이므로 `() => {console.log(this.name + ': 멍멍!');}`의 `this`는  `return { ... }`의 오브젝트에 가리키지 않고 그 상위 범위의 객체를 가리키게 된다. `new WhiteDog()` 부분으로 오브젝트는 생성이 된 상태이므로 `whitekDog` 오브젝트에 해당하는 `{name: '힌둥이'}` 오브젝트를 가리키게 된다.
- 따라서 `this`가 `whitekDog`을 가리키므로 `bark` 메소드를 실행한 결과는 `힌둥이: 멍멍!`이 된다.

#### 참고 : 만약 함수를 객체화하지 않는다면
```js
function WhiteDog() {
  this.name = '힌둥이';
  return {
    name: '검둥이',
    bark: () => {
      console.log(this);
    }
  }
}

WhiteDog().bark()
```
- 위 코드를 보면 `WhiteDog`을 객체로 만드는 `new` 키워드가 없는 상태이다.
- `() => { console.log(this); }` 코드가 생성이 된 시점에서 `WhiteDog` 함수로 객체가 만들어지지 않았다. 함수가 생성된 시점에서 `this`가 가리키는 사용자 정의 오브젝트는 없는 상태이기 때문에 가장 바깥의 범위의 오브젝트인 `Window` 오브젝트를 가리키게 된다.
