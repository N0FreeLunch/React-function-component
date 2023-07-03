## prettier
- 프리티어는 자바스크립트 코드를 어떤 규칙에 따라 잘 정렬하는 기능을 제공한다.
- 자바스크립트는 동일하게 동작하는 코드를 다양한 스타일로 만들 수 있다. 프로젝트에 참가하는 여러 사람들이 여러 코드 스타일을 갖고 있다면 서로의 코드 스타일에 대한 불만을 가질 수 있다.
- 개발자마다 다양한 경험과 사고 방식을 갖고 있기 때문에 어떤 로직으로 코드를 만들 것인지에 대한 통제하기는 어렵지만, 코드 구성 및 로직 이외의 저마다 다른 코드의 탭, 띄어쓰기, 들여쓰기 등등의 최소한의 코드 스타일을 통일할 수 있는데 prettier와 같은 포메터를 통해서 이를 달성할 수 있다.
- 코드 포메터를 사용하여 여러 사람들 간의 코드 스타일을 통일할 수 있기 때문에, 좀 더 통일된 코드로 프로젝트 코드를 관리할 수 있다.

### editorconfig와의 차이
- `editorconfig`가 IDE에서 제공하는 기본적인 들여쓰기 간격, 개행 문자의 종류, 파일 마지막 줄을 비울지, 파일의 기본 인코딩 종류 등 프로그래밍 언어 이외의 설정을 하는 것에 반해, prettier와 같은 코드 포메터는 프로그래밍 언어의 코드 스타일을 정렬해 주는 기능을 한다.
- `editorconfig`가 IDE에서 글을 작성할 때 기본적으로 탭을 누르면 공백 문자의 갯수가 몇개 부여되고, 파일을 생성하거나 파일을 읽을 때 기본 인코딩을 설정하고, 파일을 저장할 때 불필요한 공백을 제거해 주는 등의 은연중에 글의 기본 포메팅을 바꾸어 주는 역할을 한다.
- 그에 반해 prettier는 사용자가 직접 포메터를 실행을 시켜서 포메터가 제공하는 규칙에 따라 코드의 스타일을 변경하고 이를 사용자가 저장하는 방식으로 이뤄진다.

### 어떤 코드 포메터를 사용해야 할까?
- 프로젝트에 참여하는 사람들은 다양한 IDE를 사용할 것이다. 이들 IDE 간의 코드를 일치시키는 것이 필요한데 특정한 IDE에서만 지원되는 포메터의 경우 해당 포메터를 지원하는 IDE를 쓰는 것을 강제하게 된다. 어떤 사람은 유료 IDE를 사용하는 것에 반해 어떤 사람은 무료 IDE를 사용하는데, 유료를 사용하던 사람들이 무료를 사용하는 사람들에게 비용을 대 주는 것이 아니라면 유료 IDE를 권유하기는 어렵다.
- 따라서 여러 IDE에서 지원되는 코드 포메터를 사용하는 것이 좋고, 자바스크립트의 경우에는 prettier가 유명한 만큼 다양한 IDE에서 지원되므로 어느 IDE를 사용하더라도 동일한 스타일의 코드 포멧을 생성할 수 있다는 장점이 있다.

