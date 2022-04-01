ver1.0 ([github link](https://github.com/Komponent1/Komponent/tree/master/Vanilla/app/srcs/components/rating))

### How to Use

~~~javascript
import { rating } from 'komponent/vanilla/component';

const Rating = rating({
  style: /* rating disc style */,
  fetcher: /* function of server api */,
  num: /* number of rating */,
  init: /* init value of rate */
})

document.body.appendChild(Rating);
~~~

### Parameter

|name|type|default|must|explain|
|:---|:---|:---|:---|:---|
|style|`star\|circle`|`star`|no|rating 디스크 스타일|
|fetcher|`(rate: number) => Promise<any|void>`|`() => Promise<void>`|no|서버상 rate 변경 프로세스|
|num|`number`|`5`|no|rating 총 개수|
|init|`number`|`0`|no|최초 레이팅 값|


### 기능
점수를 토글을 통해 매길 수 있는 엘리먼트

### structure(for styling)
```html

<div class='kui_rating'>
  <div class='kui_rating_rate'>
    ::after
  </div>
  <div class='kui_rating_rate' />
    ...
</div>
```

