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
- 위의 코드를 실행하면 `검둥이: 멍멍!`이란 결과가 나오는데 이는 함수의 실행 시점에서 객체의 값에 접근하기 때문이다.
- `new BlackDog()`라는 코드를 사용했을 때 다음 오브젝트를 생성한 후 복제한 것이다.
```js
{
  name: '검둥이',
  bark: function () {
    console.log(this.name + ': 멍멍!');
  }
}
```
- 오브젝트의 인자를 접근하므로 `this.name`은 `검둥이`가 된다.
