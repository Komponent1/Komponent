# infinite Scroll

## 주의할점

- scroll evnet가 포함되면 반드시 이벤트 발생 빈도의 조절을 고려해야함
    - Intersection Observer, debounce, throttle 등등

## 설계하기

- API로 받아온다고 가정한다.(pagination 방식이라고 가정하자)
- 최초에 특정 숫자의 목록 리스트를 보여준다
- 스크롤이 마지막에 도달했을때 API를 호출하여 다음 목록을 가져온다
- API를 가져오는 동안은 loading에 대한 표시를 한다.
    - 최초에 가져올때, 중간에 새 값을 가져올때 2개의 경우를 생각해야한다.