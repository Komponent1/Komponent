ver1.0 ([github link](https://github.com/Komponent1/Komponent/tree/master/Vanilla/app/srcs/components/scrollnav))

### How to Use

~~~javascript
import { ScrollNav } from 'komponent/vanilla/component';

<ScrollNav
  scolldiv={/* ref of wrapper element */}
  items={/* refs of scolling elements */}>
~~~

**Example of Refs**
```javascript
const ref = useRef(null);
const refs = useRef<[]>(Array.from({ length: /* # of elem's */ }).map(() => React.createRef()));
<wrapper ref={ref}>
  {elems.map((_, i) => (
    <item ref={refs.current[i]} />
  ))}
</wrapper>

<ScrollNav scolldiv={ref} items={refs} />
```

### Parameter

|name|type|default|must|explain|
|:---|:---|:---|:---|:---|
|scrolldiv|`React.Ref`|`undefined`|yes|scoll element를 담은 상위 컴포넌트 ref, position반드시 relative|
|items|`React.Ref<React.Ref[]>`|`undefined`|yes|scolling에 잡힐 각 object ref|


### 기능
scroll시에 해당 위치를 nav에 표기하거나 nav를 클릭시 해당 위치로 스크롤 이동하는 navigation

### structure(for styling)
```html

<div class='kui_scrollnav'>
  <div class='kui_scrollnav_item' />
  <div class='kui_scrollnav_item' />
    ...
</div>
```

