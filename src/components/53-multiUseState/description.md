### useState
```
```

### 사용하지 말아야 할 때
- 여러개의 useState를 사용하지 말아야 할 때

```
const changeHandler = () => {
  setState1(e.target.value);
  setState2(e.target.innerText);
}

reutrn (
  <input
    {/* ... */}
    onChnage={changeHandler}
  />
);
```
- 하나의 input을 바꾸는데 setState1, setState2 둘다 업데이트 해야 한다.
- 랜더링의 효율을 위해서는 setState1가 실행되자마자 업데이트가 되는 것이 아니라 지연실행이 되어야 한다. 곧 값만 세팅하고 업데이트 되어야 할 타임에 세팅된 setState1과 setState2의 업데이트를 종합해서 하는 것. 랜더링이 두번 일어나는 것이 아니라 한 번만 일어나야 한다.
