### without css keyword from styled component
```
${props =>
  props.inverted &&
  `
    background : none;
    border : 2px solid white;
    color : white;
    &:hover {
      background : white;
      color : black;
    }
  `};
```

### with css keyword from styled component
```
${props =>
  props.inverted && css
  `
    background : none;
    border : 2px solid white;
    color : white;
    &:hover {
      background : white;
      color : black;
    }
  `};
```
- css 키워드가 없어도 되지만 있으면 styled-component 라이브러리의 린트를 통해서 내부 css를 색을 입혀서 보여준다.
