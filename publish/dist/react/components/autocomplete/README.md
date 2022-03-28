ver1.0 ([github link](https://github.com/Komponent1/Komponent/ree/master/Vanilla/app/srcs/components/autocomplete))

### 기능
1. 특정 언어에 대한 검색 자동완성을 지원
2. 해당 언어를 클릭하면 input에 해당 요소를 삽입

### 사용
1. 데이터를 가져오는 API fethcer를 받아서 동작시킨다

~~~javascript
parameter: {
  menus: {
    name: string,
    act: Function 
  }
}[]
~~~

### 특이사항
1. 메뉴가 생성되는 위치에 항시 유의할것
2. 이벤트 바인딩과 릴리즈, stopPropagation에 유의할 것

