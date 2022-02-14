# Scrollspy

## 주의할 점

- scroll event
  - scrollingElement → scroll 요소에 대한 처리
  - scroll 이벤트는 발생이 많이 되므로 최적화에 주의해야한다.

- height 계산
  - element의 height를 offset과 함께 게산하는데 유의한다

## 설계하기

- nav를 클릭했을때 해당 위치로 scrolling한다.
- 현재 화면에 보이는 오브젝트에 대한 nav가 색이 변한다(active 상태)
  - 해당요소의 특정 위치가 특정 영역보다 위에 있을 시 해당 요소가 보여지는 요소로 처리한다
  - **브라우저의 크기와 관계없이 동작할 수 있어야 한다**

## Closer를 통한 윈도우 화면 계산 단순화
```js
const getOffset = (() => {
    let offsetTop = 0;
    let res = [];

    return () => {
      if (window.innerHeight === offsetTop) {
        return res;
      }
      offsetTop = window.innerHeight;
      res = items.map(e => {
        const [ offset, clientHeight ] = [ e.offsetTop, e.clientHeight ];
        return [ offset - clientHeight / 2, offset + clientHeight / 2 ];
      })
      
      return res;
    }
  })();

   window.addEventListener("scroll", (e: any) => {
    const { scrollTop } = e.target.scrollingElement;

    const idx = getOffset().findIndex(([from, to]) => (
      scrollTop >= from && scrollTop < to
    ));
    navitems.forEach((navitem, i) => {
      if (i === idx) navitem.classList.add("select");
      else navitem.classList.remove("select");
    })
  })
```

## resize event를 통한 화면 계산 단순화
```js
let offsets = [];
  const getOffset = () => {
    offsets = [];
    for (let i = 0; i < num; i++) {
      const [ offset, clientHeight ] = [ items[i].offsetTop, items[i].clientHeight ];
      offsets.push([ offset - clientHeight / 2, offset + clientHeight / 2 ]);
    }
  };
  getOffset(); //This is not work correctly becuase of it work before rendering(appendchild in body)

  window.addEventListener("resize", getOffset);
  window.addEventListener("scroll", (e: any) => {
    const { scrollTop } = e.target.scrollingElement;
    const idx = offsets.findIndex(([from, to]) => (
      scrollTop >= from && scrollTop < to
    ));
    navitems.forEach((navitem, i) => {
      if (i === idx) navitem.classList.add("select");
      else navitem.classList.remove("select");
    })
  })
```

## IntersectionObserver를 통한 화면 계산 단순화

```js
  const observer = new IntersectionObserver(
    entries => {
      const { target } = entries.find(entry => entry.isIntersecting) || {};
      const idx = items.indexOf(target);
      navitems.forEach((e, i) => {
        if (i !== idx) e.classList.remove('select');
        else e.classList.add('select');
      })
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.5 /* 이값을 통해 화면 비율 처리하므로 특정 크기의 요소엔 사용하기 힘듬 */
    }
  )
  items.forEach(e => observer.observe(e));
```