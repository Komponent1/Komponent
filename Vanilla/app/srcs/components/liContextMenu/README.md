ver1.0 ([github link](https://github.com/Komponent1/Komponent/tree/master/Vanilla/app/srcs/components/licontextmenu))

### How to Use

~~~javascript
import { licontextmenu } from 'komponent/vanilla/component';

const licontextmenu = licontextmenu({ 
  config: /* data of submenus */
});

document.body.appendChild(licontextmenu);
~~~

### Parameter

|name|type|default|must|explain|
|:---|:---|:---|:---|:---|
|config|`{ name, shorcut?, li?, act? }[]`|`undefined`|yes|하나의 메뉴에 들어갈 옵션들 값, 아래 참고|

```typescript
type config = {
  name: string/* string of menu */,
  shorcut?: string/* string of shorcut (key bind) */,
  li?: config[] /* sub menu */,
  act?: Function /* act when click menu */,
}
```

### 기능
메뉴를 클릭하면 해당 메뉴의 하위 메뉴리스트가 표기되는 컴포넌트

### structure(for styling)
```html
<div class='kui_licontextmenu'>
  <div class='kui_licontextmenu_icon'>
    <p/>
    <ul class='kui_licontextmenu_ul'>
      <li class='kui_licontextmenu_li'>
        <ul class='kui_licontextmenu_subul'>
          <li class='kui_licontextmenu_li'>
          <li class='kui_licontextmenu_li'>
          ...
        </ul>
      </li>
      <li class='kui_licontextmenu_li' />
      ...
    </ul>
  </div>
  <div class='kui_licontextmenu_icon' />
  ...
</div>
```

