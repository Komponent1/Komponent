ver1.0 ([github link](https://github.com/Komponent1/Komponent/tree/master/React/app/srcs/components/tip))

### How to Use

~~~javascript
import { Tip } from 'komponent/react/component';

<Tip text='tip text'>
  <element of children with tip />
</Tip>
~~~

### Parameter

|name|type|default|must|explain|
|:---|:---|:---|:---|:---|
|text|`string`|`undefined`|yes|tip으로 보여줄 텍스트|

### 기능
엘리먼트를 탭에따라서 화면에 표기하는 컴포넌트

### structure(for styling)
```html
<div class='kui_tip'>
  <div class='kui_tip_background'/>
  <!-- element of param -->
  <div class='kui_tip_tip' />
</div>

```
