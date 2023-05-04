import React from 'react';
import styled, {css} from 'styled-components';

const Box = styled.div`
  background : ${props => props.color || 'blue'};
  padding : 1rem;
  display : flex;
`;

const Button = styled.button`
  background : white;
  color : black;
  padding : 0.5rem;
  display : flex;
  align-items : center;
  box-sizing : border-box;
  font-size : 1rem;
  font-weight : 600;

  &:hover {
    background : rgba(255,255,255,0.9);
  }

  ${props => props.inverted &&
  css`
    background: none;
    border : 2px solid white;
    color : white;
    &:hover {
      background : white;
      color : black;
    }
  `};
  & + button {
    margin-left : 1rem;
  }
`;

console.log("can't check constucture : ", `hello ${{foo: 'bar'}} ${() => 'world'}!`)

function tagged(...args) {
  console.log("can check constucture : ", args);
}
tagged`hello ${{foo:'bar'}} ${() => 'world'}`

const StyledComponent = () => (
  <Box color="black">
    <Button>Hello</Button>
    <Button inverted={true}>only edge</Button>
  </Box>
);

export default StyledComponent;
