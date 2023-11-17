## 클래스의 정적 멤버
- 기본적으로 클래스는 인스턴스화하여 사용한다. 인스턴스화 된 객체는 서로 독립된 멤버를 갖는다.
- 그런데 모든 인스턴스화 된 객체에 공통적으로 무언가를 설정하고 싶은 경우가 있다. 이 때 사용할 수 있는 방법이 클래스를 직접 조작하는 것이다.

### 정적 멤버의 사용방법
```js
class Class {
  static property = 1;
  static method() {
    console.log("run static method");
  }
}

console.log(Class.property);
Class.method();
```
- 클래스의 일반 멤버를 사용했을 때에는 `클래스명.멤버` 형태로 사용할 수 없었으나, static 키워드로 생성한 멤버는 인스턴스화 하지 않고서도 멤버를 사용할 수 있다.
- 일반 멤버 변수는 메소드 안에 `this.멤버`의 방식으로 멤버 변수에 접근할 수 있으나, static 키워드로 만드는 경우에는 `this.`을 쓰지 않고 `static 정적멤버명`을 클래스 안에 적는 것으로 사용할 수 있다.

### 정적 멤버는 프로퍼티이다.
- 자바스크립트에서 어떤 객체에 대해 `대상.멤버명`으로 접근할 수 있을 때 이 멤버를 프로퍼티라고 부른다.
- 클래스의 일반 멤버의 경우 인스턴스화를 해서 새로운 대상을 만든 후에 `.멤버명`으로 접근할 수 있지만, 정적 멤버의 경우 클래스 그 자체에 `.멤버명`으로 접근할 수 있기 때문에 클래스의 프로퍼티이기도 하다. 따라서 클래스의 일반 멤버는 인스턴스화 한 뒤에 프로퍼티가 되고, 정적 멤버는 그 자체로 프로퍼티가 된다.

### 정적 메소드에서 정적 멤버 사용하기
```js
class Class {
  static property = 1;
  static method() {
    console.log("property value is " + this.property);
  }
}

console.log(Class.property);
Class.method();
```

### 정적 멤버는 인스턴스에서는 직접 사용할 수 없다.
```js
class Class {
  static property = 1;
  static method() {
    console.log("run static method");
  }
}

console.log((new Class).property);
(new Class).method();
```
- 위의 코드에서 `(new Class).property`와 `(new Class).method()`는 에러가 발생한다.

#### 정적 멤버는 인스턴스에서 생성자 함수에 바인딩된다.
- 바인딩이란 말은 한 단위로 묶는 표현으로 포함된다. 속한다는 의미를 가진다. 여기서 바인딩 되었다는 말은 '생성자 함수'라는 객체의 프로퍼티가 되었다는 의미이다.
```js
console.log((new Class).constructor.property);
(new Class).constructor.method();
```
- 인스턴스에서 정적 멤버를 사용하기 위해서는 `인스턴스.constructor.정적멤버명`의 방식으로 사용해야 한다.
- `constructor()`는 클래스에서 생성자에 해당하는 멤버이다. 생성자는 클래스가 인스턴스화 될 때, 직접 실행하지 않아도 자동적으로 실행되는 함수로 객체의 멤버의 값을 초기화 할 때 사용하는 멤버 메소드이다. 그런데 여기서는 생성자를 메소드 `()` 형식으로 사용하지 않고 `constructor.정적멤버명`으로 함수 자체에 정적 멤버가 속한 형태이다.

