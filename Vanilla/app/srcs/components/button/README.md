ver1.0 ([github link](https://github.com/Komponent1/Komponent/tree/master/Vanilla/app/srcs/components/button))

### How to Use

~~~javascript
import { button } from 'komponent/vanilla/component';

const button = button({ 
  text: 'button text',
  click: (e: MouseEvent) => { /* button click action */ }
});

document.body.appendChild(badge);
~~~

### Parameter

|name|type|default|must|explain|
|:---|:---|:---|:---|:---|
|text|`string`|`''`|no|버튼에 들어갈 text값|
|click|`(e: MouseEvent) => void`|`e => {}`|no|버튼 클릭시(`mouseup`) 작동할 동작|

### 기능
서버로부터 특정 요소의 여부를 확인하여 해당 요소를 엘리먼트의 우상단에 표기, 
주로 새로운 요소에 대한 알람으로 활용된다.

### structure(for styling)
```html
<div class='kui_button'>
  <div class='kui_button_wave' /> <--! This for animation -->
</div>

```