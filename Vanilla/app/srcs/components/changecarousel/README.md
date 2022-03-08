ver1.0 ([github link](https://github.com/Komponent1/Komponent/tree/master/Vanilla/app/srcs/components/changecarousel))

### How to Use

~~~javascript
import { changecarousel } from 'komponent/vanilla/component';

const changecarousel = changecarousel({ 
  elems: /* Element of carousel elements */
  auto: true /* auto carousel move flag */
  width: 'carousel width, recommend elems width'
  height: 'carousel height, recommend elems height'
});

document.body.appendChild(changecarousel);
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
<div class='kui_changecarousel'>
  <div class='kui_changecarousel_item'/>
  <div class='kui_changecarousel_item'/>
  <div class='kui_changecarousel_btnset'>
    <button><div class='select' /></button>
    <button><div /></button>
    <button><div /></button>
  </div>
</div>

```
