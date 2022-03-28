ver1.0 ([github link](https://github.com/Komponent1/Komponent/tree/master/Vanilla/app/srcs/components/togglemenu))

### How to Use

~~~javascript
import { togglemenu } from 'komponent/vanilla/component';

const togglemenu = togglemenu({
  init: /* first select index */
  type: 'type of select condition',
  config = {
    type: 'type of inside of toggle(text / must / multi)',
    src: /* inside of element in toggle */,
    act: /* option of active */
  }
});

document.body.appendChild(togglemenu);
~~~

### Parameter

|name|type|default|must|explain|
|:---|:---|:---|:---|:---|
|init|`number`|`undefined`|no|최초 select상태, 없을 수 있음|
|type|`'nomal'\|'must'\|'multi'`|no|버튼 선택 타입|
|config|`Config[](아래 참고)`|`undefined`|yes|토글버튼의 요소들|

```typescript
type Config = {
  type: 'img'|'text'|'elem',
  src: string | HTMLElement,
  act: Function
}
```

### 기능
특정 버튼을 클릭함으로써 해당 속성을 활성화 시키는 멀티버튼

### structure(for styling)
```html
<div class='kui_togglemenu'>
  <div class='kui_togglemenu_icon'/>
  <div class='kui_togglemenu_icon'/>
  ...
</div>

```
