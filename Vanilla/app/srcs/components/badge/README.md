ver1.0 ([github link](https://github.com/Komponent1/Komponent/tree/master/Vanilla/app/srcs/components/badge))

### How to Use

~~~javascript
import { badge } from 'komponent/vanilla/component';

const badge = badge({ 
  fethcer: async () => {}, /* get data function */
  elem: /* Element of Child */
});

document.body.appendChild(badge);
~~~

### Parameter

|name|type|default|must|explain|
|:---|:---|:---|:---|:---|
|fetcher|`() => Promise<{data: number \| string}>`|`undefined`|yes|서버로 부터 받아온 정보(반드시 숫자로 변경하여 넘겨줄것)|
|elem|`HTMLElement`|`undefined`|yes|badge가 적용될 엘리먼트|

### 기능
서버로부터 특정 요소의 여부를 확인하여 해당 요소를 엘리먼트의 우상단에 표기, 
주로 새로운 요소에 대한 알람으로 활용된다.

### structure(for styling)
```html
<div class='kui_badge'>
  <--! This for child element -->
  <div class='kui_badge_icon' />
</div>

```
