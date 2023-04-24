## 애플리케이션의 목적
- 컴퓨터가 가진 데이터를 컴퓨터를 사용하는 사람들이 보고 다룰 수 있도록 만드는 과정을 의미한다.

## MVC의 의미
- M은 Model을 의미한다. 모델은 데이터를 의미한다.
- V는 View를 의미한다. 뷰는 데이터가 보여지는 화면의 로직을 의미한다.
- C는 Controller를 의미한다. 컨트롤러는 모델의 데이터를 적절히 가공하여 뷰가 사용할 수 있도록 한다.
- 애플리케이션을 만들 때 크게 모델의 역할을 하는 부분과, 뷰의 역할을 하는 부분과, 컨트롤러의 역할을 하는 부분으로 분리하여 만드느 방법을 의미한다.

### 모델
- 컴퓨터가 저장하고 있는 데이터는 사람이 직접 보기에 불편하고 해석이 안 되는 경우도 있다.
- 사람이 컴퓨터에 저장된 데이터를 사용하기 위해서는 적절하게 가공된 형태의 데이터를 취득할 필요가 있다.
- 컴퓨터에 저장되어 있는 데이터를 프로그래밍의 코드에서 사용할 수 있는 형태로 가져오는 부분이 모델이다.

### 뷰
- 동일한 데이터라도 어디에서는 표 형식으로 어떤 곳에서는 그래프 형식으로 어떤 곳에서는 어떤 글 안에 포함는 경우가 있다.
- 또한 동일한 데이터라도 모바일 앱에서 보여 줘야 할 때도 있고 웹 화면에서 보여줘야 할 때도 있다.
- 각 뷰는 서로 다른 코드 구성을 가질 때가 많고 동일한 데이터라도 각 뷰에서 사용할 수 있는 형태로 코드를 가공해야 뷰에 보여줄 수 있는 경우가 많다.

### 컨트롤러
- 모델의 데이터는 서로 다른 코드 구성을 가진 뷰에 전달하기 위해서 데이터를 적절하게 가공하는 부분이다.
- 일반적으로 모델과 뷰는 각각 독자적인 포멧이 정해져 있기 때문에 모델에서 뷰로 데이터를 전달하기 위해서는 두 포멧 사이에 데이터 전달을 가능하게 하는 기능이 필요하고 이 부분이 컨트롤러의 역할에 해당한다.

## 뷰만 있는 경우
- 프로젝트 최상위 경로의 `examples` 폴더에 `patterOfMVC`라는 폴더를 만들고 `onlyView`라는 폴더를 만들고 `data.js`, `view.js`, `index.html` 파일을 만들자.

data.js
```js
const data = [
    '모델: 데이터와 비즈니스 로직을 관리합니다.',
    '뷰: 레이아웃과 화면을 처리합니다.',
    '컨트롤러: 명령을 모델과 뷰 부분으로 라우팅합니다.'
];
```
- 일반적으로 데이터베이스 또는 파일로 부터 데이터를 가져오는 작업은 복잡하다.
- 여기에서는 간단히 예시를 들기 위해서 단순한 배열 형식의 데이터를 사용하였다.

view.js
```js
const view = function () {
    const modelVelue = data[0];
    const viewValue = data[1];
    const controllerValue = data[2];
    
    return `
        <div>
            <div>${modelVelue.split(':')[0]}</div>
            <div>${modelVelue.split(':')[1]}</div>
        </div>
        <div>
            <div>${viewValue.split(':')[0]}</div>
            <div>${viewValue.split(':')[1]}</div>
        </div>
        <div>
            <div>${controllerValue.split(':')[0]}</div>
            <div>${controllerValue.split(':')[1]}</div>
        </div>
    `;
}

const render = function (htmlTag) {
    document.querySelector('body').innerHTML = htmlTag;
}

render(view())
```
- `view` 함수는 HTML 태그의 문자열을 반환한다.
- `render` 함수는 `body` 태그에 넣을 HTML 태그 문자열을 받아서 화면에 보여준다.
- `render(view())`는 `view()` HTML 태그 문자열을 만들어서 `body` 태그에 넣어 준다는 의미이다.
- `modelVelue.split(':')`라는 코드는 `'모델: 데이터와 비즈니스 로직을 관리합니다.'`라는 문자열을 `:` 문자를 기준으로 분리하여 `['모델', ' 데이터와 비즈니스 로직을 관리합니다.']`라는 배열로 만든다.
- `${modelVelue.split(':')[0]}`는 배열의 첫 번째 값인 `'모델'`이 출력되는 부분이고, `${modelVelue.split(':')[1]}`은 배열의 두 번째 값인 `' 데이터와 비즈니스 로직을 관리합니다.'`가 나온다.

```html
<body>
    <script src="./data.js"></script>
    <script src="./view.js"></script>
</body>
```
- 간략하게 나타내기 위해 HTML의 다른 태그는 생략하였고 스크립트 파일만 로딩을 하였다.

