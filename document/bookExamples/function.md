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

### function과 arrow function의 차이
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
- 위의 코드를 실행하면 `검둥이: 멍멍!`이란 결과가 나오는데 이는 객체가 생성 되었을 때 반환되는 객체의 `bark` 속성에 할당된 함수는 자바스크립트 엔진에 의해 함수로 해석이 된 상태이다.
- `new BlackDog()`라는 코드를 사용했을 때 다음 오브젝트를 생성하면서 함수가 해석이 되었기 때문에 함수 안의 `this`도 가리키는 대상이 반환된 오브젝트의 `name`을 가리키게 된다.
```js
{
  name: '검둥이',
  bark: function () {
    console.log(this.name + ': 멍멍!');
  }
}
```
- 따라서 `this.name`은 `검둥이`가 된다.

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
- 하지만 코드의 결과는 `힌둥이: 멍멍!`이 된다. `function` 키워드의 함수가 자바스크립트 엔진에 의해 내부 값의 해석이 이뤄진 반면, `=>` 키워드는 `bark` 함수를 실행하기 전까지는 `this`값을 판단하지 않는다. `whitekDog`이 `bark` 메소드를 실행하므로 `WhiteDog`의 `this.name`을 가리키게 된다.
