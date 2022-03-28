ver1.0 ([github link](https://github.com/Komponent1/Komponent/tree/master/Vanilla/app/srcs/components/onoffswitch))

### How to Use

~~~javascript
import { onoffswitch } from 'komponent/vanilla/component';

const onoffswitch = onoffswitch({
  setValue: /* set value of on / off function */
});

document.body.appendChild(onoffswitch);
~~~

### Parameter

|name|type|default|must|explain|
|:---|:---|:---|:---|:---|
|setValue|`(on: boolean) => void\|any`|`undefined`|yes|버튼 온/오프에 따라 상위 스테이트 값을 변화시키는 함수|


### 기능
버튼을 통해 특정 요소의 on/off를 활성화 하는 컴포넌트

### structure(for styling)
```html
<div class='kui_onoffswitch'>
  <div class='kui_onoffswitch_icon'/>
  <div class='kui_onoffswitch_leftbar'/>
  <div class='kui_onoffswitch_rigthbar'/>
</div>

```