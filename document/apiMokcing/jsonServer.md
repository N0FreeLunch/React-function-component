## json-server

### json server 설치하기
```sh
npm install json-server
```

### 데이터 만들기
- 먼저 db.json라는 파일을 만든다. apiMockServer라는 폴더를 만든 후 이 내부에 db.json을 만들도록 하자.
```json
{
    "posts": [
        { "id": 1, "title": "json-server", "author": "typicode" }
    ],
    "comments": [
        { "id": 1, "body": "some comment", "postId": 1 }
    ],
    "profile": { "name": "typicode" }
}
```

#### json 파일의 문법 제약
- 순수 json 파일은 자바스크립트 코드의 오브젝트를 표현하는 json과 달리 형식이 좀 더 엄격하다. 키 값을 문자열로 감싸 주어야 한다던가 마지막에 나열된 대상 뒤에는 콤마(,)를 쓸 수 없는 제약이 있다.
- 예를 들어 마지막에 나열된 `"profile": { "name": "typicode" }`의 맨 뒤에 `"profile": { "name": "typicode" },`와 같이 사용할 수 없고 `profile: { "name": "typicode" }`와 같이 `"profile"` 부분을 문자열로 감싸지 않은 표현을 사용할 수 없다.

#### json 서버의 데이터 제공 단위
- json-server는 위의 정의된 데이터를 json 형식의 http API 전송의 response 데이터로 사용된다.
- 이 때 response의 json으로 반환될 수 있는 데이터는 가장 바깥의 {}의 첫번째 깊이(depth)의 대상만 데이터로 제공된다.
- 위의 예에서 데이터의 단위는 `posts`, `comments`, `profile`이며, `posts.body`, `profile.name` 등의 접근과 같이 첫 번째 키의 값 안에 있는 대상으로는 접근 할 수 없다.

### 서버 실행 해 보기
문법
```
(npx_또는_yarn) json-server --watch 데이터_json_파일_경로
```
```
npx json-server --watch apiMockServer/db.json
```
- `npm`을 통해서 패키지를 인스톨 했다면 `npx`로, `yarn`을 통해서 설치했다면 `yarn`으로 명령어를 시작한다. `-g` 옵션으로 글로벌로 설치했다면 `npx`, `yarn` 없이 `json-server`만 입력 해 주면 된다.
```
Resources
http://localhost:3000/posts
http://localhost:3000/comments
http://localhost:3000/profile

Home
http://localhost:3000
```
- 실행을 하면 위와 같은 결과가 나오는데, 데이터 파일(`db.json`)의 첫 번째 키가 경로가 된 것을 알 수 있다.
- 간단하게 curl이라는 명령으로 리퀘스트를 서버로 보낼 수 있는데 `curl http://localhost:3000/posts`을 해 보자. 그럼 다음과 같은 결과 값을 얻을 수 있다.
```
[
  {
    "id": 1,
    "title": "json-server",
    "author": "typicode"
  }
]
```
- json 파일의 첫 번째 키에 매핑되는 값이 리스폰스 데이터가 된 것을 확인할 수 있다.
- CLI에 `curl http://localhost:3000/comments`, `curl http://localhost:3000/profile` 등도 입력해 보자.

### http method
- http method란 http 통신에서 데이터를 전송하는 규약에 관한 것이다. 가장 대표적인 것으로 GET, POST가 있으며 GET은 html, css, js 등 웹 서버에 있는 파일을 가져오는 용도이며, POST는 form에 입력한 데이터를 전송하는 역할을 한다.

 PUT, DELETE
- `curl -X POST http://localhost:3000/comments`

### 복잡한 라우터 정의하기
- json-server에서 디폴트로 제공하는 라우팅 경로는 데이터 파일(db.json)의 첫 번째 깊이의 키에 할당된 값이다.
```
{
    "posts": 값,
    "comments": 값,
    "profile": 값
}
```
- 위 json 파일의 가장 바깥 중괄호에서 접근되는 키 posts, comments, profile이 url의 path가 된다.
```
도메인/posts
도메인/comments
도메인/profile
```
- url의 path의 /으로 나뉘는 각 부분을 `/path/segment` path segment라고 한다.
- json-server의 path segment는 `/posts`, `/comments`, `/profile`으로 하나로 구성되어 있다.
```
{
    "posts/segment": 값,
    "comments/segment": 값,
    "profile/segment": 값
}
```
- json-server에서는 위와 같은 방식으로 json 데이터의 키 값을 설정할 수 없다.
- 여러개의 path segments로 이뤄진 경로를 만들기 위해서는 라우터를 정의해 주어야 한다.

