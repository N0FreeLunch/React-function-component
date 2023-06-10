# Function Component React
- 함수형 컴포넌트를 사용한 리액트 코드 연습
- \[리액트를 다루는 기술\]이라는 책을 참고하였지만, 많은 내용은 좀 더 쉽고 상세하게 설명하기 위해 개인적으로 추가한 내용 위주로 구성됨
- [스터디 내용 정리](./document/README.md)

## Install
- NodeJS 버전 16을 사용한다.
```
npm install
```

### development mode
```
npm start
```

### test mode
```
npm test
```
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


### production mode
```
npm run build
```
- build 폴더에 빌드된 파일들이 만들어진다. 이 때 이 파일들을 브라우저에 띄우기 위해서는 서버가 필요하다.
- 기본적으로 맥북에는 python2.7 버전이 깔려져 있고, 이를 그대로 이용하면
```
cd build
python -m SimpleHTTPServer 3000
```
- 위와 같은 방식으로 서버를 열 수 있고, 빌드된 리액트 페이지를 태스트 해 볼 수 있다.

### reference
- \[book\] 리액트를 다루는 기술 \[개정판\] (ISBN : 9791160509328)
- https://github.com/gilbutITbook/080203