Wrapper 쪽에
```
<ScrollBox ref={ref => this.scrollBox = ref}/>
```

이 부분 코드가 this.scrollBox라는 멤버변수에 ScrollBox라는 JSX 태그를 가리키게 한 것

```
<button onClick={() => this.scrollBox.scrollToBottom()}>To bottom</button>
```

버튼은 this.scrollBox가 태그를 가리키고 있기 때문에 this.scrollBox를 사용할 수 있게 된다.

this.scrollBox는 ScrollBox라는 JSX 태그를 가리키고 있고

JSX 태그는 ScrollBox 컴포넌트에서 정의한 scrollToBottom 멤버 메서드를 가지고 있다.

ScrollBox 컴포넌트의 scrollToBottom 멤버 메서드를 호출하게 되고 가장 밑으로 가게 된다.


```
<div
  style={style}
  ref={ref => {this.box=ref}}
>
```

this.box라는 부분은 변수 style에 들어간 스타일을 반영한 태그를 선택한 대상이다.
화면에는 그라데이션이 들어간 영역의 태그이다.

```
scrollToBottom = () => {
  const {scrollHeight, clientHeight} = this.box;
  this.box.scrollTop = scrollHeight - clientHeight;
}
```

그라데이션 영역의 태그, 엘리먼트에서 scrollHeight, clientHeight 두 가지 속성을 봅아내고
그라데이션 영역의 스크롤이 이뤄지는 길이 - 그라데이션 영역의 화면의 길이 = 스크롤이 이뤄지는 부분의 아랫 부분 남은 길이가 되고

이 남은 길이 만큼 this.box.scrollTop에 지정을 하게 되면

그라데이션 영역의 상단에서 남은 길이만큼 떨어져서 스크롤의 시작 부분이 정해지기 때문에

화면에 보이는 영역은 그라데이션 영역의 마지막 부분을 보여주게 된다.
