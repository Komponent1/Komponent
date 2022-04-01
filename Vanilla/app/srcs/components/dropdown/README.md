ver1.0 ([github link](https://github.com/Komponent1/Komponent/tree/master/Vanilla/app/srcs/components/dropdown))

### How to Use

~~~javascript
import { dropdown } from 'komponent/vanilla/component';

const dropdown = dropdown({
  tag: 'place holder of dropdown',
  options: ['text', 'of', 'dropdown option']
  setOption: /* Funtion of text, option */
});

document.body.appendChild(dropdown);
~~~

### Parameter

|name|type|default|must|explain|
|:---|:---|:---|:---|:---|
|tag|`string`|`undefined`|yes|값에대한 placeholder|
|options|`string[]`|`undefined`|yes|드롭다운의 값 리스트|
|setOption|`(option: string, idx?:number) => void\|any`|`undefined`|yes|드롭다운이 변경될때 상위 스테이트를 변경하는 함수|


### 기능
여러 옵션중 하나를 선택하는 select 컴포넌트

### structure(for styling)
```html
<div class='kui_dropdown'>
  <div class='kui_dropdown_box'/>
  <div class='kui_dropdown_menu'>
    <div class='kui_dropdown_item'/>
    <div class='kui_dropdown_item'/>
    ...
  </div>
</div>

```