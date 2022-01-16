export function makeDiv(name: string, elem: HTMLElement | HTMLDivElement) {
  const div = document.createElement("div")
  div.classList.add("content_box");

  const title = document.createElement("h1");
  const titleText = document.createTextNode(name)
  title.appendChild(titleText);
  title.classList.add("title");
  
  div.appendChild(title);
  div.appendChild(elem);

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