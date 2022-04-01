ver1.0 ([github link](https://github.com/Komponent1/Komponent/tree/master/React/app/srcs/components/togglemenu))

### How to Use

~~~javascript
import { ToggleMenu } from 'komponent/react/component';

<ToggleMenu
  type='type of toggle menu'
  config={/* attribute of toggle button */}
/>
~~~

### Parameter

|name|type|default|must|explain|
|:---|:---|:---|:---|:---|
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
