ver1.0 ([github link](https://github.com/Komponent1/Komponent/tree/master/React/app/srcs/components/tab))

### How to Use

~~~javascript
import { Tab } from 'komponent/react/component';

<Tab titles={/* list of tab string */}>
  <!-- children component -->
</Tab>
~~~

### Parameter

|name|type|default|must|explain|
|:---|:---|:---|:---|:---|
|title|`stirng[]`|`undefined`|yes|구성하고 있는 탭의 이름 리스트|

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
