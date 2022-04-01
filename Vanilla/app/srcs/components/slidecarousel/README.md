ver1.0 ([github link](https://github.com/Komponent1/Komponent/tree/master/Vanilla/app/srcs/components/slidecarousel))

### How to Use

~~~javascript
import { slidecarousel } from 'komponent/vanilla/component';

const slidecarousel = slidecarousel({ 
  elems: /* Element of carousel elements */
  auto: /* auto carousel move flag */
  width: 'carousel width, recommend same of elems',
  height: 'carousel height, recommend same of elems',
});

document.body.appendChild(slidecarousel);
~~~

### Parameter

|name|type|default|must|explain|
|:---|:---|:---|:---|:---|
|elems|`HTMLElemet[]`|`undefined`|yes|캐러셀에 들어갈 엘리먼트 리스트|
|auto|`boolean`|`false`|no|캐러셀이 자동으로 변경되는지에 대한 설정|
|width|`string`|`100%`|no|캐러셀의 너비|
|height|`string`|`100%`|no|캐러셀의 높이|

### 기능
버튼을 클릭하면 보여지는 요소가 변경되는 캐러셀 엘리먼트

### structure(for styling)
```html
<div class='kui_slidecarousel'>
  <div class='kui_slidecarousel_slider'>
    <div class='kui_slidecarousel_item'/>
    <div class='kui_slidecarousel_item'/>
  </div>
  <div class='kui_slidecarousel_rbutton'/>
  <div class='kui_slidecarousel_lbutton'/>
</div>

```
