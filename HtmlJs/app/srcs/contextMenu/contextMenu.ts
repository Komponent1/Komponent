import './contextMenu.css'

// 단일 메뉴의 경우
function contextMenu(parent: HTMLElement, num: number): HTMLDivElement {
  const wrapper = document.createElement("div");
  wrapper.classList.add("context_wrap");

  const items = [];
  const contexts = [];
  for (let i = 0; i < num; i++) {
    let item = document.createElement("div");
    item.classList.add("context_item")
    let context = document.createElement("div");
    context.classList.add("context");
    item.appendChild(context);
    wrapper.appendChild(item);
    
    items.push(item);
    contexts.push(context);
  }

  wrapper.addEventListener("click", e => {
    e.stopPropagation();

    items.forEach((item, i) => {
      if (item === e.target) {
        contexts[i].style.display = "block";
        contexts[i].style.setProperty("--top", (e.offsetY) + "px");
        contexts[i].style.setProperty("--left", (e.offsetX) + "px");
      } else {
        contexts[i].style.display = "none";
      }
    });
  });

  parent.addEventListener("click", e => {
    e.stopPropagation();
    
    contexts.forEach(context => {
      context.style.display = "none";
    })
  })

  return wrapper;
}

export default contextMenu
