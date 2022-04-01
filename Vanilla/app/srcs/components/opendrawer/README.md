ver1.0 ([github link](https://github.com/Komponent1/Komponent/tree/master/Vanilla/app/srcs/components/opendrawer))

### How to Use

~~~javascript
import { opendrawer } from 'komponent/vanilla/component';

const OpenDrawer = opendrawer({
  title: 'string of selector title',
  config: {
    text: 'li text',
    act: /* click event when act */
  }[],
  init: /* first open or not */
});

document.body.appendChild(OpenDrawer);
~~~

### Parameter

|name|type|default|must|explain|
|:---|:---|:---|:---|:---|
|title|`string`|`undefined`|yes|셀럭터 타이틀 텍스트|
|config|`아래 참고`|`undefined`|yes|셀렉터의 선택 요소들|
|init|`boolean`|`false`|no|최초에 리스트 오픈 여부|

```typescript
type Config = {
  text: string,
  act: (e: MouseEvent, value: string) => void | any
}
```

### 기능
버튼을 통해 특정 요소의 on/off를 활성화 하는 컴포넌트

### structure(for styling)
```html
<div class='kui_opendrawer'>
  <div class='kui_opendrawer_head'>
    <div class='kui_opendrawer_name'/>
    <div class='kui_opendrawer_btn'/>
  </div>
  <div class='kui_opendrawer_ul'>
    <div class='kui_opendrawer_li'/>
    <div class='kui_opendrawer_li'/>
    ...
  </div>
</div>

```