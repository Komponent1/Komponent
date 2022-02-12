ver 1.0 ([github link](https://github.com/Komponent1/Komponent/ree/master/Vanilla/app/srcs/components/buttoncarousel))

### 기능
1. 버튼을 누르면 해당 화면으로 변경
2. 변경하는 동안 다른 변화 불가
3. 변경시 현재 화면은 fadeout 나오는 화면은 fadein한다

### 사용
1. 랜더링할 element를 리스토로 받아서 실행

~~~javascript
 paramter: {
   elems: HTMLElement[]
 }
~~~

### 특이사항
1. parameter로 제공하는 object와 carousel의 크기에 유의하며 작업할것
2. 변경 딜레이에 유의하며 작업한다 (btncarousel_item class 참조)
