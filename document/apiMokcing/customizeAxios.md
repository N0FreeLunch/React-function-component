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

## 커스텀 훅 만들어 보기
```jsx
import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://xeuiojzt62kw.n5sy';

const useAxios = ({ url, method, body = null, headers = null }) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);

    const fetchData = () => {
        axios[method](url, JSON.parse(headers), JSON.parse(body))
            .then((res) => {
                setResponse(res.data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setloading(false);
            });
    };

    useEffect(() => {
        fetchData();
    }, [method, url, body, headers]);

    return { response, error, loading };
};

export default useAxios;
```
- 위의 커스텀 훅의 예제는 [여기](https://dev.to/hey_yogini/useaxios-a-simple-custom-hook-for-calling-apis-using-axios-2dkj)의 코드를 가져왔다.
- 컴포넌트 함수 안에서 `useAxios(url, method, body, headers)`의 방식으로 사용하면, 설정된 정보에 맞게 API 통신을 통해서 데이터를 가져온다.
- 위의 코드의 장점은 위의 커스텀 훅을 만들고 사용하면 데이터를 가져올 때 `.then((res) => { /* ... */ })`을 사용할 필요가 없다는 것이다. `const { response, loading, error } = useAxios(url, method, body, headers)`를 통해서 가져온 `response`, `loading`, `error`에 값이 들어 있는지를 확인하고, 값이 들어 있는 경우에는 해당 값을 이용하는 로직을 만들면 된다.
- 문제는 body나 header의 데이터를 컴포넌트 함수에서 `const { response, loading, error } = useAxios(url, method, body, headers)` 코드를 선언한 이후의 알지 못하는 타이밍에 `body`나 `headers`를 전달하고 그에 대한 결과 값을 가져와야 하는데, `useAxios`를 사용하는 것은 미리 url, method, body, headers의 값을 정해놓고 사용하는 것이 문제이다. url, method의 값은 미리 고정할 수 있다고 해도 body, headers는 컴포넌트가 동작하면서 바뀔 수 있는 값이기 때문에 컴포넌트 안에 선언된 `useAxios`의 통신 결과를 body, headers의 값의 변경에 따라 다시 가져오기 위해서는 컴포넌트 함수를 다시 로딩해야 한다. 컴포넌트 함수를 다시 로딩하기 위해서는 body, headers를 `useState`로 만들어서 변경사항이 일어나면 컴포넌트 함수가 다시 로딩되도록 만들어야 한다.
```jsx
const component = () => {
  const [headers, setHeaders] = useState(null);
  const [body, setBody] = useState(null);
  const { response, loading, error } = useAxios(url, method, body, headers);

  const someFunction = () => {
    setHeaders({/* ... */});
    setBody({/* ... */});
  };

  return (
    <>
     {/* ... */}
    </>
  )
}
```
- 커스텀 훅을 사용해서 body, headers의 값을 세팅하고 싶다면 위와 같은 로직을 만들어야 한다. 그냥 axios를 쓰는 것에 비해 보일러 플레이트가 오히려 더 많기 때문에 그렇게 좋은 코드라고는 할 수 없다.


## Reference
- https://dev.to/hey_yogini/useaxios-a-simple-custom-hook-for-calling-apis-using-axios-2dkj
