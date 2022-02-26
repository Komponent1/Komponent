ver1.0 ([github link](https://github.com/Komponent1/Komponent/tree/master/Vanilla/app/srcs/components/togglemenu))

### How to Use

~~~javascript
import { togglemenu } from 'komponent/vanilla/component';

const togglemenu = togglemenu({
  init: /* first checked */
  config = {

  }
});

document.body.appendChild(togglemenu);
~~~

### Parameter

|name|type|default|must|explain|
|:---|:---|:---|:---|:---|
|config|`HTMLElement[]`|`undefined`|yes|드래그될 엘리먼트 리스트|

### 기능
특정 요소를 해당 패널 내부에서 드래그하여 이동할 수 있는 컴포넌트

### structure(for styling)
```html
<div class='kui_dragablepannel'>
  <div class='kui_dragablepannel_drag'>
    <!-- element of parameter -->
  </div>
  <div class='kui_dragablepannel_drag' />
  ...
</div>

```
