ver1.0 ([github link](https://github.com/Komponent1/Komponent/tree/master/React/app/srcs/components/dropdown))

### How to Use

~~~javascript
import { Dropdown } from 'komponent/react/component';

<Dropdown 
  tag='place holder of dropdown'
  options={/* list of option string */}
  setOtion={/* set parent state with option */}
/>
~~~

### Parameter

|name|type|default|must|explain|
|:---|:---|:---|:---|:---|
|tag|`string`|`undefined`|yes|값에대한 placeholder|
|options|`string[]`|`undefined`|yes|드롭다운의 값 리스트|
|setOption|`(option: string, idx?:number) => void\|any`|`undefined`|yes|드롭다운이 변경될때 상위 스테이트를 변경하는 함수|


### 기능
여러 요소들중 선택하는 select 컴포넌트

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