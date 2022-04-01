ver1.0 ([github link](https://github.com/Komponent1/Komponent/tree/master/Vanilla/app/srcs/components/scrollnav))

### How to Use

~~~javascript
import { scrollnav } from 'komponent/vanilla/component';

const scrollnav = scrollnav({ 
  scrolldiv: /* scroll wrapper */,
  elems: /* Element of scrolling  */
});

document.body.appendChild(scrollnav);
~~~

### Parameter

|name|type|default|must|explain|
|:---|:---|:---|:---|:---|
|scrolldiv|`HTMLElement`|`undefined`|yes|scoll element를 담은 상위 컴포넌트, position반드시 relative|
|elems|`HTMLElement[]`|`undefined`|yes|scolling에 잡힐 각 object|


### 기능
scroll시에 해당 위치를 nav에 표기하거나 nav를 클릭시 해당 위치로 스크롤 이동하는 navigation

### structure(for styling)
```html

<div class='kui_scrollnav'>
  <div class='kui_scrollnav_item' />
  <div class='kui_scrollnav_item' />
    ...
</div>
```

