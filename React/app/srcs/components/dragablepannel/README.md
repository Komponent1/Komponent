ver 1.0 ([github link](https://github.com/Komponent1/Komponent/tree/master/Vanilla/app/srcs/components/dragablepannel))

### 기능
1. pannel내에서 elemnet들을 drag drop으로 이동시킬 수 있다
2. 한번에 하나의 pannel만 이동 가능하고 이동한 패널의 위치는 유지된다.
3. pannel외부로는 나갈 수 없다

#### 사용
1. drag로 이동할 element 리스트를 받아서 사용

~~~javascript
const elems: HTMLElement[]
~~~

### 주의사항
1. 위치 요소의 계산과 class contain에 유의한다
