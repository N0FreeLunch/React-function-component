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
- 위의 값으로 멤버 변수 `intval1`가 8로 `intval2`가 3으로 바뀌었기 때문에 `sum` 메소드가 반환하는 값은 11이 된다.


