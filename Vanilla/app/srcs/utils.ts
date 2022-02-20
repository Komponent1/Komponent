export function makeDiv(name: string, explain: string, elem: HTMLElement | HTMLDivElement) {
  const div = document.createElement("div")
  div.classList.add("content_box");

  const title = createElem("h1", 'title');
  title.innerText = name;

  const example = createElem('div', 'example');
  example.appendChild(elem);

  const sub = document.createElement('div');
  sub.innerHTML = explain;
  
  div.appendChild(title);
  div.insertAdjacentHTML("beforeend", "<h2>Example</h2>");
  div.appendChild(example);
  div.appendChild(sub);

  return div
};

/* set returnType is type of listener  */
export function throttle (func: any, delay: number): (this: Window, ev: Event) => any {
  let thorttled = false;
  return (...arg: any[]): void => {
    if (!thorttled) {
      thorttled = true;
      setTimeout(() => {
        func(...arg);
        thorttled = false;
      }, delay)
    }
  } 
}
export function debounce (func: any,delay: number): (this: Window, ev: Event) => any {
  let timeoutId = null;
  return (...arg: any[]): void => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(func.bind(null, ...arg), delay);
  }
}

export function timer (datas: Object) {
  return (resolve: any) => {
    setTimeout(() => resolve(datas), (Math.round(Math.random() * 5) + 1) * 250);
  }
}
type Obj = {
  data: any[]
}
export function fetcher(datas: any[] | any): Promise<Obj> {
  return new Promise(timer({ data: datas }));
}

export function createElem (type: string, classname?: string) {
  const elem = document.createElement(type);
  if (classname) elem.classList.add(classname);

  return elem;
};

export function makeDummyElem(): HTMLElement[] {
  const colors = [ '#BF7950', '#8C634A', '#A6A6A6', '#B3D5F2'];

  const elems = colors.map(e => {
    const elem = document.createElement('div');
    elem.style.backgroundColor = e;
    elem.style.width = '100%';
    elem.style.height = '100%';

    return elem;
  })
  return elems
};
