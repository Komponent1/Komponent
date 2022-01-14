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
