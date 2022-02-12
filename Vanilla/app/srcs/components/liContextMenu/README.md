ver1.0 ([github link](https://github.com/Komponent1/Komponent/ree/master/Vanilla/app/srcs/components/licontextmenu))

### 기능
1. 특정 메뉴를 클리시 해당 요소의 child가 연속적으로 등장한다
2. 메뉴 클릭시 이외 메뉴의 child는 모두 사라진다
3. 외부를 클릭시 모든 child는 사라진다

### 사용
1. list의 child를 계층화한 json형태를 받아서 동작, 해당 동작에 대한 action을 동시에 적용시킨다

~~~javascript
type data = {
  name: string,
  shortcut?: string,
  li?: data[],
  act?: Function
}

parameter: {
  datas: data[]
}
~~~

### 주의사항
1. 위치와 포지셔닝에 주의하며 작업(class요소의 top / left에 유의)

### BUG
1. SubSub 메뉴가 해당 요소를 클릭시에만 사라지고 이외엔 안사라짐
