er1.0 ([github link](https://github.com/Komponent1/Komponent/tree/master/React/app/srcs/components/multiopendrawer))

### How to Use

~~~javascript
import { Multiopendrawer } from 'komponent/react/component';

<Multiopendrawer
  config={[
    title: 'string of drawer title',
      list: {
      text: 'string of drawer list title',
      act: /* action function when click list */
    }[]
  }]}
  direction={/* direction of drawer layout */}
  init={/* first open id (if no = -1) */}
/>
~~~

### Parameter

|name|type|default|must|explain|
|:---|:---|:---|:---|:---|
|config|`아래 참고`|`undefined`|yes|구성할 selector의 configuration|
|direction|`row\|column`|`row`|no|selector가 나열될 방향|
|init|`number`|`-1`|no|최초에 리스트 오픈할 selector, 없을 시 -1|

```typescript
type Config = {
  title: string,
  list: {
    text: string,
    act: (e: MouseEvent, value?: string) => void | any
  }[]
}
```

### 기능
여러개의 selector가 상호작용하는 컴포넌트

### structure(for styling)
```html
<div class='kui_multiopendrawer'>
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
  <div class='kui_opendrawer' />
  ...
</div>
```