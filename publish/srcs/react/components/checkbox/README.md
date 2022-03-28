ver 1.0 ([github link](https://github.com/Komponent1/Komponent/ree/master/Vanilla/app/srcs/components/checkbox))

### 기능

1. 클릭시 체크가 활성화된다.
2. 재 클릭시 체크가 해제된다.

### 사용
1. 반드시 checkbox는 멀티로 사용되는 경우가 많으므로 해당 요소의 check와 check 변경 state를 외부에서 받아온다

~~~javascript
    props: {
        checked: boolean
        setCheck: Function
    }
~~~

### 특이사항
1. 요소의 크기에 유의하며 제작할것
2. event handler와 내부 실행함수는 비동기적으로 수행됨

### BUG
1. 슬라이드 이동중 FOUC가 꽤 자주 발생함
