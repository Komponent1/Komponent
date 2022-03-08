ver1.0 ([github link](https://github.com/Komponent1/Komponent/tree/master/React/app/srcs/components/slider))

### How to Use

~~~javascript
import { Slider } from 'komponent/react/component';

<Slider
  setValue={/* set value(0 ~ 1) function of parent state */}
  width={/* width px of slider */}
  init={/* number(0 ~ 1) of first status */}
  />
~~~

### Parameter

|name|type|default|must|explain|
|:---|:---|:---|:---|:---|
|setValue|`(val:number) => void\|any`|`undefined`|yes|슬라이더 변화에 따라|
|width|`number`|`100`|no|슬라이더의 가로 길이 반드시 픽셀단위 정값이 들어간다|
|init|`number(0 ~ 1)`|`0`|no|슬라이더 최초위치 비율값 0 ~ 1 범위로 입력한다|

### 기능
좌우 이동 슬라이더, 값의 비율을 조절하는 컴포넌트

### structure(for styling)
```html
<div class='kui_slider'>
  <div class='kui_slider_up'/>
  <div class='kui_slider_down'/>
  <div class='kui_slider_marker'/>
  ...
</div>

```