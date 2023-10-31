## Axios 사용해 보기
- Axios를 사용하기에 앞서서 여러가지 설정을 해 줘야 한다.
- 리액트는 컴포넌트 단위로 나눠져 있고 컴포넌트에서 axios를 사용하기 위해서는 axios 라이브러리에서 axios를 불러오고 디폴트 세팅을 axios를 사용하는 컴포넌트마다 해 줘야 한다는 문제점이 있다.

```js
import axios from 'axios';

axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
```
- 위와 같이 axios를 사용할 때 baseURL이나 headers와 같이 공통적인 코드들을 axios를 사용하는 각각의 컴포넌트에서 계속 작성해야 하는 문제가 있다.
- 이런 문제를 해결하기 위해서 커스텀 훅을 사용하는 방법과 react context를 사용하는 방법이 있다.
- 커스텀 훅은 미리 설정이 된 axios를 커스컴 훅으로 정의하고 이를 컴포넌트에서 사용하는 방식으로 컴포넌트에 커스텀 훅을 가져올 때마다 axios 라이브러리와 설정을 불러와야 하는 단점이 있다.
- 이에 반해 context를 사용하면 전체 리액트 컴포넌트의 상위 컴포넌트에 한 번 사용해 주면 그 하위 컴포넌트에서는 props 형태로 전달되어 한 번만 선언해 주면 하위의 모든 컴포넌트에서 반복적으로 코드의 로딩을 하지 않고서도 사용할 수 있다는 장점이 있다. 하지만, context는 사용된 컴포넌트의 하위 컴포넌트 중에서 axios를 사용하지 않는 경우에도 props로 전달이 되므로 불필요하게 시스템 리소스를 소모한다는 단점이 있다.
