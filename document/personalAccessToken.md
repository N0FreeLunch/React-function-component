## github에 푸시할 때 토큰 문제 해결하기
- github에서 personal access token을 발급받고 해당 토큰을 다음과 같이 `git origin`에 추가한다.
```
git remote remove origin
git remote add origin Personal_access_token@github.com/N0FreeLunch/Repository_name.git
```
- 기존의 `git origin`에 저장된 값을 지우고 personal access token을 사용한 값을 넣어준다.