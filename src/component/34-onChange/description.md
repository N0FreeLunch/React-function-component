```
() => {
  alert(this.state.message);
  this.setState({
    message : ''
  });
}
```
의
```
this.setState({
  message : ''
});
```
이 부분 동작 안하는 것 같다
