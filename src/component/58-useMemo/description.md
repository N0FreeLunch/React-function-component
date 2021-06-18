```
<b>average : </b>{getAverage(list)}
```
랜더링 될 때
```
{getAverage(list)}
```
를 계속 실행 함

### 비효율적인 랜더링
- input 태그에 값을 넣을 때 마다 랜더링이 되기 때문에 랜더링 할 때 getAverage를 실행하기 때문에 효율이 떨어짐

### useMemo를 사용하지 않고 랜더링 최적화를 한다면
```
const [numberList, setNumberList] = useState([0]);
const [average, setAverage] = useState(0);
```
을 사용해서
```
const prepareCalculateAverage = (e) => {
  setSum(setNumberList([
    ...numberList,
    e.target.value
  ]));
}

const getAverage = () => {
  setAverage(sum/count);
}
```
- 숫자를 추가하는 버튼과 평균을 계산하는 버튼을 따로 만들어서 평균을 내고 싶을 때 계산하도록 만들어 줘야 연산량을 줄일 수 있다.

#### 위와 같이 코드를 짠 이유
- 평균을 계산하기 위해서는 단순히 가산을 하기 어렵다.
- [10,20,30,40]
- 10, 20의 평균은 15
- 15, 30의 평균은 22.5
- 10,20,30의 평균은 20
- 15라는 평균이 나온 후 30을 추가해서 평균을 계산하기 위해서는 (15 * 2 + 30)/3의 과정을 거쳐야 한다.
- 따라서 평균을 낼 때는 모든 수를 저장한 후 이를 모아서 평균을 내야 한다.

### useMemo 사용
