ver1.0 ([github link](https://github.com/Komponent1/Komponent/ree/master/Vanilla/app/srcs/components/autocomplete))

### How to Use

~~~javascript
import { autocomplete } from 'komponent/vanilla/component';

const autocomplete = autocomplete({ 
  fethcer: async () => {}, /* get data function */
  placeholder: 'explain of example'
});

document.body.appendChild(autocomplete);
~~~

### Parameter

|style| aaa  |bbb   |
|---|---|---|
|   s| s  | s  |

### 기능
1. 특정 언어에 대한 검색 자동완성을 지원
2. 해당 언어를 클릭하면 input에 해당 요소를 삽입

### 사용
1. 데이터를 가져오는 API fethcer를 받아서 동작시킨다

~~~javascript
paramter: {
  fetcher: (any) => Promise<data>
}
~~~

### 특이사항
1. keyup과 click에 대한 Event binding의 차이를 구별할것

### BUG
1. UL이 추가적으로 생기는 문제 발생
