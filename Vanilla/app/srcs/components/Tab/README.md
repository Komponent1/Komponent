ver1.0 ([github link](https://github.com/Komponent1/Komponent/tree/master/Vanilla/app/srcs/components/tab))

### How to Use

~~~javascript
import { tab } from 'komponent/vanilla/component';

const tab = tab({ 
  config = [{
    title: 'tab name',
    elem: /* tab HTMLelement */
  }]
});

document.body.appendChild(tab);
~~~

### Parameter

|name|type|default|must|explain|
|:---|:---|:---|:---|:---|
|config|`{ title: string, elem: HTMLElement}[]`|`undefined`|yes|tab의 이름과 tab 표시요소를 가진 config|

### 기능
엘리먼트를 탭에따라서 화면에 표기하는 컴포넌트

### structure(for styling)
```html
<div class='kui_tab'>
  <div class='kui_tab_nav'>
    <div class='kui_tab_glider' />
    <div class='kui_tab_navitem'>
      <p />
    </div>
    ...
  </div>
  <div class='kui_tab_item'>
    <!-- element of config -->
  </div>
</div>

```