### 위 코드의 문제
- 데이터의 순서의 변경이 일어나면, 뷰에 보여지는 데이터도 변경이 된다.
- `'키워드 : 설명'`이라는 데이터의 구조를 알아야 위의 코드를 이해할 수 있다.
- HTML 태그에 들어간 자바스크립트 코드 때문에 위의 태그 구조가 정확히 무엇을 의미하는지 한 눈에 알기 어렵다.

## 이해할 수 있는 뷰 만들기
- 프로젝트 최상위 경로의 `examples` 폴더에 `patterOfMVC`라는 폴더에서 `onlyView` 폴더를 복사하여 `clearView`라는 폴더를 만들고 `data.js`, `view.js`, `index.html` 파일을 만들자.
- 나머지 코드는 그대로이며 `view.js`의 코드만 다음과 같이 바꾸자.
```js
const view = function () {
    const modelValue = data[0];
    const viewValue = data[1];
    const controllerValue = data[2];

    const modelDescription = {
        title : modelValue.split(':')[0],
        contents : modelValue.split(':')[1]
    };

    const viewDescription = {
        title : viewValue.split(':')[0],
        contents : viewValue.split(':')[1]
    };

    const controllerDescription = {
        title : controllerValue.split(':')[0],
        contents : controllerValue.split(':')[1]
    };
    
    return `
        <div>
            <div>${modelDescription.title}</div>
            <div>${modelDescription.contents}</div>
        </div>
        <div>
            <div>${viewDescription.title}</div>
            <div>${viewDescription.contents}</div>
        </div>
        <div>
            <div>${controllerDescription.title}</div>
            <div>${controllerDescription.contents}</div>
        </div>
    `;
}

const render = function (htmlTag) {
    document.querySelector('body').innerHTML = htmlTag;
}

render(view())
```
- `modelDescription`, `viewDescription`, `controllerDescription`라는 리터럴 오브젝트 3개를 만들었다.
- HTML 태그 구조에 있던 `modelValue.split(':')[0]`, `modelValue.split(':')[1]` 코드가 리터럴 오브젝트 쪽으로 이동하였다.
```js
<div>${modelVelue.split(':')[0]}</div>
<div>${modelVelue.split(':')[1]}</div>
```
- 위의 코드는 첫 번째 `<div>` 태그와 두 번째 `<div>` 태그 사이에 어떤 데이터가 들어갔는지 한 눈에 봐서 알수 없다.
```js
const data = [
    '모델: 데이터와 비즈니스 로직을 관리합니다.',
    '뷰: 레이아웃과 화면을 처리합니다.',
    '컨트롤러: 명령을 모델과 뷰 부분으로 라우팅합니다.'
];
```
- 위와 같은 배열의 구조를 알아야 어떤 데이터가 들어가 있는지 알 수 있게 된다.
```js
<div>${modelDescription.title}</div>
<div>${modelDescription.contents}</div>
```
- `<div>` 태그 안에 어떤 값이 들어가는지 알 수 없었지만, 위와 같은 방식을 이용해서 어떤 값이 들어갈지 좀 더 짐작하기 쉬운 코드를 쓸 수 있다.
- 의미적으로 알기 쉽게 코드를 쓰는 것을 프로그래밍 언어에서는 가독성을 높인다고 한다.

## 모델 만들어 보기
- 프로젝트 최상위 경로의 `examples` 폴더 하위의 `patterOfMVC`라는 폴더에서 `withoutController`라는 폴더를 만들고 `data.js`, `model.js`, `view.js`, `index.html` 파일을 만들자.

data.js
```js
const data = [
    '모델: 데이터와 비즈니스 로직을 관리합니다.',
    '뷰: 레이아웃과 화면을 처리합니다.',
    '컨트롤러: 명령을 모델과 뷰 부분으로 라우팅합니다.'
];
```

model.js
```js
class Model {
    constructor(data) {
        this.data = data;
    }

    get modelData() {
        return this.data.find(e => e.includes('모델'));
    }

    get controllerData() {
        return this.data.find(e => e.includes('컨트롤러'));
    }

    get viewData() {
        return this.data.find(e => e.includes('뷰'));
    }
}
```
- 모델은 데이터를 다룰 수 있는 기능을 제공한다.
- 위에서 클래스 문법을 사용했는데 우선 클래스에 대한 자세한 설명은 스킵한다. 일단 이런 게 있구나를 알고 넘어가도록 하자.
- `new model(data)`라는 방법으로 클래스를 객체를 생성할 수 있다. `cosnt modelObj = new model(data)`로 오브젝트를 변수에 넣어 `modelObj.modelData`, `modelObj.viewData` 등의 방법으로 사용할 수 있다.
- `new model(data)` 방법으로 사용하면 객체의 초기값으로 넣은 `data`는 객체를 생성할 때 실행되는 함수인 `constructor` 함수에 객체를 생성할 때 받은 `data`를 생성자 함수의 인자로 `constructor(data)`와 같이 전달한다. 그리고 `this.data`는 객체가 가지고 있는 `data` 변수이다. 객체가 가진 `this.data`는 객체를 생성할 때 전달한 `data`를 전달 받는다.
- `data.find(e => e.includes('모델'))`에서 `this.data`는 객체를 생성 `new model(data)` 할 때 `this.data`에 `data`를 전달한다. `data.js`에서 `data` 변수는 배열이다. `배열.find()` 문법은 배열에서 배열에 들어 있는 값을 차례로 확인하면서 첫번째로 매칭되는 대상을 찾는다. `e.includes('모델')`은 배열의 값 중에서 `'모델'`이란 문자열이 들어간 대상을 찾아서 그 값을 반환한다.
- 쉽게 말해서 `modelData` 메소드(함수)는 data 배열에서 `'모델'`이란 문자열이 들어간 배열을 찾는 메소드(함수)이며, `controllerData` 메소드(함수)는 data 배열에서 `'컨트롤러'`이란 문자열이 들어간 값을 찾는 메소드(함수)이며, `viewData` 메소드(함수)는 data 배열에서 `'뷰'`라는 문자열이 들어간 값을 찾는 메소드(함수)이다.

