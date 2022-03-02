ver1.0 ([github link](https://github.com/Komponent1/Komponent/tree/master/React/app/srcs/components/slidecarousel))

### How to Use

~~~javascript
import { SlideCarousel } from 'komponent/react/component';

<SlideCarousel
  auto={/* auto move of carousel */}
  width='carousel width, recommend same of children'
  height='carousel height, recommend same of children'>
  <!-- components of carousel>
</SlideCarousel>
~~~

### Parameter

|name|type|default|must|explain|
|:---|:---|:---|:---|:---|
|elems|`HTMLElemet[]`|`undefined`|yes|캐러셀에 들어갈 엘리먼트 리스트|
|auto|`boolean`|`false`|no|캐러셀이 자동으로 변경되는지에 대한 설정|
|width|`string`|`100%`|no|캐러셀의 너비|
|height|`string`|`100%`|no|캐러셀의 높이|

### 기능
버튼을 클릭하면 다음 요소로 이동되는 캐러셀 엘리먼트

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
