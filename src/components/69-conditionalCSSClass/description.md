## Install
```
npm i classnames
```

## Reference
https://github.com/JedWatson/classnames#readme

```
classNames('foo', 'bar'); // => 'foo bar'
classNames('foo', { bar: true }); // => 'foo bar'
classNames({ 'foo-bar': true }); // => 'foo-bar'
classNames({ 'foo-bar': false }); // => ''
classNames({ foo: true }, { bar: true }); // => 'foo bar'
classNames({ foo: true, bar: true }); // => 'foo bar'
```
- 인자로 문자열이 들어가면 해당 문자열을 출력
- 태그의 클래스 명으로 만들기 때문에 각 인자는 띄어쓰기가 포함된 문자열로 출력
- { key: value } 형식으로 쓰면 value에 들어간 값이 true냐 false냐에 따라 key를 문자열로 출력할지 말지를 결정



```
const MyComponent = ({ highlighted, theme }) => (
  <div className={classNames('MyComponent', { highlighted }, theme)}>Hello</div>
);
```
- 위 코드는 MyComponent는 출력하고
- { highlighted }는 키는 있는데 value가 없는 상태 value가 없으면 문자열로 출력한다.

```
const MyComponent = ({ highlighted, theme }) => (
  <div className={`MyComponent ${theme} ${highlighted ? 'highlighted' : ''}`}>
    Hello
  </div>
);
```
- classNames 라이브러리 없이 표현할 때
