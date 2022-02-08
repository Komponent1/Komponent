# infinite Scroll

## 주의할점

- scroll evnet가 포함되면 반드시 이벤트 발생 빈도의 조절을 고려해야함
    - Intersection Observer, debounce, throttle 등등
- effect 하나당 하나의 state변화를 다루는 부분에 유의할것

## 설계하기

- API로 받아온다고 가정한다.(pagination 방식이라고 가정하자)
- 최초에 특정 숫자의 목록 리스트를 보여준다
- 스크롤이 마지막에 도달했을때 API를 호출하여 다음 목록을 가져온다
- API를 가져오는 동안은 loading에 대한 표시를 한다.
    - 최초에 가져올때, 중간에 새 값을 가져올때 2개의 경우를 생각해야한다.

## 특이한점

- React에서의 observer와 JS에서의 observser의 차이
    - js의 경우 이전 랜더링이 끝나기 전까지 랜더의 값이 변하지 않지만, react의 경우는 이전 랜더와 관계없이 다음 intersecting이 동작한다(아마 useEffect의 차이로 예상됨)

## 해결 못한 부분
- 최초 랜더링시 trigger의 위치에 있으면 trigger observing이 2번 돌게됨
    - 타이밍상 최초의 `false`가 `true`가 되기 전이라 두번 돌게됨(해결 아직 못함)