### 함수로 클래스 이해하기
- 자바스크립트의 class 문법은 ES6라는 언어 사양에 대한 정의가 된 이후 만들어졌다. ES6 사양 이전의 자바스크립트와의 호환성을 위해서 이전의 자바스크립트 문법에서 다른 언어에서 클래스-객체의 관계를 비슷하게 구현할 수 있는 자바스크립트의 특징을 이용하여 ES6에서 클래스, 멤버, 정적 멤버 등의 개념이 도입되었다. 그래서 자바스크립트의 클래스 문법을 이해하기 위해서는 클래스 문법이 없었을 때, 클래스와 객체를 어떻게 나타내고 사용했는지 이해하는 것을 통해서 자바스크립트의 클래스 문법에 대한 좀 더 깊은 이해를 할 수 있다.
```js
function functionClass() {
  this.member = 1;
  this.method = () => {
    console.log("run method");
  };
}

functionClass.property = 0;

console.log((new functionClass).member);
(new functionClass).method();
console.log(functionClass.propety);
(new functionClass).constructor.property;
```
- `class` 문법이 도입되기 전에 자바스크립트에서는 `function` 함수로 클래스의 특징을 갖는 대상을 만들었다. 클래스의 특징을 갖는 대상이란, 정의한 멤버를 '대상.프로퍼티'로 접근할 수 있도록 새로운 대상을 어떤 대상을 틀로하여 만들어 낼 수 있다는 의미이다. 이 때 틀에 해당하는 대상을 클래스로, 틀로 만든 새로운 대상을 객체의 역할로 본다.

#### function 함수의 일반 멤버
- `new function_키워드로_만든_함수`의 문법을 사용하면 인스턴스화 된 객체를 얻을 수 있는데 함수 내부에 `this.멤버`로 정의한 멤버를 `인스턴스화된_객체.멤버`의 방식으로 사용할 수 있다.
- function 키워드로 만든 함수가 클래스의 역할을 하였고 function 키워드로 만든 함수에 `new` 키워드를 붙여 함수 내부에 정의한 `this.멤버`라는 설계도에 해당하는 프로퍼티를 가진 새로운 객체를 만들어 낸다.
- 위의 코드에서 `function` 키워드로 만든 함수 내부의 `this.멤버` 방식으로 정의한 대로, 새로운 대상 `(new functionClass)`은 `(new functionClass).member`, `(new functionClass).method()`는 멤버를 갖는다.

#### function 함수의 정적 멤버
- 하지만 `function` 키워드로 만든 함수 내부에서 정적 멤버를 만드는 문법은 지원하지 않으며, `function` 키워드로 만든 함수의 명칭에 직접 `.정적_멤버명`을 사용하여 클래스에 해당하는 대상에 `.property`로 접근할 수 있는 프로퍼티를 만들 수 있다.
- 위의 코드에서도 `functionClass`의 함수 내부 중괄호에 `functionClass.`으로 접근하는 대상을 정의하지 않고, `functionClass.property = 0;`으로 직접 대상의 프로퍼티를 추가해 주었다.

#### function 함수의 생성자 함수
- `function` 함수는 그 자체로 생성자 함수라고 보면 된다. 곧 생성자 함수를 대상으로 `new`를 사용하는 개념이 `function` 키워드로 만든 함수에 `new`를 적용하는 것과 같다.
- 물론 클래스 문법의 생성자 함수에 직접 `new` 키워드를 사용할 수는 없다.

#### construtor
- 생성자 함수의 이름은 `constructor`이다.
- `function` 키워드로 생성한 함수에 new 키워드를 사용하면 `function` 키워드로 생성한 함수가 생성자가 된다고 하였다.
- 클래스에 해당하는 함수는 그 자체로 `constructor`이며, `constructor`라는 프로퍼티를 가지지 않는다. 이와 달리 인스턴스화 된 객체는 `constructor`라는 프로퍼티를 갖는다. `constructor` 프로퍼티는 해당 객체를 생성할 때 사용한 생성자 함수를 의미한다.
- 그런데 `function` 키워드로 만든 함수의 정적 멤버는 `function_키워드로_만든_함수.정적_멤버명`으로 접근하는데, 인스턴스화 된 객체의 `constructor`가 `function_키워드로_만든_함수`라면 정적 멤버는 `constructor.정적_멤버명`으로 접근을 할 수 있다.
- 따라서 클래스 문법에서 인스턴스화 된 객체에서 정적 멤버를 접근할 때 `인스턴스화된_객체.constructor.정적_멤버명`으로 접근하는 것은 자바스크립트의 클래스 문법이 `function` 키워드로 만든 함수로 만들어졌기 때문인 것으로 이해할 수 있다.

