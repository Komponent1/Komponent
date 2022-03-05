ver1.0 ([github link](https://github.com/Komponent1/Komponent/tree/master/React/app/srcs/components/checkbox))

### How to Use

~~~javascript
import { Checkbox } from 'komponent/react/component';

<Checkbox
  init={/* state of init check state */}
  setCheck={/* update check state in parent */}
  />
~~~

### Parameter

|name|type|default|must|explain|
|:---|:---|:---|:---|:---|
|init|`boolean`|`false`|no|체크 최초 상태 정의|
|setChecked|`(check: boolean) => any|void`|`undefined`|yes|체크 상태 변경시 동작할 액션|

### 기능
해당 요소에 대한 선택 여부를 체크하는 컴포넌트

### structure(for styling)
```html
<div class='kui_checkbox'>
  <div class='kui_checkbox_outline' />
  <div class='kui_checkbox_wave' />
  <div class='kui_checkbox_background' />
</div>

```
