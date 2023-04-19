## NodeJS 버전업
- 기존 프로젝트를 애플실리콘을 사용하는 컴퓨터에서 사용하게 되었다.
- 기존 NodeJS 14 버전을 애플실리콘 기반의 컴퓨터에서 사용하기 위해서는 까다로운 방법으로 설치를 해야하며, 컴퓨터에서 직접 NodeJS를 빌드해야 하는 문제로 인해 애플실리콘을 지원하는 NodeJS 16 버전으로 옮길 필요성이 생겼다.
- ReactJS 프로젝트의 버전 업그레이드 방법에 관한 글이다. NodeJS 14 -> NodeJS 16

## 16버전의 NodeJS를 사용하는지 체크하기
```sh
node --version
```
- 위 명령어를 사용하면 `v16.19.1`라는 메시지가 나온다. `v16` 이상으로 나오면 문제가 없으며 `v16.19` 이상을 권장한다.
- 만약 위 버전이 아니라면 버전에 맞는 NodeJS를 사용하도록 하자.

## 버전 업그레이드 전략
- NodeJS 버전에 맞는 패키지들의 종속성을 모두 업데이트하는 것은 쉽지 않은 일이다.
- 굉장히 많은 NodeJS 패키지의 변경을 확인해야 하는 문제점이 있다.
- 리액트 CRA로 새롭게 리액트 프로젝트를 설치하고 유저가 만들고 변경한 파일 및 폴더 및 코드를 업데이트 하는 방법을 사용한다.

## 버전 업그레이드
1. 리액트 CRA 설치하기
```
npm init react-app react-function-component
```
- 현재 최상위 프로젝트의 하위에 `react-function-component`란 폴더를 만든다.

2. 스켈레톤 src 폴더 삭제
```sh
rm -rf react-function-component/src
```

3. `src` 폴더 이동
```sh
mv src react-function-component/src
```
- 사용자가 만든 리액트 파일을 사용하도록 `src` 폴더를 새로운 리액트 CRA로 이동

4. `README.md` 파일 이동
```sh
mv README.md react-function-component/README.md
```
- 기존에 사용하던 `README.md` 파일을 사용하도록 새로운 리액트 CRA로 이동

5. `config` 폴더 이동
```sh
mv config react-function-component/config
```
- 기존에 사용하던 `config` 폴더의 파일을 사용하도록 새로운 리액트 CRA로 이동

6. `public` 폴더 이동
```sh
mv public react-function-component/public
```
- 기존에 사용하던 `public` 폴더의 파일을 사용하도록 새로운 리액트 CRA로 이동

7. `node_modules` 폴더 삭제
```sh
rm -rf node_modules
```
- `.gitignore` 파일을 옮기면 기존에 프로젝트 폴더에 존재하던 `node_modules`의 git 추적을 배제해야 한다.

8. `.gitignore` 파일 이동
```sh
mv .gitignore react-function-component/.gitignore
```
- 기존에 사용하던 `.gitignore` 파일을 사용하게 하기 위해서 새로운 리액트 CRA로 이동

9. 새로운 리액트 CRA를 제외한 프로젝트의 모든 파일 및 폴더 삭제
```sh
find . -maxdepth 1 ! -name 'react-function-component' ! -name '.git' ! -name '.' -type fd -exec rm -r -v {} +
```

10. 새로운 리액트 CRA 폴더의 `.`으로 시작하는 파일 모두 프로젝트 최상위로 이동
```sh
mv ./react-function-component/.* ./
```

11. 새로운 리액트 CRA 폴더의 `.`으로 시작하지 않는 모든 파일 및 폴더 프로젝트 최상위로 이동
```sh
mv ./react-function-component/* ./
```

12. 기존 리액트 리액트 CRA에 설치 되었던 패키지 다시 설치
```sh
npm i prop-types --save
npm i node-sass -save--dev
npm i sass-loader -save--dev
npm i open-color include-media
npm i classnames
npm i styled-components
```

13. 지원하지 않는 패키지 교체
```sh
npm uninstall node-sass
npm install --save-dev sass
```
- NodeJS 16 버전에서 `node-sass` 패키지는 더 이상 지원되지 않는 패키지이다.
- `sass` 패키지로 변경되었으므로 새로운 패키지를 설치한다.

14. 패키지 변경으로 사용할 수 없는 컴포넌트 제외하기
```
src/component/66-create-react-app-config/SassComponent.scss
```
- 위 경로의 모든 코드를 주석 처리한다.
- `node-sass` 패키지를 사용한 코드는 더 이상 사용할 수 없기 때문에 `sass` 패키지에 맞춰서 모든 코드를 변경 해 줘야 한다.
- 호환이 될 수 있도록 변경되기 전에는 일단 주석 처리를 하자.

```
src/componentList.jsx
```
- 위 경로의 코드에서 다음 코드를 주석처리 한다.
```
// import Component65 from './component/65-nodeSass/SassComponent.jsx';
```
```
// <Component65/>,
```
- `node-sass` 패키지를 사용한 코드는 더 이상 사용할 수 없기 때문에 컴포넌트 코드를 사용할 수 있도록 수정할 때까지 컴포넌트를 로드하지 않도록 하자.