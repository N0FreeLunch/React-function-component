## Install
```
npm i styled-components
```

## Reference
https://github.com/styled-components/styled-components

## props usage
https://styled-components.com/docs/basics#adapting-based-on-props

## css helper
https://styled-components.com/docs/api#css

## Reason
스타일을 작성할 때 props를 넘겨 받아서 여러 조건에 따른 스타일을 표현할 수 있다는 장점이 있다.

## tagged template literal

### you can not check structure
#### writing code
```
`hello ${{foo: 'bar'}} ${() => 'world'}!`
```
#### displayed code (on browser console)
```
"hello [object Object] () => 'world'!"
```

## you can check structure
#### writing code
```
function tagged(...args) {
  console.log(args);
}
tagged`hello ${{foo:'bar'}} ${() => 'world'}`
```
#### displayed code (on browser console)
```
(3) [Array(3), {…}, ƒ]
  0: (3) ["hello ", " ", "", raw: Array(3)]
  1: {foo: "bar"}
  2: () => 'world'
  length: 3
```


## styled element
```
const MyComponent = styled.div`
  font-size : 2rem;
`;
```


## styled component
```
const MyInput = styled('input')`
  background : gray;
`
```

```
const StyledLink = styled(Link)`
  color : blue;
`;
```
