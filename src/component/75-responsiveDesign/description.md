```
const sizes = {
  desktop : 1024,
  tablet : 768
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width : ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});
```

- Object.keys(sizes) 의 값은  ["desktop", "tablet"] 이 된다.
- acc는 reduce 과정에서 앞선 연산의 결과 값으로 넘어 온 값
- label은 current value 곧 desktop 또는 tablet이 된다.
- reduce 내부의 익명함수는 acc[label]을 리턴한다.
- acc["desktop"],  acc["tablet"]에는 css 키워드를 사용한 css 표현이 들어간다.

## media 변수를 출력 해 보면
```
{desktop: ƒ, tablet: ƒ}
  > desktop: (...args) => {…}
  > tablet: (...args) => {…}
```

```
${media.desktop`width : 768px;`}
${media.tablet`width : 100%;`};
```
- media.desktop와 media.tablet는 내부의 익명함수 (...args) => {…}을 호출한다. 그리고 그 안에 백틱으로 이어지는 css 표현식을 집어 넣는다.
- `...args`는 여러 css 표현들을 받는다. 그리고 미디어 쿼리 안에 이 css 표현들을 집어 넣는다.
```
${css(...args)}
```
여기서 css 함수는
```
import styled, { css } from 'styled-components';
```
에서 가져온다.
- 인자를 CSS 표현으로 바꾸는 것으로 보인다.
