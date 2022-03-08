ver1.0 ([github link](https://github.com/Komponent1/Komponent/tree/master/React/app/srcs/components/infinitescroll))

### How to Use

~~~javascript
import { InfiniteScroll } from 'komponent/react/component';

<InfiniteScroll
  fetcher={/* pagination api function */}
/>
~~~

### Parameter

|name|type|default|must|explain|
|:---|:---|:---|:---|:---|
|fetcher|`(idx: number) => Promise<{ data: any[] }`|`undefined`|yes|data를 가져오는 api함수이고, idx는 페이지네이션값|

### 기능
scroll을 리스트 최하단까지 내렸을 때 다음 요소를 불러오는 스크롤 엘리먼트

### structure(for styling)
```html
<div class='kui_infinitescroll'>
  <p class='kui_infinitescroll_li'/>
  <p class='kui_infinitescroll_li'/>
  ...
  <div class='kui_infinitescroll_trigger' />
</div>
```

