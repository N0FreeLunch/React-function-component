## 컴포넌트 내부에서만 동작하는 CSS 만들기

스타일 속성에 넣는 것이 아닌, 클래스 안에 CSS 스타일을 넣는다?
```
<div className={styles.wrapper}>
</div>
```


### 모듈로 로드해도 컴포넌트 이외에도 적용되는 CSS
- \:global 키워드 사용
```
:global .something {
  font-weight: 800;
  color: aqua;
}
```
