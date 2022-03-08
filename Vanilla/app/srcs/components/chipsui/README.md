ver1.0 ([github link](https://github.com/Komponent1/Komponent/tree/master/React/app/srcs/components/contextmenu))

### How to Use

~~~javascript
import { chipsui } from 'komponent/react/component';

const Chipsui = chipsui({
  prev: /* string list of tag */,
  fetcher: /* api function for server update */
});

document.body.appendChild(Chipsui);
~~~

### Parameter

|name|type|default|must|explain|
|:---|:---|:---|:---|:---|
|prev|`string[]`|`[]`|no|초기 해시태그 값|
|fetcher|`(text: string) => Promise<any\|void>`|`async () => {}`|no|서버 데이터를 업데이트할 태그값|

### 기능
특정 해시태그를 추가 / 삭제하는 엘리먼트

### structure(for styling)
```html
<div class='kui_chips'>
  <div class='kui_chips_wrapper'>
    <div class='kui_chips_chip'>
      <span />
      <div class='kui_chips_del' />
    </div>
    <div class='kui_chips_chip' />
    ...
  </div>
  <input class='kui_chips_input' />
</div>

```
