ver1.0 ([github link](https://github.com/Komponent1/Komponent/ree/master/Vanilla/app/srcs/components/tab))

### 기능
1. Nav를 클릭하면 해당 nav에 연결된 content를 하위에 표기한다
2. Tab은 각각의 nav를 클릭시 해당 요소의 context를 보여준다.

### 사용
1. tab의 title과 해당하는 element를 리스트로 받아 사용

~~~javascript
type Tab = {
  title: string,
  elem: HTMLElement
}
parameter: {
  tabs: Tab[]
}
~~~

### 특이사항
1. 사이즈에 유의하며 작업