view.js
```js
const view = function () {
    const modelObj = new Model(data);
    const modelValue = modelObj.modelData;
    const viewValue = modelObj.viewData;
    const controllerValue = modelObj.controllerData;

    const modelDescription = {
        title : modelValue.split(':')[0],
        contents : modelValue.split(':')[1]
    };

    const viewDescription = {
        title : viewValue.split(':')[0],
        contents : viewValue.split(':')[1]
    };

    const controllerDescription = {
        title : controllerValue.split(':')[0],
        contents : controllerValue.split(':')[1]
    };
    
    return `
        <div>
            <div>${modelDescription.title}</div>
            <div>${modelDescription.contents}</div>
        </div>
        <div>
            <div>${viewDescription.title}</div>
            <div>${viewDescription.contents}</div>
        </div>
        <div>
            <div>${controllerDescription.title}</div>
            <div>${controllerDescription.contents}</div>
        </div>
    `;
}

const render = function (htmlTag) {
    document.querySelector('body').innerHTML = htmlTag;
}

render(view());
```
- `new Model(data)`는 클래스로 객체를 생성하는 문법이다.
- `modelObj.modelData`는 `data` 배열에서 모델 부분에 해당한는 데이터인 `'모델: 데이터와 비즈니스 로직을 관리합니다.'` 값이다.
- `modelObj.viewData`는 `data` 배열에서 뷰 부분에 해당한는 데이터인 `'뷰: 레이아웃과 화면을 처리합니다.'`값이다.
- `modelObj.controllerData` 는 `data` 배열에서 뷰 부분에 해당한는 데이터인 `'컨트롤러: 명령을 모델과 뷰 부분으로 라우팅합니다.'`값이다.
- 나머지는 앞선 `view.js` 예제와 동일하다.

### 위 코드의 좋은 점
```js
    const modelVelue = data[0];
    const viewValue = data[1];
    const controllerValue = data[2];
```
- `data` 배열에서 몇 번째에 위치하는 모델에 해당하는 데이터는 몇 번째 데이터인지, 뷰에 해당하는 데이터는 몇 번째인지, 컨트롤러에 해당하는 데이터는 몇 번째인지 일일이 확인해서 데이터를 넣었다.
```js
    const modelObj = new Model(data);
    const modelVelue = modelObj.modelData;
    const viewValue = modelObj.viewData;
    const controllerValue = modelObj.controllerData;
```
- 그에 반해 모델이 어떤 데이터를 가져 오는지 알려주기 때문에 데이터의 순서와 구조에 의존하지 않고 모델 데이터를 가져오고 싶을 때는 `data[0]`가 아닌 `modelObj.modelData`를 쓰면 되고, 뷰 데이터를 가져오고 싶을 때는 `data[1]`가 아닌 `modelObj.viewData`를 쓰면 되고, 컨트롤러 데이터를 가져오고 싶을 때는 `modelObj.controllerData`를 쓰면된다.

#### 모델이 없을 때의 단점 개선
- 데이터 순서의 변경에 따라서 뷰의 데이터도 변경이 되는 문제점이 있었지만, 모델을 사용하면 데이터의 순서에 상관 없이 모델에 해당하는 데이터, 뷰에 해당하는 데이터, 컨트롤러에 해당하는 데이터를 원하는 대로 뽑아낼 수 있기 때문에 데이터의 나열 순서가 변경이 되어도 뷰에 표시되는 순서에 영향을 주지 않는다.

### 위 코드의 나쁜점
- `'키워드 : 설명'`이라는 데이터의 구조를 알아야 위의 코드를 이해할 수 있다.
- `'키워드 : 설명'` 문자열 데이터 구조를 `오브젝트.타이틀`, `오브젝트.내용` 이런 식으로 만드는 과정이 있는데 뷰에서 만들다 보니까 뷰의 코드가 길어져 버리는 문제가 생긴다.
- `view()` 함수에서는 화면에 보여주는 구조에 대한 것만 최대한 보고 싶은데, 데이터를 가공하는 코드까지 보게 된다.