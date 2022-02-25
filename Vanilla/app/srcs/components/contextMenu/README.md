ver1.0 ([github link](https://github.com/Komponent1/Komponent/tree/master/Vanilla/app/srcs/components/contextmenu))

### How to Use

~~~javascript
import { contextmenu } from 'komponent/vanilla/component';

const contextmenu = contextmenu({ 
  menu: 'text of menu',
  context: 'text of contextmenu'
});

document.body.appendChild(contextmenu);
~~~

### Parameter

|name|type|default|must|explain|
|:---|:---|:---|:---|:---|
|config|`{ menu: string, context: string }[]`|`undefined`|yes|메뉴 텍스트와 콘텍스트에 보여질 텍스트|

### 기능
메뉴를 클릭하면 해당 요소에 해당하는 콘텍스트를 보여주는 컴포넌트

### structure(for styling)
```html
<div class='kui_contextmenu'>
  <p class='kui_contextmenu_menu'>
    <p class='kui_contextmenu_context' />
  </p>
  <p class='kui_contextmenu_menu'>
    <p class='kui_contextmenu_context' />
  </p>
  ...
</div>

```
