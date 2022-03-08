ver1.0 ([github link](https://github.com/Komponent1/Komponent/tree/master/Vanilla/app/srcs/components/parallexscroll))

### How to Use

~~~javascript
import { parallexscroll } from 'komponent/vanilla/component';

const parallexscroll = parallexscroll({
  config = {
    elem: /* element of scroll */,
    delay: /* delay movement of scroll(0 ~ 1) */
  }
});

document.body.appendChild(parallexscroll);
~~~

### Parameter

|name|type|default|must|explain|
|:---|:---|:---|:---|:---|
|config|`{ elem: HTMLElement, delay: number(0 ~ 1)}[]`|`undefined`|yes|스크롤링될 요소와 해당 요소의 이동 딜레이(0 ~ 1), 없을시 1, 1이면 이동없음|


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