ver1.0 ([github link](https://github.com/Komponent1/Komponent/tree/master/Vanilla/app/srcs/components/btnmenu))

### 기능
1. 클릭시 관련된 메뉴가 등장
  - 리스트에 대한 특정 동작을 시행하는 서브 메뉴로 많이 생성됨
2. 메뉴 클릭시 해당 동작 진행

### 사용
1. 사용할 메뉴의 action을 포함한 config를 설정해서 넘긴다

~~~javascript
menus: {
  fetcher: (any) => Promise<data>
}
~~~

### 특이사항
1. keyup과 click에 대한 Event binding의 차이를 구별할것

### BUG
1. UL이 추가적으로 생기는 문제 발생
