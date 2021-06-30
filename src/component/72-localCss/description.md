webpack.config.js에서
```
options: cssOptions,
```
을
```
options: {
  ...cssOptions,
  modules: {
            localIdentName: '[name]__[local]___[hash:base64:5]'
        }
},
```
세팅으로 바꿔야 동작한다.
