ver1.0 ([github link](https://github.com/Komponent1/Komponent/tree/master/React/app/srcs/components/sortedlist))

### How to Use

~~~javascript
import { Sortedlist } from 'komponent/react/component';

<Sortedlist
  checkoption={/* if need of checkbox in list */}
  config={/* list data */}
/>
~~~

### Parameter

|name|type|default|must|explain|
|:---|:---|:---|:---|:---|
|checkoption|`(checked: boolean[]) => any\|void`|`undefined`|no|리스트에 체크를 할때 해야할 상위 동작, 통상 check리스트의 업데이트 활용|
|config|`{ name: string, [key: string]: string }[]`|`undefined`|yes|list의 요소, 최소 1개 이상의 요소가 반드시 있어야한다|

### 기능
리스트에 각 라벨에 대한 소팅기능을 추가한 엘리먼트

### structure(for styling)
```html
<div class='kui_sortedlist'>
  <div class='kui_list'>
    <div class='kui_list_title'>
      <div class='kui_list_item' />
      <div class='kui_list_item' />
      ...
    </div>
    <div class='kui_kui_list_li'>
      <div class='kui_list_item' />
      <div class='kui_list_item' />
      ...
    </div>
    <div class='kui_kui_list_li'/>
    ...
  </div>
</div>

```
