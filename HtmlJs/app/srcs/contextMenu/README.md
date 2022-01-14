# ContextMenu

## 동작 조건

- 특정 elem을 클릭하면 해당 elem에 등록된 contextMenu가 등장한다
    - hard: 클릭한 위치에 생성되도록 만든다
- 다른 contextMenu를 클릭하면 해당하지 않는 contextMenu는 사라진다
- 그 외 외부를 클릭하면 모든 contextMenu는 사라진다

## 주의해야할 부분

- event의 전파를 제어하는 것이 상당히 중요하다

```jsx
elem.stopPropagation();
elem.preventDefault();
```

## 설계해보기

- elem에 해당하는 context는 display가 none이다.
- 마우스를 올리면 커서가 cursor가 된다
- 클릭하면 현재 마우스 위치를 변수로 저장한다
- context의 display를 visible화 한다
    - context는 겹쳐서 보여져야하므로 position은 absolte 혹은 fixed이며 z-index가 상위여야한다.
- 다른 elem의 context를 none으로 바꾼다
- 외부를 클릭하면 모든 elem의 context를 none으로 바꾼다.
- 만약 켜져있으면