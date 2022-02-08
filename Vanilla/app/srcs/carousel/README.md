# Carousel

## 설계하기

- 우측 화살표를 누르면 다음 이미지로 이동한다
- 좌측 화살표를 누르면 이전 이미지로 이동한다
    - 모든 이동은 이동중에 중복이동이 발생하지 않는다
- 이동시에는 transition: transform으로 유연하게 이동한다
- 이동은 무한루프로 동작한다
    - 각 요소의 마지막 요소가 반대편 마지막에 위치하도록 하고
    - 이동 후 원 위치로 이동한다(마치 이전 요소가 그대로 있는것처럼 보이게)
    - 원위치 이동시 transition을 통해 이동 효과가 없는것처럼 보이게 한다

## 구조

- 외부에 래퍼 존재
- 래퍼 내부에 slide 주체가 있을것
- slide 주체 내부에 엘리먼트 리스트를 가지고 회전
- input으로 엘리먼트를 요소를 받을 것
- 받은 엘리먼트에 앞 뒤에 마지막 요소를 추가하는 함수를 만들것

## 테크닉

- **transitionend**: transition이 끝나는 상황에서 발생하는 핸들러

## 주의할점

- 동작의 유의성에 대하여
    - event handler와 내부 실행함수는 비동기적으로 수행됨

```jsx
const move = () => {
	if (isTransitioned) return;
	/* 이 경우 transitionend setProperty와 동시 동작하므로 정상 동작하지 않음*/
	...
}

따라서

button.onclick = () => {
	if (isTransitoined) return; 으로 처리해야한다
	move(...);
}
```