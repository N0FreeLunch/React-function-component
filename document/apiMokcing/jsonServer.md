## json-server

### json server 설치하기
```sh
npm install json-server
```

### 데이터 만들기
- 먼저 db.json라는 파일을 만든다. apiMockServer라는 폴더를 만든 후 이 내부에 db.json을 만들도록 하자.
```
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
