ver1.0 ([github link](https://github.com/Komponent1/Komponent/tree/master/Vanilla/app/srcs/components/tip))

### How to Use

~~~javascript
import { tip } from 'komponent/vanilla/component';

const Tip = tip({ 
  elem: /* element of appear tip when hover */
  text: /* tip text */
});

document.body.appendChild(Tip);
~~~

### Parameter

|name|type|default|must|explain|
|:---|:---|:---|:---|:---|
|elem|`HTMLElement`|`undefined`|yes|tip을 띄울 엘리먼트|
|text|`string`|`undefined`|yes|tip으로 보여줄 텍스트|

### 기능
엘리먼트를 탭에따라서 화면에 표기하는 컴포넌트

### structure(for styling)
```html
<div class='kui_tip'>
  <div class='kui_tip_background'/>
  <!-- element of param -->
  <div class='kui_tip_tip' />
</div>

```
