ver1.0 ([github link](https://github.com/Komponent1/Komponent/tree/master/Vanilla/app/srcs/components/floatdial))

### How to Use

~~~javascript
import { floatdial } from 'komponent/vanilla/component';

const Floatdial = floatdial({ 
  config: [
    {
      icon: /* img src or text of dials */,
      type: /* type of icon(text, img) */,
      act: /* function of click of dial */,
      tip?: /* tip(explain) of button */
    }
  ]
});

document.body.appendChild(Floatdial);
~~~

### Parameter

|name|type|default|must|explain|
|:---|:---|:---|:---|:---|
|config|`아래 참고`|`undefined`|yes|float button이 포함할 dial 요소들|

~~~typescript
type config = {
  icon: string,
  type: 'img'|'text',
  act: Funtion,
  tip?: string
}[]
~~~

### 기능
플로팅 버튼에 호버시 해당 버튼의 요소들이 나오는 컴포넌트

### structure(for styling)
```html
<div class='kui_floatdial'>
  <div class='kui_floatdial_button'/>
  <div class='kui_floatdial_list'>
    <div class='kui_tip'>
      <div class='kui_tip_backgroud' />
      <div class='kui_floatdial_item' />
      <div class='kui_tip_tip' />
    </div>
    <div class='kui_floatdial_item' />
    ...
  </div>
</div>
```

