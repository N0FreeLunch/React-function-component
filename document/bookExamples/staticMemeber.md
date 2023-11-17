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



