## description
```
git add .
git commit -m "save"
```

```
yarn eject
```

## ejected file and folder structure
```
|- config
  |-jest
  |-env.js
  |-getHttpsConfig.js
  |-modules.js
  |-paths.js
  |-pnpTs.js
  |-webpack.config.js
  |-webpackDevServer.confg.js
|- script
  |-build.js
  |-start.js
  |-test.js
```
## make absolute path
webpack.config.js file
```
test: sassRegex,
exclude: sassModuleRegex,
use: getStyleLoaders(
  {
    importLoaders: 3,
    sourceMap: isEnvProduction
      ? shouldUseSourceMap
      : isEnvDevelopment,
  },
  'sass-loader'
),
```

```
{
  test: sassRegex,
  exclude: sassModuleRegex,
  use: getStyleLoaders(
    {
      importLoaders: 3,
      sourceMap: isEnvProduction
        ? shouldUseSourceMap
        : isEnvDevelopment,
    }
  ).concat({
    loader : require.resolve('sass-loader'),
    options : {
      sassOptions: {
        includePaths: [paths.appSrc + '/component/65-nodeSass/styles'],
        sourceMap: isEnvProduction && shouldUseSourceMap
      },
    }
  }),
```

```
includePaths: [paths.appSrc],
```
세팅을 이렇게 하면 프로젝트 최상위를 기준으로 경로가 잡힌다.

```
includePaths: [paths.appSrc + '/component/65-nodeSass/styles'],
```
프로젝트 최상위 경로에서 `/component/65-nodeSass/styles'` 부분을 디폴트 경로로 하여 scss 경로가 잡힌다.

`component/65-nodeSass/styles/SassComponent.scss` 파일에서
```
// @import './styles/utils';
@import 'utils.scss';
```
바꾸면 `'utils.scss'` 이 경로에 `/component/65-nodeSass/styles'` 경로가 추가된 경로를 읽는다.

## 디폴트 포함 scss 설정
```
options : {
  sassOptions: {
    includePaths: [paths.appSrc + '/component/65-nodeSass/styles'],
    sourceMap: isEnvProduction && shouldUseSourceMap
  },
  prependData : `@import 'utils.scss';`
}
```
프로젝트 경로에서 `/component/65-nodeSass/styles/utils.scss`를 항상 포함하여 실행하도록 설정한다. (레이아웃 같은 거 설정할 때 사용)
