ver 1.0 ([github link](https://github.com/Komponent1/Komponent/tree/master/Vanilla/app/srcs/components/contextmenu))

### 기능
1. menu를 클릭하였을때 context menu가 생성된다
2. 다른 context menu를 클릭시 혹은 외부 클릭시 해당하는 context menu를 제외한 context menu가 사라진다

#### 사용
1. menu와 context menu를 구성하는 string을 리스트로 받아 사용

~~~javascript
type Data = {
    menu: string,
    context: string
}
parameter: {
    datas: Data[]
}
~~~

### 특이사항
1. 위치 포지셔닝을 client Event 상 좌표로 제어한다
- clickEvent 좌표

```jsx
e.offsetX, e.offsetY //absolute 기준으로 position
e.pageX, e.pageY // fixed 기준으로 position
e.clientX, e.clientY // 브라우저에서 보여지는 영역을 기준
e.screenX, e.screenY // 모니터 기준
```
