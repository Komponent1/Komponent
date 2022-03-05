ver1.0 ([github link](https://github.com/Komponent1/Komponent/tree/master/React/app/srcs/components/parallexscroll))

### How to Use

~~~javascript
import { ParallexScroll } from 'komponent/react/component';

<ParallexScroll
  height={/* height of wrapper, recommend height of children*/}
  delay={/* number list of delays of layer parallex */}
/>
~~~

### Parameter

|name|type|default|must|explain|
|:---|:---|:---|:---|:---|
|height|`string`|`100%`|no|scroll높이, element높이랑 같은게 이상적임|
|delays|`number[](0 ~ 1)`|`undefined`|yes|스크롤링될 요소와 해당 요소의 이동 딜레이(0 ~ 1), 없을시 1, 1이면 이동없음|


### 기능
스크롤시 상위 레이어의 이동이 비동일하게 스크롤되는 요소

### structure(for styling)
```html
<div class='kui_parallexscroll'>
  <div class='kui_parallexscroll_layer'>
    <!-- element of cofig -->
  </div>
  <div class='kui_parallexscroll_layer' />
  ...
</div>

```