### editorconfig의 설정과 충돌을 방지
- prettier와 같은 코드 포메터는 사용자가 직접 실행하여 사용한다. 일부 코드 스타일의 경우 prettier가 제공하는 기능과 editorconfig가 제공하는 기능이 일치하는 대상이 있는데 prettier를 실행하면서 editorconfig에서 설정한 스타일을 덮어 씌우게 된다. 따라서 editorconfig에서 제공하는 기능이라면 prettier의 설정에서 제거하거나 editorconfig의 스타일과 prettier의 스타일을 일치시켜 주는 것이 필요하다.
- prettier는 프로젝트 폴더에 `.editorconfig` 파일이 있는 경우, prettier와 중복되는 editorconfig의 설정을 주석 처리한다. [참고](https://prettier.io/docs/en/configuration.html#editorconfig)
> If options.editorconfig is true and an .editorconfig file is in your project, Prettier will parse it and convert its properties to the corresponding Prettier configuration. This configuration will be overridden by .prettierrc, etc.
- 따라서 `.editorconfig` 파일을 수정을 할 때 prettier가 변경하는 코드를 확인할 필요가 있다.

#### prettier는 `.editorconfig`를 어떻게 변경할까?
- 예시 코드를 보면...
```js
[*]
charset = utf-8
insert_final_newline = true
end_of_line = lf
indent_style = space
indent_size = 2
max_line_length = 80
```
- 위 파일을 다음과 같이 변경 시킨다.
```js
# Stop the editor from looking for .editorconfig files in the parent directories
# root = true

[*]
# Non-configurable Prettier behaviors
charset = utf-8
insert_final_newline = true
# Caveat: Prettier won’t trim trailing whitespace inside template strings, but your editor might.
# trim_trailing_whitespace = true

# Configurable Prettier behaviors
# (change these if your Prettier config differs)
end_of_line = lf
indent_style = space
indent_size = 2
max_line_length = 80
```

### prettier 설치하기
- 비쥬얼 스튜디오 코드를 사용하고 있다면 다음 [링크](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)로 설치할 수 있다.

### prettier 설정하기
- 자바스크립트 파일을 열고 F1 버튼을 누르고 `Format Document`를 검색한 후 클릭한다.
- Shift + Opt + F 키의 조합으로 검색할 필요 없이 `Format Document`를 실행할 수 있다.
- 비쥬얼 스튜디오의 기본 포메터인 `vscode.typescript-language-features`가 사용되고 있기 때문에, 다음과 같은 메시지가 나타난다.
> ''JavaScript JSX'' 파일에는 여러 포맷터가 있습니다. 그 중 하나는 기본 포맷터로 구성해야 합니다.
- 일단 취소를 하고 다음을 보자.
- 비쥬얼 스튜디오 최상단의 Code 메뉴 > 기본설정 > 프로필 > 컨텐츠 표시를 클릭한다. 프로필 항목 중에서 `setting.json` 파일을 보면
```json
    "[javascript]": {
        "editor.defaultFormatter": "vscode.typescript-language-features"
    },
```
- 위와 같이 비쥬얼 스튜디오 코드의 기본 포메터가 "vscode.typescript-language-features"으로 설정된 것을 확인할 수 있다.
- 다시 자바스크립트 파일에서 F1 버튼을 누르고 포메터를 프리티어로 바꾼 후 사용한다.
- `setting.json`를 보면 다음 항목이 추가되었다는 것을 알 수 있다.
```json
    "[javascriptreact]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    }
```

### 설정 파일 만들기
- 프로젝트 폴더 최상단에 `.prettierrc`를 만든다.
```json
{
  "singleQuote": true,
  "semi" : true,
  "useTabs" : false,
  "tabWidth": 2
}
```
- 기본적으로 prettier는 파일 포메팅 옵션을 가지고 있다. 위에 적는 것은 기존 옵션을 덮어 쓰기 위한 설정 또는 명시적으로 어떤 옵션이 적용되고 있는지 표시하기 위한 용도로 보면 된다.
- prettier는 `.prettierrc` 파일이 위치한 폴더를 포함한 모든 하위 폴더의 파일에 적용되는 옵션이다. 따라서 자바스크립트 파일 뿐만 아니라 모든 파일에 적용이 된다.
- 위 설정 파일이 만들어지면, F1 버튼을 눌러서 `Format Document`를 눌렀을 때 코드 포멧이 바뀔 때 디폴트 옵션보다 위 옵션이 우선적으로 적용된다.
- 오버라이드(overrides) 기능을 사용하면 특정 파일 확장자 및 폴더에 따라 기본 포메팅이 아닌 다른 옵션이 적용된 포메팅을 할 수 있다. 다음은 overrides 키워드를 사용한 예시이므로 따라 적용하지는 말자.
```json
{
  "semi": false,
  "overrides": [
    {
      "files": "*.test.js",
      "options": {
        "semi": true
      }
    },
    {
      "files": ["*.html", "legacy/**/*.js"],
      "options": {
        "tabWidth": 4
      }
    }
  ]
}
```

#### 자동 저장
- 파일을 저장할 때 마다 자동적으로 포메팅을 해 주는 기능이다.
- 기본적으로 prettier의 구성 파일인 `.prettierrc`이 있는 폴더와 그 하위 폴더의 모든 파일을 저장할 때 포메팅이 적용되기 때문에 포메팅을 하지 않을 대상이 있다면 제외해 주는 것이 필요하다.
- 프로젝트 폴더 최상단에 `.prettierignore`라는 파일을 만들고 `*.md`를 입력한 후 저장하도록 하자. 그러면 `.md` 확장자인 마크다운 파일은 저장할 때 포메팅이 적용되지 않는다. 그 외에도 파일을 저장할 때 자동으로 포메팅 되는 것이 마음에 들지 않는 경우에 `.prettierignore`에 파일을 추가하여 제외할 수 있다.
- 비쥬얼 스튜디오 코드 최상단의 Code메뉴에서 기본설정 > 설정 에서 `Format On Save` 항목을 체크한다. 이렇게 하면 저장을 할 때 마다 포멧이 적용된다.
- `settings.json` 파일을 보면 `"editor.formatOnSave": true`라는 옵션이 추가된 것을 확인할 수 있다.
- 저장시 자동으로 포메팅을 적용하게 만들면 `editorconfig`가 필요 없어진다. `editorconfig`는 자동 포메팅을 사용하지 않을 때 기본적으로 자동으로 적용되므로 자동 포메팅을 사용하지 않을 경우에 기본적으로 적용되는 것이므로 남겨 두는 것이 좋다. 