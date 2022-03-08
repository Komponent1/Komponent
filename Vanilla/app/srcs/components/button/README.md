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
마우스 클릭시 적용된 동작을 하는 컴포넌트

### structure(for styling)
```html
<div class='kui_button'>
  <div class='kui_button_wave' /> <--! This for animation -->
</div>

```