#### 라우터 파일 만들기
- `apiMockServer` 폴더에서 `routes.json`이란 파일을 만들자.
```json
{
  "/api/*": "/$1",
  "/:resource/:id/show": "/:resource/:id",
  "/posts/:category": "/posts?category=:category",
  "/articles?id=:id": "/posts/:id"
}
```
- routes.json에서 json의 키는 url의 path 형식을 의미하며, 값은 디폴트 path에 해당한다.
- 위 라우터 파일의 왼쪽 부분인 `"/api/*"`, `"/:resource/:id/show"`, `"/posts/:category"`, `"/articles?id=:id"`는 접근할 수 있는 경로의 형식을 지정한 곳으로 express 라이브러리에서 사용하고 있는 라우팅 방식의 일부 표현을 사용할 수 있다. 하지만 express에서 다양한 라우팅 문법을 제공하는 것에 반해서 json-server에서는 `*`와 `:파라메터`을 사용하는 제한적인 문법을 지원한다.
- express에서 사용하는 라우팅 규칙은 다음을 참고하자. `https://expressjs.com/en/guide/routing.html`으로 되어 있다. express에서 사용하는 라우팅 포멧의 방식은 [path-to-regexp](https://github.com/pillarjs/path-to-regexp) 라이브러리의 방식에서 가져왔다고 한다.

#### 라우터 실행해 보기
문법
```
(npx_또는_yarn) json-server --watch 데이터_json_파일_경로 --routes 라우트_json_파일_경로
```
```sh
npx json-server apiMockServer/db.json --routes apiMockServer/routes.json
```
- 위의 명령어로 실행을 하면 Resources와 Other routes라는 항목이 나온다.
```
Resources
http://localhost:3000/posts
http://localhost:3000/comments
http://localhost:3000/profile

Other routes
/api/* -> /$1
/:resource/:id/show -> /:resource/:id
/posts/:category -> /posts?category=:category
/articles?id=:id -> /posts/:id
```
- Other routes의 path 형식인 왼쪽 키에 매칭되는 대상은 오른쪽의 형태로 변환되는데 이것이 Resources의 대상과 연결된다.
- 예를 들어 `/api/*`라는 라우트 포멧이라면 `/api/posts`로 접근하게 되면 `/posts`로 변환이 되어 Resources의 `http://localhost:3000/posts`에 연결되는 방식이다.
- 따라서 Resources의 path의 깊이가 1으로 정의되므로 라우트를 정의할 때 값에 해당하는 부분은 path의 깊이(depth)가 하나여야 한다.
- 기본적으로 Resources에서 제공되는 경로에 접근이 가능하고, Other routes의 형식에 매칭되는 경로에도 접근이 가능하다.
- 라우터를 사용하면 `curl http://localhost:3000/comments`에도 접근이 가능하지만, `/api/* -> /$1` 부분에 의해 제공되는 경로인 `curl http://localhost:3000/api/comments`에도 접근이 가능하다.

#### 라우터 용어
- path segment : url의 path에 `/`와 `/` 사이에 있는 값을 path segment, 한국어로는 경로 단편, 경로 조각 등으로 부를 수 있다. 일반적으로 통일되어 쓰이는 용어가 없기 때문에 path segment라고 부르도록 하자.
- url 파라메터 : url의 형식을 지정한 부분에서 url의 path segment 형식이 다양한 문자열을 받을 수 있는 부분을 url 파라메터라고 부른다. 프로그래밍 언어에서 함수의 파라메터는 외부에서 입력한 다양한 값을 받아서 함수 내부로 전달하는 역할을 하는데, url 파라메터도 url 형식의 url 파라메터에 해당하는 부분에 문자열을 입력하면 이를 라우터 내부의 대상에 전달한다.

#### 라우터 문법 알아보기
- `"/api/*"`, `"/:resource/:id/show"`, `"/posts/:category"`, `"/articles?id=:id"` 부분에 해당하는 왼쪽의 키 부분은 url의 형식에 해당하는 부분이며, `*`은 임의의 path에 해당하는 문자열를 받을 수 있으며, `:id`, `:category` 부분도 path segment에 해당하는 문자열을 받을 수 있다.
- `"/api/*": "/$1",` : `*`는 와일드 카드 문자 (wildcard character)라고 부르는 대상이다. 와일드 카드 문자는 지정된 문자열을 매칭하는 것이 아닌 거의 대부분의 문자열을 매칭할 수 있는 기능을 가진다. 와일드카드(`*`) 부분에 어떤 path에 해당하는 값을 주는 예를 보자. `/api/posts`, `/api/comments`, `/api/profile`이런 식으로 path를 접근했을 때 *는 라우터에 정의된 매칭 규칙에 따라 `/posts`, `/comments`, `/profile` 뿐만 아니라 path의 깊이(depth)가 2인 `user/1`, `post/1`의 값에도 접근할 수 있다. 단, 데이터에 접근하기 위해서는 모두 Resources 라우터의 대상과 매칭되어야 한다.
- 리소스 라우터의 `curl http://localhost:3000/comments`와 `curl http://localhost:3000/comments/1`으로의 접근을 라우터를 정의하는 것으로 다른 path인 `curl http://localhost:3000/api/comments`와 `curl http://localhost:3000/api/comments/1`으로 할 수 있다.
- 와일드 카드의 문법에 대해 좀 더 살펴 보면 `"/api/*/edit/*"`와 같은 방식으로 와일드카드를 2개 쓰게 되면 첫 번째 와일드 카드에 해당하는 대상은 `$1`의 값으로 받을 수 있고, 두 번째 와일드 카드에 해당하는 대상은 `$2`의 값으로 받을 수 있다. 그래서 `"/api/*"`에서 *에 해당하는 문자열은 `/$1`에서 `$1`에서 받는다.
- `:파라메터`에 해당하는 문법은 키에서 지정한 `:파라메터` 부분이 값의 `:파라메터` 부분으로 전달된다. `*`가 `/posts`, `/comments`, `/profile`, `user/1`, `post/1`와 같이 Resources 라우터에서 허용한 여러 depth를 전달할 수 있는 것과 달리 `:파라메터`는 하나의 path segment만 전달한다.
- `/:resource/:id/show -> /:resource/:id`의 예제를 살펴보면 `/posts/1/show`으로 접근을 했을 때, Resources 라우터인 `/posts/1`으로 보내버린다는 의미를 가진다.

## 옵션들
### PORT
- 기본적으로 json 서버의 port는 3000이다. 많은 로컬 서버들이 3000 포트를 사용하는 경우가 많기 때문에 3000 포트는 이미 react 등의 개발에서 사용하고 있어서 다른 port를 사용하고 싶을 때 ` --port=포트번호 ` 옵션 또는 ` -p 포트번호 ` 옵션을 넣어 주도록 하자.
```sh
npx json-server apiMockServer/db.json --routes apiMockServer/routes.json --port=3010
```
```sh
npx json-server apiMockServer/db.json --routes apiMockServer/routes.json -p 3010
```

### CORS
- 최근의 vue, react, svelte 등의 애플리케이션은 개발 서버 환경에서 작업이 이뤄진다. 프론트앤드에서 html, css, js를 제공하는 서버와 API 서버의 도메인이 다르게 구성되는 경우가 대부분이다. 도메인은 `https://github.com/typicode/json-server`에서 `github.com` 부분과 같이 port 번호가 없는 경우일 수도 있지만, `localhost:3000`과 같이 port 번호가 다른 경우에도 서로 다른 도메인으로 판단한다. 예를 들어 react를 개발하는 로컬 서버는 `http://localhost:3000`인데 API 서버도 `http://localhost:3456`이라면, 서로 다른 도메인으로 판단한다.
- 기본적으로 브라우저는 서로 같은 도메인이 아니라면 CORS 에러를 발생시킨다. 이는 브라우저에서만 일어나므로 브라우저에서 통신을 하지 않는 `curl http://localhost:3000/posts`와 같은 터미널의 통신 명령은 CORS에러가 발생하지 않는다. CORS 에러를 발생시키는 것은 다른 도메인으로 통신하는 것이 보안상 취약점으로 사용될 수 있기 때문에 허가하지 않는다는 정도로만 알아 두자.
 - API 서버는 별개의 프로그램이므로 보통은 html, css, js를 배포하는 서버와 별도의 도메인에서 동작하도록 만드는 경우가 많다. 또한 로컬 개발에서도 서로 포트가 다르게 실행된다. 따라서 API 서버에서는 도메인이 다른 곳에서 요청된 전송이더라도 허가한다는 CORS 설정을 해 준다.
 - 서버에서 특정 도메인에 대한 CORS 설정을 하면 해당 도메인과의 통신이 허가되는데, 서버는 http 통신의 response에 `Access-Control-Allow-Origin`라는 키와 값으로 도메인을 갖는 헤더를 돌려 준다. 그러면 브라우저는 서버에서 허용한 통신이므로 도메인이 다르더라도 통신을 허락한다. 하지만 서버에서 `Access-Control-Allow-Origin`의 값이 리스폰스의 헤더에 없거나 허가된 도메인이 아닌 경우에는 브라우저는 통신을 막는다.
 - 기본적으로 json-server도 CORS가 허가되어 있지 않기 때문에 허가 해 주어야 한다. 간단한 옵션으로 모든 도메인에서 접근할 수 있도록 허가할 수 있는데, json-server를 실행하는 명령에 ` --no-cors ` 또는 ` --nc `라는 옵션을 주면 된다.
```sh
npx json-server apiMockServer/db.json --routes apiMockServer/routes.json --port=3010 --no-cors
```
```sh
npx json-server apiMockServer/db.json --routes apiMockServer/routes.json --port=3010 --nc
```
