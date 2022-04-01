ver1.0 ([github link](https://github.com/Komponent1/Komponent/tree/master/Vanilla/app/srcs/components/scrollspy))

### How to Use

~~~javascript
import { scrollspy } from 'komponent/vanilla/component';

const scrollspy = scrollspy({ 
  elems: /* Element of inside  */
  height: 'wrap item height, recommand same of elems'
});

document.body.appendChild(scrollspy);
~~~

### Parameter

|name|type|default|must|explain|
|:---|:---|:---|:---|:---|
|elems|`HTMLElement[]`|`undefined`|yes|scolling에 잡힐 각 object|
|height|`string`|`100%`|no|item wrap height|


### 기능
scroll시에 해당 위치를 nav에 표기하거나 nav를 클릭시 해당 위치로 스크롤 이동

### structure(for styling)
```html
<div class='kui_scrollspy'>
  <div class='kui_scrollspy_nav'>
    <div class='kui_scrollspy_navitem' />
    <div class='kui_scrollspy_navitem' />
    ...
  </div>
  <div class='kui_scrollspy_itemwrap'>
    <div class='kui_scrollspy_item' />
    <div class='kui_scrollspy_item' />
    ...
  </div>
</div>
```

