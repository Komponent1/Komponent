ver 1.0 ([github link](https://github.com/Komponent1/Komponent/tree/master/Vanilla/app/srcs/components/carousel))

### 기능

1. 우측 화살표를 누르면 다음 이미지로 이동한다
2. 좌측 화살표를 누르면 이전 이미지로 이동한다
3. 모든 이동은 이동중에 중복이동이 발생하지 않는다
4. 이동은 무한루프로 동작한다

### 사용
1. 캐러셀에서 보여줄 element list를 받아서 사용

~~~javascript
    parameter: {
        elems: HTMLElement[]
    }
~~~

### 특이사항
1. 요소의 크기에 유의하며 제작할것
2. event handler와 내부 실행함수는 비동기적으로 수행됨

### BUG
1. 슬라이드 이동중 FOUC가 꽤 자주 발생함
