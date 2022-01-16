# Scrollspy

## 주의할 점

- scroll event
  - scrollingElement → scroll 요소에 대한 처리
  - scroll 이벤트는 발생이 많이 되므로 최적화에 주의해야한다.

- height 계산
  - element의 height를 offset과 함께 게산하는데 유의한다

## 설계하기

- nav를 클릭했을때 해당 위치로 scrolling한다.
- 현재 화면에 보이는 오브젝트에 대한 nav가 색이 변한다(active 상태)
  - 해당요소의 특정 위치가 특정 영역보다 위에 있을 시 해당 요소가 보여지는 요소로 처리한다
  - **브라우저의 크기와 관계없이 동작할 수 있어야 한다**

## useRef를 사용한 리스트 observing 처리

```jsx
const refs = useRef(Array.map(() => React.createRef()));

<elem ref={refs.current[idx]}>
```
