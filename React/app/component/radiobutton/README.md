ver1.0 ([github link](https://github.com/Komponent1/Komponent/tree/master/React/app/srcs/components/radiobutton))

### How to Use

~~~javascript
import { RadioButton } from 'komponent/react/component';

<RadioButton
  labels={/* list of label */}
  setValue={/* change function of parent state */}
  init={/* value of first checked (idx) */}
  layout={/* layout of vertical(column) or horizontal(row) */}
/>
~~~

### Parameter

|name|type|default|must|explain|
|:---|:---|:---|:---|:---|
|labels|`string[]`|`undefined`|yes|버튼에 삽입될 라벨들|
|setValue|`(value: string, i?: number) => void\|any`|`undefined`|yes|부모 엘리먼트의 선택 상태를 변경하는 함수, value는 라벨값, i는 라벨 순번|
|init|`number`|`-1`|no|최초에 선택되어있을 여부, 선택 idx값|
|layout|`'row'\|'column'`|`row`|no|버튼의 디스플레이 방향|


### 기능
선택에 따라 하나의 요소만 선택되는 멀티 클래스 버튼

### structure(for styling)
```html

<div class='kui_radiobutton'>
  <div class='kui_radiobutton_btnset'>
    <div class='kui_radiobutton_button'>
      <div class='kui_radiobutton_round' />
      <div class='kui_radiobutton_background' />
      <div class='kui_radiobutton_icon' />
    </div>
    <div class='kui_radiobutton_label' />
  </div>
  <div class='kui_radiobutton_btnset' />
    ...
</div>
```

