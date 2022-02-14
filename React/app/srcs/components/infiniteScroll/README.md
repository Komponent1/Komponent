ver1.0 ([github link](https://github.com/Komponent1/Komponent/ree/master/Vanilla/app/srcs/components/infinitescroll))

### 기능
1. 기본적인 pagination을 기반으로한 무한 리스트 구현
2. 스크롤을 내려 마지막에 도달하면 다음 리스트를 서버로부터 받아 랜더링

### 사용
1. 데이터를 가져오는 API fethcer를 받아서 동작시킨다

~~~javascript
parameter: {
    fethcer: (any) => Promise<data>
}
~~~

### 특이사항
1. scroll evnet가 포함되면 반드시 이벤트 발생 빈도의 조절을 고려해야함
    - Intersection Observer, debounce, throttle 등등

### BUG
1. trigger 가 연속적으로 observing된 경우 나중 데이터가 우선 로드될 수 있음