## 클래스 내부의 props 미들웨어

### 미들웨어
- 미들웨어란 무언가를 처리할 때 중간에서 어떤 역할을 담당하는 기능을 뜻한다.
- prop-types는 리액트 컴포넌트에 전달되는 props의 타입을 검사하는 라이브러리를이며, 리액트 컴포넌트에서 상위 컴포넌트와 하위 컴포넌트의 데이터 전달의 중간 과정에서 전달된 값들의 타입이 적절한지 확인하는 역할을 한다.

### 정적 메소드로 prop-types 미들웨어 사용하기
- 기존에는 클래스 외부에서 `컴포넌트_클래스명.defaultProps = {}`과 `컴포넌트_클래스명.propTypes = {}`을 사용해서 prop-types 미들웨어를 사용했다. 이 방식은 `defaultProps` 멤버와 `propTypes` 멤버를 `컴포넌트_클래스명`에 정적으로 추가한 것이다. 이는 클래스 내에 static 키워드로 멤버를 추가한 것과 동일한 기능이다. 따라서 클래스 내부에 static 메소드의 방식으로 prop-types 미들웨어를 사용할 수 있다.

```jsx
class ChildComponent extends Component {
  static defaultProps = {
    name: 'default name',
  };

  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };

  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        Hi, my name is {name}. <br />
        children value is {children}
        <br />
        my favorite number is {favoriteNumber}
      </div>
    );
  }
}
```

- `컴포넌트_클래스명.defaultProps`과 `컴포넌트_클래스명.propTypes`, 컴포넌트 클래스 안의 `static defaultProps`와 `static propTypes`는 동일하며, 모두 오브젝트에 속성을 붙여주는 것이다. 또한 컴포넌트 클래스 뿐만 아니라 함수 컴포넌트에서도 `컴포넌트_함수명.defaultProps` , `컴포넌트_함수명.propTypes`으로 사용하는 유사성을 갖는다.
